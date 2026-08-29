import { homepageSectionAssets } from "@/lib/homepageSectionAssets";

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
  objectFit?: "cover" | "contain";
  accent?: "instagram" | "whatsapp" | "marketplace" | "spin" | "website";
}

const ch = homepageSectionAssets.platformShowcase.channels;

export const sourceVehicle = homepageSectionAssets.platformShowcase.sourceCapture;

export const channelTiles: ChannelTile[] = [
  {
    id: "marketplace",
    label: "Marketplace Listing",
    subtitle: "Dealer & classified grids",
    format: "listing",
    image: ch.marketplace,
    imageAlt: "Premium marketplace listing grid mockup",
    className: "col-span-12 row-span-2 lg:col-span-7 lg:row-span-2",
    objectPosition: "center top",
    objectFit: "cover",
    accent: "marketplace",
  },
  {
    id: "instagram",
    label: "Instagram Post",
    subtitle: "Feed & carousel ads",
    format: "square",
    image: ch.instagram,
    imageAlt: "Instagram feed creative with studio vehicle",
    className: "col-span-6 row-span-2 sm:col-span-6 lg:col-span-4",
    objectPosition: "center center",
    objectFit: "contain",
    accent: "instagram",
  },
  {
    id: "story",
    label: "Instagram Story",
    subtitle: "Vertical stories & reels",
    format: "story",
    image: ch.story,
    imageAlt: "Vertical Instagram story with vehicle hero",
    className: "col-span-6 row-span-2 sm:col-span-6 lg:col-span-3 lg:row-span-2",
    objectPosition: "center center",
    objectFit: "cover",
    accent: "instagram",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Creative",
    subtitle: "Status & forwards",
    format: "story",
    image: ch.whatsapp,
    imageAlt: "WhatsApp status creative with vehicle listing",
    className: "col-span-6 row-span-2 sm:col-span-4 lg:col-span-3",
    objectPosition: "center center",
    objectFit: "contain",
    accent: "whatsapp",
  },
  {
    id: "website",
    label: "Website Banner",
    subtitle: "Landing pages & dealer sites",
    format: "wide",
    image: ch.website,
    imageAlt: "Website hero banner with studio vehicle",
    className: "col-span-12 row-span-2 sm:col-span-8 lg:col-span-6 lg:row-span-2",
    objectPosition: "center center",
    objectFit: "contain",
    accent: "website",
  },
  {
    id: "360",
    label: "360° Experience",
    subtitle: "Interactive exploration",
    format: "spin",
    image: ch.spin,
    imageAlt: "Interactive 360° studio vehicle presentation",
    className: "col-span-12 row-span-2 sm:col-span-4 lg:col-span-3 lg:row-span-2",
    objectPosition: "center 38%",
    objectFit: "cover",
    accent: "spin",
  },
];

export { socialCopy as platformShowcaseCopy } from "@/lib/homepageContent";
