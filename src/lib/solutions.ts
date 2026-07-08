import { Camera, Shield, FileText, Clock, Handshake, Box, Palette } from "lucide-react";
import { assets } from "@/lib/assets";
import type { UseCaseBannerProps } from "@/components/UseCaseBanner";

export const solutions: UseCaseBannerProps[] = [
  {
    id: "marketplace",
    headlineWhite: "Every Listing Should Look Like It",
    headlineAccent: "Belongs in a Premium Showroom.",
    description:
      "Turn everyday smartphone photos into professional inventory that generates more clicks, longer engagement and higher buyer confidence.",
    features: [
      { icon: Camera, label: "AI Studio" },
      { icon: Box, label: "Interactive 360°" },
      { icon: Palette, label: "Brand Consistency" },
      { icon: FileText, label: "Marketplace Ready" },
    ],
    imageDesktop: assets.banners.marketplace.desktop,
    imageMobile: assets.banners.marketplace.mobile,
    imageAlt: "Vehicle presented in a premium studio showroom for marketplace listings",
  },
  {
    id: "insurance",
    headlineWhite: "Faster Inspections.",
    headlineAccent: "Faster Claims.",
    description:
      "Digitally document every vehicle with AI-assisted imaging that improves transparency and speeds up insurance workflows. Capture accurate evidence, reduce disputes and streamline claim approvals.",
    features: [
      { icon: Camera, label: "Inspection Ready" },
      { icon: FileText, label: "Damage Documentation" },
      { icon: Shield, label: "Fraud Prevention" },
      { icon: Clock, label: "Claim Reports" },
    ],
    imageDesktop: assets.banners.insurance.desktop,
    imageMobile: assets.banners.insurance.mobile,
    imageAlt: "Insurance damage inspection with tablet documentation",
  },
  {
    id: "fleet",
    headlineWhite: "Manage Every Vehicle",
    headlineAccent: "With Confidence.",
    description:
      "Capture, inspect and document every fleet vehicle with a consistent digital workflow. Reduce disputes, improve accountability and maintain accurate vehicle records throughout the fleet lifecycle.",
    features: [
      { icon: Camera, label: "Digital Inspections" },
      { icon: Shield, label: "Damage Tracking" },
      { icon: Clock, label: "Maintenance Records" },
      { icon: FileText, label: "Audit Ready" },
    ],
    imageDesktop: assets.banners.fleet.desktop,
    imageMobile: assets.banners.fleet.mobile,
    imageAlt: "Fleet vehicles lined up for digital inspection and operational records",
  },
  {
    id: "detailing",
    headlineWhite: "Make Every Detail",
    headlineAccent: "Worth Paying For.",
    description:
      "Showcase detailing, ceramic coating and paint protection with premium studio presentations that justify premium pricing. When customers can clearly see the difference, they're more likely to choose higher-value detailing packages.",
    features: [
      { icon: Camera, label: "Premium Studio" },
      { icon: FileText, label: "Before & After" },
      { icon: Handshake, label: "Interactive Comparison" },
    ],
    imageDesktop: assets.banners.detailing.desktop,
    imageMobile: assets.banners.detailing.mobile,
    imageAlt: "Vehicle in a premium detailing studio environment",
  },
];
