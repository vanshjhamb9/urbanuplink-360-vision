import { assets } from "@/lib/assets";
import whatsappCreative from "@/assets/image (3).webp";
import websiteCreative from "@/assets/image (4).webp";
import instagramCreative from "@/assets/image (5).webp";
import spinChannelCreative from "@/assets/used.car.platform1.webp";

const lot = "/assets/comparison/lot";

function assertUniqueSlots(slots: Record<string, string>) {
  const pathToSlot = new Map<string, string>();
  for (const [slot, path] of Object.entries(slots)) {
    const existing = pathToSlot.get(path);
    if (existing) {
      throw new Error(
        `Duplicate homepage asset "${path}" in slots "${existing}" and "${slot}"`,
      );
    }
    pathToSlot.set(path, slot);
  }
}

const d = assets.useCases.detailing.process.desktop;
const f = assets.useCases.fleet.process.desktop;
const fm = assets.useCases.fleet.process.mobile;
const mp = assets.useCases.marketplace.process;
const im = assets.useCases.insurance.process.mobile;

/** Strict one-image-per-slot registry for the homepage */
export const homepageSectionAssets = {
  hero: {
    outdoorDesktop: assets.hero.outdoorDesktop,
    outdoorMobile: assets.hero.outdoorMobile,
    studioDesktop: assets.hero.studioDesktop,
    studioMobile: assets.hero.studioMobile,
  },
  backgroundRemoval: {
    beforeDesktop: assets.beforeAfter.beforeDesktop,
    beforeMobile: assets.beforeAfter.beforeMobile,
    afterDesktop: assets.beforeAfter.afterDesktop,
    afterMobile: assets.beforeAfter.afterMobile,
  },
  listingComparison: {
    beforeGrid: [
      `${lot}/lot-1.jpg`,
      `${lot}/lot-2.jpg`,
      `${lot}/lot-3.jpg`,
      `${lot}/lot-4.jpg`,
      `${lot}/lot-5.jpg`,
    ],
    afterGrid: [d[0], d[1], d[2], d[3], f[1]],
  },
  productWorkflow: {
    capture: {
      desktop: mp[0],
      mobile: mp[1],
    },
    clean: {
      desktop: assets.beforeAfter.seltosPreview,
      mobile: assets.beforeAfter.seltosPreview,
    },
    present: {
      desktop: assets.showroom.showroom1,
      mobile: assets.showroom.showroom1,
    },
    showcase: {
      desktop: assets.showroom.showroom2,
      mobile: assets.showroom.showroom2,
    },
    publish: {
      desktop: f[3],
      mobile: fm[3],
    },
  },
  platformShowcase: {
    sourceCapture: {
      image: assets.banners.detailing.desktop,
      alt: "Single studio capture — source for every channel output",
      objectPosition: "center 35%",
      objectFit: "cover" as const,
    },
    channels: {
      marketplace: assets.marketplace.listingDesktop,
      instagram: instagramCreative,
      story: im[1],
      whatsapp: whatsappCreative,
      website: websiteCreative,
      spin: spinChannelCreative,
    },
  },
  cta: {
    desktop: assets.cta.desktop,
    mobile: assets.cta.mobile,
  },
} as const;

const homepageImageSlots: Record<string, string> = {
  "hero.outdoorDesktop": homepageSectionAssets.hero.outdoorDesktop,
  "hero.outdoorMobile": homepageSectionAssets.hero.outdoorMobile,
  "hero.studioDesktop": homepageSectionAssets.hero.studioDesktop,
  "hero.studioMobile": homepageSectionAssets.hero.studioMobile,
  "bgRemoval.beforeDesktop": homepageSectionAssets.backgroundRemoval.beforeDesktop,
  "bgRemoval.beforeMobile": homepageSectionAssets.backgroundRemoval.beforeMobile,
  "bgRemoval.afterDesktop": homepageSectionAssets.backgroundRemoval.afterDesktop,
  "bgRemoval.afterMobile": homepageSectionAssets.backgroundRemoval.afterMobile,
  "listing.before.0": homepageSectionAssets.listingComparison.beforeGrid[0],
  "listing.before.1": homepageSectionAssets.listingComparison.beforeGrid[1],
  "listing.before.2": homepageSectionAssets.listingComparison.beforeGrid[2],
  "listing.before.3": homepageSectionAssets.listingComparison.beforeGrid[3],
  "listing.before.4": homepageSectionAssets.listingComparison.beforeGrid[4],
  "listing.after.0": homepageSectionAssets.listingComparison.afterGrid[0],
  "listing.after.1": homepageSectionAssets.listingComparison.afterGrid[1],
  "listing.after.2": homepageSectionAssets.listingComparison.afterGrid[2],
  "listing.after.3": homepageSectionAssets.listingComparison.afterGrid[3],
  "listing.after.4": homepageSectionAssets.listingComparison.afterGrid[4],
  "workflow.capture.desktop": homepageSectionAssets.productWorkflow.capture.desktop,
  "workflow.capture.mobile": homepageSectionAssets.productWorkflow.capture.mobile,
  "workflow.clean": homepageSectionAssets.productWorkflow.clean.desktop,
  "workflow.present": homepageSectionAssets.productWorkflow.present.desktop,
  "workflow.showcase": homepageSectionAssets.productWorkflow.showcase.desktop,
  "workflow.publish.desktop": homepageSectionAssets.productWorkflow.publish.desktop,
  "workflow.publish.mobile": homepageSectionAssets.productWorkflow.publish.mobile,
  "social.source": homepageSectionAssets.platformShowcase.sourceCapture.image,
  "social.marketplace": homepageSectionAssets.platformShowcase.channels.marketplace,
  "social.instagram": homepageSectionAssets.platformShowcase.channels.instagram,
  "social.story": homepageSectionAssets.platformShowcase.channels.story,
  "social.whatsapp": homepageSectionAssets.platformShowcase.channels.whatsapp,
  "social.website": homepageSectionAssets.platformShowcase.channels.website,
  "social.spin": homepageSectionAssets.platformShowcase.channels.spin,
  "cta.desktop": homepageSectionAssets.cta.desktop,
  "cta.mobile": homepageSectionAssets.cta.mobile,
};

assertUniqueSlots(homepageImageSlots);
