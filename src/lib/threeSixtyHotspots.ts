import hotspotData from "./threeSixtyHotspots.data.json";

export const TOTAL_FRAMES = 33;

export type HotspotPoint = { x: number; y: number };

export type HotspotFeatureId = "grille" | "headlights" | "wheels" | "tailLamps";

export type HotspotFeature = {
  id: HotspotFeatureId;
  numericId: number;
  label: string;
  description: string;
  frames: Array<HotspotPoint | null>;
};

export type ActiveHotspot = HotspotFeature & {
  position: HotspotPoint;
};

export function frameToAngle(frame: number): number {
  const normalized = ((frame % TOTAL_FRAMES) + TOTAL_FRAMES) % TOTAL_FRAMES;
  return (normalized / TOTAL_FRAMES) * 360;
}

export function angleToFrame(angle: number): number {
  const normalized = ((angle % 360) + 360) % 360;
  return Math.min(TOTAL_FRAMES - 1, Math.floor((normalized / 360) * TOTAL_FRAMES));
}

export const hotspotFeatures: HotspotFeature[] = hotspotData as HotspotFeature[];

export function getHotspotsForFrame(frame: number): ActiveHotspot[] {
  const index = ((frame % TOTAL_FRAMES) + TOTAL_FRAMES) % TOTAL_FRAMES;
  return hotspotFeatures
    .map((feature) => {
      const position = feature.frames[index];
      return position ? { ...feature, position } : null;
    })
    .filter((item): item is ActiveHotspot => item !== null);
}

export function cloneHotspotFeatures(): HotspotFeature[] {
  return hotspotFeatures.map((feature) => ({
    ...feature,
    frames: feature.frames.map((point) => (point ? { ...point } : null)),
  }));
}

export function exportHotspotJson(features: HotspotFeature[]): string {
  return JSON.stringify(
    features.map(({ id, numericId, label, description, frames }) => ({
      id,
      numericId,
      label,
      description,
      frames,
    })),
    null,
    2,
  );
}

export function importHotspotJson(json: string): HotspotFeature[] {
  const parsed = JSON.parse(json) as HotspotFeature[];
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid hotspot JSON");
  }
  return parsed.map((feature) => ({
    ...feature,
    frames: feature.frames.slice(0, TOTAL_FRAMES).concat(
      Array(Math.max(0, TOTAL_FRAMES - feature.frames.length)).fill(null),
    ),
  }));
}

export const CALIBRATOR_STORAGE_KEY = "urbanuplink-calibrate360-draft";
