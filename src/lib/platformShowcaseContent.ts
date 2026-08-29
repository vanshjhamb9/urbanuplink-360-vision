import { homepageSectionAssets } from "@/lib/homepageSectionAssets";

export type ChannelFormat = "square" | "story" | "wide" | "spin";
export type ChannelFrame = "feed" | "phone" | "browser";

export interface ChannelTile {
  id: string;
  label: string;
  subtitle: string;
  format: ChannelFormat;
  frame: ChannelFrame;
  image: string;
  imageAlt: string;
  aspectClass: string;
  objectPosition: string;
  objectFit: "cover" | "contain";
  platformIcon: string;
  platformColor: string;
}

const ch = homepageSectionAssets.platformShowcase.channels;

export const sourceVehicle = homepageSectionAssets.platformShowcase.sourceCapture;

export const marketplaceTile = {
  label: "Marketplace Listing",
  subtitle: "Dealer & classified grids",
  image: ch.marketplace,
  imageAlt: "Multi-dealer listing grid mockup",
  aspectClass: "aspect-[16/11]",
  objectPosition: "center top",
  objectFit: "contain" as const,
};

/** Four channel outputs — equal columns, shared preview height */
export const channelTiles: ChannelTile[] = [
  {
    id: "instagram",
    label: "Instagram",
    subtitle: "Feed & carousel",
    format: "square",
    frame: "feed",
    image: ch.instagram,
    imageAlt: "Square Instagram feed creative",
    aspectClass: "aspect-square",
    objectPosition: "center center",
    objectFit: "cover",
    platformIcon: "IG",
    platformColor: "from-pink-500 to-orange-500",
  },
  {
    id: "story",
    label: "Stories",
    subtitle: "Vertical reels",
    format: "story",
    frame: "phone",
    image: ch.story,
    imageAlt: "Portrait story creative",
    aspectClass: "aspect-[9/16]",
    objectPosition: "center center",
    objectFit: "cover",
    platformIcon: "▶",
    platformColor: "from-purple-500 to-pink-500",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    subtitle: "Status & forwards",
    format: "story",
    frame: "phone",
    image: ch.whatsapp,
    imageAlt: "WhatsApp status creative",
    aspectClass: "aspect-[9/16]",
    objectPosition: "center center",
    objectFit: "cover",
    platformIcon: "WA",
    platformColor: "from-emerald-500 to-green-600",
  },
  {
    id: "360",
    label: "360° View",
    subtitle: "Interactive spin",
    format: "spin",
    frame: "phone",
    image: ch.spin,
    imageAlt: "Listing card with 360° explorer",
    aspectClass: "aspect-[9/16]",
    objectPosition: "center top",
    objectFit: "cover",
    platformIcon: "360",
    platformColor: "from-brand-lime to-emerald-400",
  },
];

export const websiteTile: ChannelTile = {
  id: "website",
  label: "Website",
  subtitle: "Dealer landing pages",
  format: "wide",
  frame: "browser",
  image: ch.website,
  imageAlt: "Wide website hero banner",
  aspectClass: "aspect-[21/9] sm:aspect-[2.4/1]",
  objectPosition: "center center",
  objectFit: "cover",
  platformIcon: "WWW",
  platformColor: "from-sky-500 to-blue-600",
};

export { socialCopy as platformShowcaseCopy } from "@/lib/homepageContent";
