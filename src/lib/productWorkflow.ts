import { Camera, Sparkles, Box, RotateCcw, Globe } from "lucide-react";
import { homepageSectionAssets } from "@/lib/homepageSectionAssets";
import type { LucideIcon } from "lucide-react";

export interface ProductWorkflowStep {
  title: string;
  description: string;
  imageAlt: string;
  imageDesktop: string;
  imageMobile: string;
  objectPosition?: string;
  icon: LucideIcon;
}

export const productWorkflowCopy = {
  eyebrow: "How It Works",
  title: "From vehicle to digital experience",
  titleAccent: "in minutes.",
  footer: "One capture. Every channel.",
};

const wf = homepageSectionAssets.productWorkflow;

export const productWorkflowSteps: ProductWorkflowStep[] = [
  {
    title: "Capture",
    description:
      "Capture the vehicle using the Urban Uplink app with a consistent, guided process.",
    imageDesktop: wf.capture.desktop,
    imageMobile: wf.capture.mobile,
    imageAlt: "Field agent capturing vehicle photos with the Urban Uplink app",
    objectPosition: "center 40%",
    icon: Camera,
  },
  {
    title: "Clean",
    description:
      "Automatically remove unwanted backgrounds and distractions while preserving the vehicle.",
    imageDesktop: wf.clean.desktop,
    imageMobile: wf.clean.mobile,
    imageAlt: "Kia Seltos with background removed on a clean studio backdrop",
    objectPosition: "center center",
    icon: Sparkles,
  },
  {
    title: "Present",
    description:
      "Place the vehicle into premium, purpose-built environments that make it stand out.",
    imageDesktop: wf.present.desktop,
    imageMobile: wf.present.mobile,
    imageAlt: "Vehicle placed in a premium studio environment with backdrop options",
    objectPosition: "center 40%",
    icon: Box,
  },
  {
    title: "Showcase",
    description:
      "Create immersive vehicle experiences including 360° views and digital presentations.",
    imageDesktop: wf.showcase.desktop,
    imageMobile: wf.showcase.mobile,
    imageAlt: "Vehicle documentation and immersive digital presentation",
    objectPosition: "center 40%",
    icon: RotateCcw,
  },
  {
    title: "Publish",
    description:
      "Use the assets across marketplaces, websites, social media, insurance, fleet and customer communications.",
    imageDesktop: wf.publish.desktop,
    imageMobile: wf.publish.mobile,
    imageAlt: "Listing published across marketplace, web, and mobile channels",
    objectPosition: "center top",
    icon: Globe,
  },
];
