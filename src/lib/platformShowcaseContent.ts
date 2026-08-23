import { assets } from "@/lib/assets";
import { studioListingPhotos } from "@/lib/studioVehicle";
import whatsappCreative from "@/assets/image (3).webp";
import websiteCreative from "@/assets/image (4).webp";
import instagramCreative from "@/assets/image (5).webp";
import marketplaceCard from "@/assets/used.car.platform1.webp";

export type ChannelFormat = "square" | "story" | "landscape" | "wide" | "listing" | "spin";

export interface ChannelTile {
  id: string;
  label: string;
  subtitle: string;
  format: ChannelFormat;
  image: string;
  imageAlt: string;
  className: string;
  objectPosition?: string;
  /** contain preserves full marketing creative; cover for mockups */
  objectFit?: "cover" | "contain";
}

/** Hero source — one studio capture (distinct from all channel outputs) */
export const sourceVehicle = {
  image: studioListingPhotos[0],
  alt: "Premium studio vehicle — one capture, every channel",
  objectPosition: "center 42%",
  objectFit: "cover" as const,
};

export const channelTiles: ChannelTile[] = [
  {
    id: "marketplace",
    label: "Marketplace Listing",
    subtitle: "Dealer & classified grids",
    format: "listing",
    image: assets.marketplace.listingDesktop,
    imageAlt: "Premium marketplace listing grid mockup",
    className: "col-span-12 row-span-2 lg:col-span-7 lg:row-span-2",
    objectPosition: "center top",
    objectFit: "cover",
  },
  {
    id: "instagram",
    label: "Instagram Post",
    subtitle: "Feed & carousel ads",
    format: "square",
    image: instagramCreative,
    imageAlt: "Instagram feed creative with studio vehicle",
    className: "col-span-6 row-span-2 sm:col-span-6 lg:col-span-4",
    objectPosition: "center center",
    objectFit: "contain",
  },
  {
    id: "story",
    label: "Instagram Story",
    subtitle: "Vertical stories & reels",
    format: "story",
    image: assets.banners.marketplace.mobile,
    imageAlt: "Vertical Instagram story with vehicle hero",
    className: "col-span-6 row-span-2 sm:col-span-6 lg:col-span-3 lg:row-span-2",
    objectPosition: "center center",
    objectFit: "cover",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Creative",
    subtitle: "Status & forwards",
    format: "story",
    image: whatsappCreative,
    imageAlt: "WhatsApp status creative with vehicle listing",
    className: "col-span-6 row-span-2 sm:col-span-4 lg:col-span-3",
    objectPosition: "center center",
    objectFit: "contain",
  },
  {
    id: "website",
    label: "Website Banner",
    subtitle: "Landing pages & dealer sites",
    format: "wide",
    image: websiteCreative,
    imageAlt: "Website hero banner with studio vehicle",
    className: "col-span-12 row-span-2 sm:col-span-8 lg:col-span-6 lg:row-span-2",
    objectPosition: "center center",
    objectFit: "contain",
  },
  {
    id: "360",
    label: "360° Experience",
    subtitle: "Interactive exploration",
    format: "spin",
    image: studioListingPhotos[2],
    imageAlt: "Interactive 360° studio vehicle presentation",
    className: "col-span-12 row-span-2 sm:col-span-4 lg:col-span-3 lg:row-span-2",
    objectPosition: "center 38%",
    objectFit: "cover",
  },
];

/** Alternate assets kept for future A/B swaps — all unique per channel above */
export const platformAssetPool = {
  marketplaceCard,
  processCards: studioListingPhotos,
  heroStudio: assets.hero.studioDesktop,
};

export { socialCopy as platformShowcaseCopy } from "@/lib/homepageContent";
