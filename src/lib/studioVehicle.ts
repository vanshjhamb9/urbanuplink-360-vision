import { assets } from "@/lib/assets";
import { homepageSectionAssets } from "@/lib/homepageSectionAssets";

/** Amateur dealership / lot listing photos (stock) */
export const lotListingPhotos = {
  hero: homepageSectionAssets.listingComparison.beforeGrid[0],
  topRight: homepageSectionAssets.listingComparison.beforeGrid[1],
  midRight: homepageSectionAssets.listingComparison.beforeGrid[2],
  bottomLeft: homepageSectionAssets.listingComparison.beforeGrid[3],
  bottomRight: homepageSectionAssets.listingComparison.beforeGrid[4],
} as const;

/** Processed studio vehicle photos — unique per listing comparison slot */
export const studioListingPhotos = homepageSectionAssets.listingComparison.afterGrid;

export const showroomBackdrop = assets.showroom.spinBackground;
export const SHOWROOM_POSITION = "center 44%";

export type StudioPlacement = {
  width: string;
  height: string;
  bottom: string;
  offsetX?: string;
  scale?: number;
};

export const defaultStudioPlacement: StudioPlacement = {
  width: "86%",
  height: "68%",
  bottom: "9%",
};

export const studioAnglePlacements: Record<string, StudioPlacement> = {
  front: { width: "88%", height: "70%", bottom: "8%" },
  quarter: { width: "86%", height: "68%", bottom: "9%" },
  side: { width: "84%", height: "66%", bottom: "10%" },
  rear: { width: "86%", height: "68%", bottom: "9%" },
  threeQuarter: { width: "88%", height: "70%", bottom: "8%" },
};
