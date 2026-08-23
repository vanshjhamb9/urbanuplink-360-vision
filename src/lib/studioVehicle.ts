import { assets } from "@/lib/assets";

const lot = "/assets/comparison/lot";

/** Amateur dealership / lot listing photos (stock) */
export const lotListingPhotos = {
  hero: `${lot}/lot-1.jpg`,
  topRight: `${lot}/lot-2.jpg`,
  midRight: `${lot}/lot-3.jpg`,
  bottomLeft: `${lot}/lot-4.jpg`,
  bottomRight: `${lot}/lot-5.jpg`,
} as const;

/** Client marketplace cards — vehicle already composited on studio backdrop */
export const studioListingPhotos = assets.useCases.marketplace.process;

export const showroomBackdrop = assets.showroom.spinBackground;
export const SHOWROOM_POSITION = "center 44%";

export type StudioPlacement = {
  width: string;
  height: string;
  bottom: string;
  offsetX?: string;
  scale?: number;
};

/** Default floor anchor — tuned for Background 2.webp at 16:10 */
export const defaultStudioPlacement: StudioPlacement = {
  width: "86%",
  height: "68%",
  bottom: "9%",
};

/** Per-angle tuning when layering AVIF frames (360 source assets) */
export const studioAnglePlacements: Record<string, StudioPlacement> = {
  front: { width: "88%", height: "70%", bottom: "8%" },
  quarter: { width: "86%", height: "68%", bottom: "9%" },
  side: { width: "84%", height: "66%", bottom: "10%" },
  rear: { width: "86%", height: "68%", bottom: "9%" },
  threeQuarter: { width: "88%", height: "70%", bottom: "8%" },
};
