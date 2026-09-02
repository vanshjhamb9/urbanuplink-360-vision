import { homepageSectionAssets } from "@/lib/homepageSectionAssets";

export interface OutputPreview {
  id: string;
  label: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  objectPosition: string;
  objectFit: "cover" | "contain";
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
  imageAlt: "Multi-dealer listing grid mockup",
  objectPosition: "center top",
    objectFit: "cover",
    platformIcon: "MP",
  platformColor: "from-brand-lime to-emerald-500",
};

/** Social & web outputs — uniform preview cards */
export const channelPreviews: OutputPreview[] = [
  {
    id: "instagram",
    label: "Instagram",
    subtitle: "Feed & carousel",
    image: ch.instagram,
    imageAlt: "Square Instagram feed creative",
    objectPosition: "center center",
    objectFit: "cover",
    platformIcon: "IG",
    platformColor: "from-pink-500 to-orange-500",
    channelId: "instagram",
  },
  {
    id: "story",
    label: "Stories",
    subtitle: "Vertical reels",
    image: ch.story,
    imageAlt: "Portrait story creative",
    objectPosition: "center center",
    objectFit: "cover",
    platformIcon: "▶",
    platformColor: "from-purple-500 to-pink-500",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    subtitle: "Status & forwards",
    image: ch.whatsapp,
    imageAlt: "WhatsApp status creative",
    objectPosition: "center center",
    objectFit: "cover",
    platformIcon: "WA",
    platformColor: "from-emerald-500 to-green-600",
    channelId: "whatsapp",
  },
  {
    id: "facebook",
    label: "Facebook",
    subtitle: "Posts & marketplace",
    image: ch.facebook,
    imageAlt: "Facebook feed creative with vehicle listing",
    objectPosition: "center center",
    objectFit: "cover",
    platformIcon: "FB",
    platformColor: "from-blue-600 to-blue-700",
    channelId: "facebook",
  },
  {
    id: "360",
    label: "360° View",
    subtitle: "Interactive spin",
    image: ch.spin,
    imageAlt: "Listing card with 360° explorer",
    objectPosition: "center top",
    objectFit: "cover",
    platformIcon: "360",
    platformColor: "from-brand-lime to-emerald-400",
    colSpan: 1,
  },
  {
    id: "website",
    label: "Website",
    subtitle: "Dealer landing pages",
    image: ch.website,
    imageAlt: "Wide website hero banner",
    objectPosition: "center center",
    objectFit: "cover",
    platformIcon: "WWW",
    platformColor: "from-sky-500 to-blue-600",
    channelId: "web",
    colSpan: 2,
  },
];

export { socialCopy as platformShowcaseCopy } from "@/lib/homepageContent";
