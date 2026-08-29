import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSET_DIR = join(__dirname, "../src/assets/bgCreta");
const W = 1120;
const H = 425;
const TOTAL_FRAMES = 33;

/** Per-frame manual patches applied after spin-model generation */
const FRAME_OVERRIDES = {
  // Add { grille, headlights, wheels, tailLamps } patches here if QA reveals outliers
};

function pct(x, y) {
  return { x: Math.round((x / W) * 1000) / 10, y: Math.round((y / H) * 1000) / 10 };
}

function spinX(frameIndex, end) {
  const t = (frameIndex / TOTAL_FRAMES) * Math.PI * 2;
  const frac = end === "nose" ? 0.5 - 0.35 * Math.cos(t) : 0.5 + 0.35 * Math.cos(t);
  return frac * W;
}

async function getAlphaBounds(frameIndex) {
  const file = join(ASSET_DIR, `creta${frameIndex + 1}.avif`);
  const { data } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  let minX = W;
  let maxX = 0;
  let minY = H;
  let maxY = 0;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * 4 + 3] > 20) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }
  }

  const bw = maxX - minX;
  const bh = maxY - minY;
  const scanY = minY + bh * 0.4;
  const tailY = minY + bh * 0.38;

  const wheelPoints = [];
  const yStart = Math.floor(maxY - bh * 0.2);
  const yEnd = Math.floor(maxY - bh * 0.06);
  for (let y = yStart; y <= yEnd; y++) {
    for (let x = minX; x <= maxX; x++) {
      if (data[(y * W + x) * 4 + 3] > 20) wheelPoints.push({ x, y });
    }
  }

  const centroid = (pts) => {
    if (!pts.length) return null;
    return {
      x: pts.reduce((s, p) => s + p.x, 0) / pts.length,
      y: pts.reduce((s, p) => s + p.y, 0) / pts.length,
    };
  };

  const midX = minX + bw / 2;
  const leftWheel = centroid(wheelPoints.filter((p) => p.x < midX));
  const rightWheel = centroid(wheelPoints.filter((p) => p.x >= midX));

  return { minX, maxX, bw, bh, scanY, tailY, leftWheel, rightWheel };
}

function headlightX(frameIndex, noseX, noseXFrac, bw, minX, maxX) {
  if (frameIndex >= 8 && frameIndex <= 9) {
    return Math.max(minX + bw * 0.05, noseX - W * 0.12);
  }

  const offset = bw * (noseXFrac < 0.4 ? 0.1 : 0.15);
  if (noseXFrac < 0.5) {
    return Math.max(minX + bw * 0.04, noseX - offset);
  }
  return Math.min(maxX - bw * 0.04, noseX + offset);
}

async function analyzeFrame(frameIndex) {
  const { minX, maxX, bw, bh, scanY, tailY, leftWheel, rightWheel } =
    await getAlphaBounds(frameIndex);

  const noseX = spinX(frameIndex, "nose");
  const tailX = spinX(frameIndex, "tail");
  const noseXFrac = noseX / W;

  let grille = null;
  let headlights = null;
  let wheels = null;
  let tailLamps = null;

  if (frameIndex >= 4 && frameIndex <= 10) {
    grille = pct(noseX, scanY);
    const hlX = headlightX(frameIndex, noseX, noseXFrac, bw, minX, maxX);
    headlights = pct(hlX, scanY - bh * 0.03);
  }

  if (frameIndex <= 3 && leftWheel) {
    wheels = pct(leftWheel.x, leftWheel.y);
  } else if (frameIndex >= 24 && frameIndex <= 32 && leftWheel) {
    wheels = pct(leftWheel.x, leftWheel.y);
  } else if (frameIndex >= 29 && rightWheel) {
    wheels = pct(rightWheel.x, rightWheel.y);
  }

  const tailVisible =
    (frameIndex >= 14 && frameIndex <= 16) ||
    (frameIndex >= 19 && frameIndex <= 28);

  if (tailVisible) {
    tailLamps = pct(tailX, tailY);
  }

  const override = FRAME_OVERRIDES[frameIndex];
  if (override) {
    if (override.grille !== undefined) grille = override.grille;
    if (override.headlights !== undefined) headlights = override.headlights;
    if (override.wheels !== undefined) wheels = override.wheels;
    if (override.tailLamps !== undefined) tailLamps = override.tailLamps;
  }

  return { grille, headlights, wheels, tailLamps };
}

const grilleFrames = Array(TOTAL_FRAMES).fill(null);
const headlightFrames = Array(TOTAL_FRAMES).fill(null);
const wheelFrames = Array(TOTAL_FRAMES).fill(null);
const tailLampFrames = Array(TOTAL_FRAMES).fill(null);

for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
  const result = await analyzeFrame(frame);
  grilleFrames[frame] = result.grille;
  headlightFrames[frame] = result.headlights;
  wheelFrames[frame] = result.wheels;
  tailLampFrames[frame] = result.tailLamps;
}

const data = [
  {
    id: "grille",
    numericId: 1,
    label: "Front Grille",
    description: "Parametric grille design with chrome accents",
    frames: grilleFrames,
  },
  {
    id: "headlights",
    numericId: 2,
    label: "LED Headlights",
    description: "Projector LED headlamps with DRL signature",
    frames: headlightFrames,
  },
  {
    id: "wheels",
    numericId: 3,
    label: "Alloy Wheels",
    description: '17" diamond-cut alloy wheels',
    frames: wheelFrames,
  },
  {
    id: "tailLamps",
    numericId: 5,
    label: "LED Tail Lamps",
    description: "Connected LED tail lamp design",
    frames: tailLampFrames,
  },
];

writeFileSync(join(__dirname, "../src/lib/threeSixtyHotspots.data.json"), JSON.stringify(data, null, 2) + "\n");
console.log("Wrote src/lib/threeSixtyHotspots.data.json\n");

const frameToAngle = (frame) => (frame / TOTAL_FRAMES) * 360;

for (const angle of [55, 76, 98, 142, 218, 284]) {
  const frame = Math.min(TOTAL_FRAMES - 1, Math.floor((angle / 360) * TOTAL_FRAMES));
  const parts = [];
  if (grilleFrames[frame]) parts.push(`G@${grilleFrames[frame].x},${grilleFrames[frame].y}`);
  if (headlightFrames[frame]) parts.push(`HL@${headlightFrames[frame].x},${headlightFrames[frame].y}`);
  if (wheelFrames[frame]) parts.push(`W@${wheelFrames[frame].x},${wheelFrames[frame].y}`);
  if (tailLampFrames[frame]) parts.push(`T@${tailLampFrames[frame].x},${tailLampFrames[frame].y}`);
  console.log(`${angle}° f${frame}: ${parts.join(" | ") || "none"}`);
}
