import { homepageSectionAssets } from "@/lib/homepageSectionAssets";

export interface OutputPreview {
  id: string;
  label: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  objectPosition: string;
  objectFit: "cover" | "contain";
  /** Mild punch-in only — keep the full vehicle in frame */
  scale?: number;
  platformIcon: string;
  platformColor: string;
  channelId?: "whatsapp" | "instagram" | "web" | "facebook";
  /** lg grid column span (default 1) */
  colSpan?: 1 | 2 | 3 | 4 | 6 | 12;
}

const ch = homepageSectionAssets.platformShowcase.channels;

export const sourceVehicle = homepageSectionAssets.platformShowcase.sourceCapture;

export const marketplacePreview: OutputPreview = {
  id: "marketplace",
  label: "Marketplace Listing",
  subtitle: "Dealer & classified grids",
  image: ch.marketplace,
  imageAlt: "BMW front three-quarter for marketplace listing",
  objectPosition: "center 45%",
  objectFit: "cover",
  scale: 1.12,
  platformIcon: "MP",
  platformColor: "from-brand-lime to-emerald-500",
};

/** Social & web outputs — social 4-up stay at native framing (no extra zoom) */
export const channelPreviews: OutputPreview[] = [
  {
    id: "instagram",
    label: "Instagram",
    subtitle: "Feed & carousel",
    image: ch.instagram,
    imageAlt: "BMW front studio shot for Instagram feed",
    objectPosition: "center 45%",
    objectFit: "cover",
    scale: 1,
    platformIcon: "IG",
    platformColor: "from-pink-500 to-orange-500",
    channelId: "instagram",
  },
  {
    id: "story",
    label: "Stories",
    subtitle: "Vertical reels",
    image: ch.story,
    imageAlt: "BMW rear studio shot for Stories",
    objectPosition: "center 45%",
    objectFit: "cover",
    scale: 1,
    platformIcon: "▶",
    platformColor: "from-purple-500 to-pink-500",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    subtitle: "Status & forwards",
    image: ch.whatsapp,
    imageAlt: "BMW front three-quarter for WhatsApp status",
    objectPosition: "center 45%",
    objectFit: "cover",
    scale: 1,
    platformIcon: "WA",
    platformColor: "from-emerald-500 to-green-600",
    channelId: "whatsapp",
  },
  {
    id: "facebook",
    label: "Facebook",
    subtitle: "Posts & marketplace",
    image: ch.facebook,
    imageAlt: "BMW front studio shot for Facebook post",
    objectPosition: "center 45%",
    objectFit: "cover",
    scale: 1,
    platformIcon: "FB",
    platformColor: "from-blue-600 to-blue-700",
    channelId: "facebook",
  },
  {
    id: "360",
    label: "360° View",
    subtitle: "Interactive spin",
    image: ch.spin,
    imageAlt: "BMW interactive 360° spin presentation",
    objectPosition: "center 50%",
    objectFit: "cover",
    scale: 1.05,
    platformIcon: "360",
    platformColor: "from-brand-lime to-emerald-400",
    colSpan: 1,
  },
  {
    id: "website",
    label: "Website",
    subtitle: "Dealer landing pages",
    image: ch.website,
    imageAlt: "BMW side profile for dealer website hero",
    objectPosition: "center 50%",
    objectFit: "cover",
    scale: 1.08,
    platformIcon: "WWW",
    platformColor: "from-sky-500 to-blue-600",
    channelId: "web",
    colSpan: 2,
  },
];

export { socialCopy as platformShowcaseCopy } from "@/lib/homepageContent";
