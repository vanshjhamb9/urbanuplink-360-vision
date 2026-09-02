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
  showChannelIcons?: boolean;
}

export const productWorkflowCopy = {
  eyebrow: "How It Works",
  title: "From capture to published listing",
  titleAccent: "in minutes.",
  footer: "One workflow. Every channel.",
};

const wf = homepageSectionAssets.productWorkflow;

export const productWorkflowSteps: ProductWorkflowStep[] = [
  {
    title: "Capture",
    description: "Start with a simple smartphone capture in the real world.",
    imageDesktop: wf.capture.desktop,
    imageMobile: wf.capture.mobile,
    imageAlt: "Smartphone capture of a vehicle on a dealer lot",
    objectPosition: "center 40%",
    icon: Camera,
  },
  {
    title: "Clean",
    description: "Remove distracting backgrounds and create a consistent vehicle image.",
    imageDesktop: wf.clean.desktop,
    imageMobile: wf.clean.mobile,
    imageAlt: "Vehicle with background removed on a clean backdrop",
    objectPosition: "center center",
    icon: Sparkles,
  },
  {
    title: "Present",
    description: "Place the vehicle into a premium digital environment that stands out.",
    imageDesktop: wf.present.desktop,
    imageMobile: wf.present.mobile,
    imageAlt: "Vehicle placed in a premium studio environment",
    objectPosition: "center 40%",
    icon: Box,
  },
  {
    title: "Showcase",
    description: "Add interactive 360° views so buyers can explore every angle.",
    imageDesktop: wf.showcase.desktop,
    imageMobile: wf.showcase.mobile,
    imageAlt: "Interactive 360 degree vehicle presentation",
    objectPosition: "center 40%",
    icon: RotateCcw,
  },
  {
    title: "Publish",
    description: "Share to WhatsApp, Instagram, Facebook, web, and marketplaces from one capture.",
    imageDesktop: wf.publish.desktop,
    imageMobile: wf.publish.mobile,
    imageAlt: "Listing published across marketplace, web, and social channels",
    objectPosition: "center top",
    icon: Globe,
    showChannelIcons: true,
  },
];
