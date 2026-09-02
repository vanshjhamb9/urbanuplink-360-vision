import { Camera, Sparkles, Box, RotateCcw, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { homepageSectionAssets } from "@/lib/homepageSectionAssets";

export interface ListingGapStep {
  stepTitle: string;
  stepHint: string;
  cardTitle: string;
  cardDescription: string;
  imageDesktop: string;
  imageMobile: string;
  icon: LucideIcon;
  objectPosition?: string;
}

export const homepageListingGap = {
  eyebrow: "The Listing Gap",
  title: "Great cars deserve",
  titleAccent: "better listings.",
  description: "Turn a smartphone capture into a premium digital experience.",
  steps: [
    {
      stepTitle: "Capture",
      stepHint: "Real-world photos",
      cardTitle: "Smartphone capture",
      cardDescription: "Guided mobile capture from your lot — consistent angles without studio equipment.",
      imageDesktop: homepageSectionAssets.productWorkflow.capture.desktop,
      imageMobile: homepageSectionAssets.productWorkflow.capture.mobile,
      icon: Camera,
      objectPosition: "center 40%",
    },
    {
      stepTitle: "Clean",
      stepHint: "Remove the clutter",
      cardTitle: "Clean background",
      cardDescription: "Automatically isolate the vehicle and remove busy yard backgrounds.",
      imageDesktop: homepageSectionAssets.backgroundRemoval.afterDesktop,
      imageMobile: homepageSectionAssets.backgroundRemoval.afterMobile,
      icon: Sparkles,
      objectPosition: "center center",
    },
    {
      stepTitle: "Present",
      stepHint: "Studio-grade visuals",
      cardTitle: "Premium presentation",
      cardDescription: "Drop inventory into polished, purpose-built listing environments buyers trust.",
      imageDesktop: homepageSectionAssets.productWorkflow.present.desktop,
      imageMobile: homepageSectionAssets.productWorkflow.present.mobile,
      icon: Box,
      objectPosition: "center 40%",
    },
    {
      stepTitle: "Showcase",
      stepHint: "Interactive 360°",
      cardTitle: "360° experience",
      cardDescription: "Let buyers explore every angle with an immersive spin — no 3D model required.",
      imageDesktop: homepageSectionAssets.productWorkflow.showcase.desktop,
      imageMobile: homepageSectionAssets.productWorkflow.showcase.mobile,
      icon: RotateCcw,
      objectPosition: "center 40%",
    },
    {
      stepTitle: "Publish",
      stepHint: "Marketplace ready",
      cardTitle: "Ready for every channel",
      cardDescription: "Publish the same assets to marketplaces, dealer sites, WhatsApp, Instagram, and Facebook.",
      imageDesktop: homepageSectionAssets.productWorkflow.publish.desktop,
      imageMobile: homepageSectionAssets.productWorkflow.publish.mobile,
      icon: Globe,
      objectPosition: "center top",
    },
  ] satisfies ListingGapStep[],
  footerTagline: "One workflow. Every car.",
  footerHeadline: "Consistently better.",
  footerBody: "No studio. No complex editing workflow.",
  footerAccent: "Just a better way to present every vehicle.",
  workflowFooter: "One workflow. Every car. Consistently better.",
} as const;
