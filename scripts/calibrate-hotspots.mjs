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
const FRAME_OVERRIDES = {};

function pct(x, y) {
  return { x: Math.round((x / W) * 1000) / 10, y: Math.round((y / H) * 1000) / 10 };
}

function spinX(frameIndex, end) {
  const t = (frameIndex / TOTAL_FRAMES) * Math.PI * 2;
  const frac = end === "nose" ? 0.5 - 0.35 * Math.cos(t) : 0.5 + 0.35 * Math.cos(t);
  return frac * W;
}

function centroid(points) {
  if (!points.length) return null;
  return {
    x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
    y: points.reduce((sum, point) => sum + point.y, 0) / points.length,
  };
}

function refinePoint(data, approxX, approxY, radiusX, radiusY) {
  const points = [];
  const xStart = Math.max(0, Math.floor(approxX - radiusX));
  const xEnd = Math.min(W - 1, Math.ceil(approxX + radiusX));
  const yStart = Math.max(0, Math.floor(approxY - radiusY));
  const yEnd = Math.min(H - 1, Math.ceil(approxY + radiusY));

  for (let y = yStart; y <= yEnd; y++) {
    for (let x = xStart; x <= xEnd; x++) {
      if (data[(y * W + x) * 4 + 3] <= 20) continue;
      const dx = (x - approxX) / radiusX;
      const dy = (y - approxY) / radiusY;
      if (dx * dx + dy * dy <= 1) points.push({ x, y });
    }
  }

  return centroid(points) ?? { x: approxX, y: approxY };
}

function findWheelInRegion(data, minX, maxX, minY, bh, region) {
  const xStart = Math.floor(minX + (maxX - minX) * region.xMinFrac);
  const xEnd = Math.ceil(minX + (maxX - minX) * region.xMaxFrac);
  const yStart = Math.floor(minY + bh * region.yMinFrac);
  const yEnd = Math.ceil(minY + bh * region.yMaxFrac);
  const points = [];

  for (let y = yStart; y <= yEnd; y++) {
    for (let x = xStart; x <= xEnd; x++) {
      if (data[(y * W + x) * 4 + 3] > 20) points.push({ x, y });
    }
  }

  if (!points.length) return null;

  const binWidth = Math.max(8, Math.floor((xEnd - xStart) * 0.18));
  const bins = new Map();
  for (const point of points) {
    const bin = Math.floor(point.x / binWidth) * binWidth;
    bins.set(bin, (bins.get(bin) ?? 0) + 1);
  }

  let bestBin = null;
  let bestCount = 0;
  for (const [bin, count] of bins) {
    if (count > bestCount) {
      bestCount = count;
      bestBin = bin;
    }
  }

  const sortedBins = [...bins.entries()].sort((a, b) => a[0] - b[0]);
  let selectedBin = bestBin;
  for (const [bin, count] of sortedBins) {
    if (count >= bestCount * 0.5) {
      selectedBin = bin;
      break;
    }
  }

  const binCenter = selectedBin + binWidth / 2;
  const wheelPoints = points.filter((point) => Math.abs(point.x - binCenter) <= binWidth * 1.1);
  if (!wheelPoints.length) return null;

  const median = (values) => {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  const rough = {
    x: median(wheelPoints.map((point) => point.x)),
    y: median(wheelPoints.map((point) => point.y)),
  };

  return refinePoint(data, rough.x, rough.y - bh * 0.04, 28, 20);
}

function getWheelRegion(frameIndex) {
  if (frameIndex <= 3) {
    return { xMinFrac: 0, xMaxFrac: 0.3, yMinFrac: 0.72, yMaxFrac: 0.94 };
  }
  if (frameIndex >= 31) {
    return { xMinFrac: 0, xMaxFrac: 0.28, yMinFrac: 0.7, yMaxFrac: 0.94 };
  }
  if (frameIndex >= 24 && frameIndex <= 25) {
    return { xMinFrac: 0, xMaxFrac: 0.22, yMinFrac: 0.74, yMaxFrac: 0.96 };
  }
  if (frameIndex >= 26 && frameIndex <= 30) {
    return { xMinFrac: 0, xMaxFrac: 0.34, yMinFrac: 0.7, yMaxFrac: 0.94 };
  }
  return null;
}

function tailLampX(frameIndex, tailX, bw, minX, maxX) {
  if (frameIndex >= 19 && frameIndex <= 25) {
    return Math.max(minX + bw * 0.06, tailX - bw * 0.16);
  }
  return tailX;
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

  return { minX, maxX, bw, bh, minY, maxY, data };
}

function headlightX(frameIndex, noseX, bw, minX, maxX) {
  if (frameIndex <= 7) {
    return Math.min(maxX - bw * 0.05, noseX + bw * 0.11);
  }
  return Math.max(minX + bw * 0.05, noseX - bw * 0.11);
}

async function analyzeFrame(frameIndex) {
  const { minX, maxX, bw, bh, minY, data } = await getAlphaBounds(frameIndex);

  const noseX = spinX(frameIndex, "nose");
  const tailX = spinX(frameIndex, "tail");

  let grille = null;
  let headlights = null;
  let wheels = null;
  let tailLamps = null;

  if (frameIndex >= 4 && frameIndex <= 10) {
    const grillePoint = refinePoint(data, noseX, minY + bh * 0.47, 42, 24);
    const hlX = headlightX(frameIndex, noseX, bw, minX, maxX);
    const headlightPoint = refinePoint(data, hlX, minY + bh * 0.41, 34, 20);
    grille = pct(grillePoint.x, grillePoint.y);
    headlights = pct(headlightPoint.x, headlightPoint.y);
  }

  const wheelRegion = getWheelRegion(frameIndex);
  if (wheelRegion) {
    const wheelPoint = findWheelInRegion(data, minX, maxX, minY, bh, wheelRegion);
    if (wheelPoint) wheels = pct(wheelPoint.x, wheelPoint.y);
  }

  const tailVisible =
    (frameIndex >= 14 && frameIndex <= 16) ||
    (frameIndex >= 19 && frameIndex <= 28);

  if (tailVisible) {
    const tailLampApproxX = tailLampX(frameIndex, tailX, bw, minX, maxX);
    const tailPoint = refinePoint(data, tailLampApproxX, minY + bh * 0.4, 36, 22);
    tailLamps = pct(tailPoint.x, tailPoint.y);
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

for (const angle of [11, 33, 55, 98, 109, 262, 295, 316, 338]) {
  const frame = Math.min(TOTAL_FRAMES - 1, Math.floor((angle / 360) * TOTAL_FRAMES));
  const parts = [];
  if (grilleFrames[frame]) parts.push(`G@${grilleFrames[frame].x},${grilleFrames[frame].y}`);
  if (headlightFrames[frame]) parts.push(`HL@${headlightFrames[frame].x},${headlightFrames[frame].y}`);
  if (wheelFrames[frame]) parts.push(`W@${wheelFrames[frame].x},${wheelFrames[frame].y}`);
  if (tailLampFrames[frame]) parts.push(`T@${tailLampFrames[frame].x},${tailLampFrames[frame].y}`);
  console.log(`${angle}° f${frame}: ${parts.join(" | ") || "none"}`);
}
