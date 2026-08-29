import sharp from "sharp";
import { readFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSET_DIR = join(__dirname, "../src/assets/bgCreta");
const DATA_PATH = join(__dirname, "../src/lib/threeSixtyHotspots.data.json");
const OUT_DIR = join(__dirname, "../tmp/hotspot-qa");
const W = 1120;
const H = 425;
const TOTAL_FRAMES = 33;

const COLORS = {
  grille: "#CCFF00",
  headlights: "#00CCFF",
  wheels: "#FF8800",
  tailLamps: "#FF4488",
};
const LABELS = {
  grille: "G",
  headlights: "HL",
  wheels: "W",
  tailLamps: "T",
};

function frameToAngle(frame) {
  return Math.round((frame / TOTAL_FRAMES) * 360);
}

function pctToPx(point) {
  return { x: (point.x / 100) * W, y: (point.y / 100) * H };
}

function buildSvgOverlay(features, frameIndex) {
  const angle = frameToAngle(frameIndex);
  const elements = [
    `<text x="12" y="28" fill="white" font-size="22" font-family="sans-serif" font-weight="bold">f${frameIndex} ${angle}°</text>`,
  ];

  for (const feature of features) {
    const point = feature.frames[frameIndex];
    if (!point) continue;
    const { x, y } = pctToPx(point);
    const color = COLORS[feature.id] ?? "#ffffff";
    const label = LABELS[feature.id] ?? "?";
    elements.push(
      `<circle cx="${x}" cy="${y}" r="10" fill="${color}" stroke="black" stroke-width="2"/>`,
      `<text x="${x + 14}" y="${y + 5}" fill="${color}" font-size="14" font-family="sans-serif" font-weight="bold">${label}</text>`,
    );
  }

  return Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">${elements.join("")}</svg>`,
  );
}

const features = JSON.parse(readFileSync(DATA_PATH, "utf8"));

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
  const angle = frameToAngle(frame);
  const frameLabel = String(frame).padStart(2, "0");
  const outFile = join(OUT_DIR, `frame-${frameLabel}-${angle}deg.png`);

  const base = await sharp(join(ASSET_DIR, `creta${frame + 1}.avif`)).resize(W, H).png().toBuffer();
  const overlay = buildSvgOverlay(features, frame);

  await sharp(base)
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png()
    .toFile(outFile);
}

console.log(`Wrote ${TOTAL_FRAMES} QA images to tmp/hotspot-qa/\n`);

for (const angle of [55, 76, 98, 142, 218]) {
  const frame = Math.min(TOTAL_FRAMES - 1, Math.floor((angle / 360) * TOTAL_FRAMES));
  const parts = [];
  for (const feature of features) {
    const point = feature.frames[frame];
    if (point) parts.push(`${LABELS[feature.id]}@${point.x},${point.y}`);
  }
  console.log(`${angle}° f${frame}: ${parts.join(" | ") || "none"}`);
}
