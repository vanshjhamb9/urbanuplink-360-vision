import { Ban, MapPin, Wrench, Eye, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { lotListingPhotos, studioListingPhotos } from "@/lib/studioVehicle";

export type ComparisonPhoto = {
  src: string;
  alt: string;
  /** object-position for cropping inside grid cell */
  objectPosition?: string;
};

export const listingComparisonCopy = {
  badges: [
    { icon: Ban, label: "No Studio" },
    { icon: Wrench, label: "No Equipment" },
    { icon: MapPin, label: "Right From Your Lot" },
  ],
  before: {
    label: "Other Dealers",
    icon: Eye,
    caption: "Same flat photos everyone uses",
  },
  after: {
    label: "With Urban Uplink 360°",
    icon: Trophy,
    badge: "Your Listing",
    caption: "Buyers choose the listing they can explore",
  },
};

/** Typical amateur lot / listing photos */
export const beforeGrid: ComparisonPhoto[] = [
  { src: lotListingPhotos.hero, alt: "Vehicle on a crowded dealership lot", objectPosition: "center 55%" },
  { src: lotListingPhotos.topRight, alt: "Outdoor photo with distracting background", objectPosition: "center center" },
  { src: lotListingPhotos.midRight, alt: "Flat angle car photo in a parking lot", objectPosition: "center 40%" },
  { src: lotListingPhotos.bottomLeft, alt: "Used car yard listing photo", objectPosition: "center 50%" },
  { src: lotListingPhotos.bottomRight, alt: "Phone capture with harsh outdoor lighting", objectPosition: "center 45%" },
];

/** Client studio listing cards — pre-composited, consistent floor alignment */
export const afterGrid: ComparisonPhoto[] = [
  { src: studioListingPhotos[0], alt: "Premium studio front listing", objectPosition: "center 42%" },
  { src: studioListingPhotos[1], alt: "Premium studio quarter view listing", objectPosition: "center 40%" },
  { src: studioListingPhotos[2], alt: "Premium studio side profile listing", objectPosition: "center 38%" },
  { src: studioListingPhotos[3], alt: "Premium studio rear listing", objectPosition: "center 40%" },
  { src: studioListingPhotos[4], alt: "Premium studio three-quarter listing", objectPosition: "center 42%" },
];

export type BadgeItem = {
  icon: LucideIcon;
  label: string;
};
