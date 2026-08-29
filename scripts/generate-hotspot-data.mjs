const TOTAL = 33;
const nulls = (n) => Array(n).fill(null);

const data = [
  {
    id: "grille",
    numericId: 1,
    label: "Front Grille",
    description: "Parametric grille design with chrome accents",
    frames: [
      ...nulls(4),
      { x: 52, y: 47 },
      { x: 48, y: 46 },
      { x: 50, y: 45 },
      { x: 50, y: 44 },
      { x: 50, y: 44 },
      { x: 50, y: 43 },
      { x: 50, y: 43 },
      ...nulls(22),
    ],
  },
  {
    id: "headlights",
    numericId: 2,
    label: "LED Headlights",
    description: "Projector LED headlamps with DRL signature",
    frames: [
      ...nulls(4),
      { x: 40, y: 43 },
      { x: 36, y: 42 },
      { x: 33, y: 41 },
      { x: 31, y: 40 },
      { x: 30, y: 40 },
      { x: 30, y: 40 },
      { x: 32, y: 41 },
      ...nulls(22),
    ],
  },
  {
    id: "wheels",
    numericId: 3,
    label: "Alloy Wheels",
    description: '17" diamond-cut alloy wheels',
    frames: [
      { x: 22, y: 72 },
      { x: 21, y: 72 },
      { x: 20, y: 71 },
      { x: 24, y: 73 },
      ...nulls(19),
      { x: 74, y: 71 },
      { x: 72, y: 72 },
      { x: 76, y: 71 },
      ...nulls(3),
      { x: 76, y: 72 },
      { x: 77, y: 71 },
      { x: 78, y: 72 },
      { x: 77, y: 71 },
    ],
  },
  {
    id: "tailLamps",
    numericId: 5,
    label: "LED Tail Lamps",
    description: "Connected LED tail lamp design",
    frames: [
      ...nulls(13),
      { x: 26, y: 43 },
      { x: 24, y: 42 },
      { x: 22, y: 41 },
      { x: 20, y: 42 },
      { x: 22, y: 41 },
      { x: 28, y: 42 },
      { x: 35, y: 43 },
      { x: 42, y: 43 },
      { x: 50, y: 42 },
      { x: 58, y: 43 },
      ...nulls(10),
    ],
  },
];

for (const feature of data) {
  if (feature.frames.length !== TOTAL) {
    throw new Error(`${feature.id} has ${feature.frames.length} frames`);
  }
}

import { writeFileSync } from "node:fs";
writeFileSync(
  new URL("../src/lib/threeSixtyHotspots.data.json", import.meta.url),
  JSON.stringify(data, null, 2) + "\n",
);

console.log("Wrote threeSixtyHotspots.data.json");
