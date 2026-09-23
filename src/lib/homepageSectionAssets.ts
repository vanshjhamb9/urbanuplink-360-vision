import { assets } from "@/lib/assets";

/** Listing comparison — hero @ 800x640, small cells @ 640x360 */
import beforeHero from "@/assets/BandA/Before 800x640/1.800x640.webp";
import beforeTopRight from "@/assets/BandA/before 640x360/2.640x360.webp";
import beforeMidRight from "@/assets/BandA/before 640x360/3.640x360.webp";
import beforeBottomLeft from "@/assets/BandA/before 640x360/4.640x360.webp";
import beforeBottomRight from "@/assets/BandA/before 640x360/5.640x360.webp";
import afterHero from "@/assets/BandA/After 800x640/1.800x640.webp";
import afterTopRight from "@/assets/BandA/After 640x360/2.640x360.webp";
import afterMidRight from "@/assets/BandA/After 640x360/3.640x360.webp";
import afterBottomLeft from "@/assets/BandA/After 640x360/4.640x360.webp";
import afterBottomRight from "@/assets/BandA/After 640x360/5.640x360.webp";

/** Platform showcase — same BMW, four studio angles */
import bmwFrontStudio from "@/assets/social-media/BMW_01_front_studio.png";
import bmwFrontThreeQuarter from "@/assets/social-media/BMW_02_front_three_quarter.png";
import bmwRearStudio from "@/assets/social-media/BMW_03_rear_studio.png";
import bmwSideProfile from "@/assets/social-media/BMW_04_side_profile.png";
import bmw360Spin from "@/assets/social-media/ChatGPT Image Sep 23, 2026, 09_03_04 PM.png";

function assertUniqueSlots(slots: Record<string, string>) {
  const pathToSlot = new Map<string, string>();
  for (const [slot, path] of Object.entries(slots)) {
    const existing = pathToSlot.get(path);
    if (existing) {
      /** Social slots intentionally reuse the same BMW master across channels */
      if (slot.startsWith("social.") && existing.startsWith("social.")) {
        continue;
      }
      throw new Error(
        `Duplicate homepage asset "${path}" in slots "${existing}" and "${slot}"`,
      );
    }
    pathToSlot.set(path, slot);
  }
}

const d = assets.useCases.detailing.process.desktop;
const dm = assets.useCases.detailing.process.mobile;
const f = assets.useCases.fleet.process.desktop;
const fm = assets.useCases.fleet.process.mobile;
const mp = assets.useCases.marketplace.process;

/** Strict one-image-per-slot registry for the homepage */
export const homepageSectionAssets = {
  hero: {
    outdoorDesktop: assets.hero.outdoorDesktop,
    outdoorMobile: assets.hero.outdoorMobile,
    /** Detailing process card — frees studio-desktop for social source master */
    studioDesktop: d[1],
    studioMobile: dm[1],
  },
  backgroundRemoval: {
    beforeDesktop: assets.beforeAfter.beforeDesktop,
    beforeMobile: assets.beforeAfter.beforeMobile,
    afterDesktop: assets.beforeAfter.afterDesktop,
    afterMobile: assets.beforeAfter.afterMobile,
  },
  listingComparison: {
    beforeGrid: [
      beforeHero,
      beforeTopRight,
      beforeMidRight,
      beforeBottomLeft,
      beforeBottomRight,
    ],
    afterGrid: [
      afterHero,
      afterTopRight,
      afterMidRight,
      afterBottomLeft,
      afterBottomRight,
    ],
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
      desktop: d[2],
      mobile: dm[2],
    },
    showcase: {
      desktop: d[3],
      mobile: dm[3],
    },
    publish: {
      desktop: f[3],
      mobile: fm[3],
    },
  },
  platformShowcase: {
    sourceCapture: {
      image: bmwFrontStudio,
      alt: "Studio master file — one clean capture for every channel",
      objectPosition: "center 48%",
      objectFit: "cover" as const,
      scale: 1.15,
    },
    channels: {
      marketplace: bmwFrontThreeQuarter,
      instagram: bmwFrontStudio,
      story: bmwRearStudio,
      /** Compact angle reads better than full side in narrow social wells */
      whatsapp: bmwFrontThreeQuarter,
      facebook: bmwFrontStudio,
      website: bmwSideProfile,
      spin: bmw360Spin,
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
  "workflow.present.desktop": homepageSectionAssets.productWorkflow.present.desktop,
  "workflow.present.mobile": homepageSectionAssets.productWorkflow.present.mobile,
  "workflow.showcase.desktop": homepageSectionAssets.productWorkflow.showcase.desktop,
  "workflow.showcase.mobile": homepageSectionAssets.productWorkflow.showcase.mobile,
  "workflow.publish.desktop": homepageSectionAssets.productWorkflow.publish.desktop,
  "workflow.publish.mobile": homepageSectionAssets.productWorkflow.publish.mobile,
  "social.source": homepageSectionAssets.platformShowcase.sourceCapture.image,
  "social.marketplace": homepageSectionAssets.platformShowcase.channels.marketplace,
  "social.instagram": homepageSectionAssets.platformShowcase.channels.instagram,
  "social.story": homepageSectionAssets.platformShowcase.channels.story,
  "social.whatsapp": homepageSectionAssets.platformShowcase.channels.whatsapp,
  "social.facebook": homepageSectionAssets.platformShowcase.channels.facebook,
  "social.website": homepageSectionAssets.platformShowcase.channels.website,
  "social.spin": homepageSectionAssets.platformShowcase.channels.spin,
  "cta.desktop": homepageSectionAssets.cta.desktop,
  "cta.mobile": homepageSectionAssets.cta.mobile,
};

assertUniqueSlots(homepageImageSlots);
