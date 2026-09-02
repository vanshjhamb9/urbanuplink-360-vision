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
    label: "Typical yard photo",
    icon: Eye,
    caption: "Same vehicle. Busy lot. Flat listing.",
  },
  after: {
    label: "Studio-grade listing",
    icon: Trophy,
    badge: "Your Listing",
    caption: "Same vehicle. Different experience.",
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

/** Urban Uplink processed studio vehicle photos */
export const afterGrid: ComparisonPhoto[] = [
  { src: studioListingPhotos[0], alt: "Fleet vehicle with professional studio presentation", objectPosition: "center 42%" },
  { src: studioListingPhotos[1], alt: "Consistent fleet imagery on a premium backdrop", objectPosition: "center 40%" },
  { src: studioListingPhotos[2], alt: "Insurance-ready vehicle documentation in studio", objectPosition: "center 38%" },
  { src: studioListingPhotos[3], alt: "Polished vehicle photo for digital listings", objectPosition: "center 45%" },
  { src: studioListingPhotos[4], alt: "Marketplace-ready studio vehicle presentation", objectPosition: "center 42%" },
];

export type BadgeItem = {
  icon: LucideIcon;
  label: string;
};
