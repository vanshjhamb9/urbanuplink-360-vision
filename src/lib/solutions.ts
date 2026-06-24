import { Camera, Shield, FileText, Clock, Handshake } from "lucide-react";
import { assets } from "@/lib/assets";
import type { UseCaseBannerProps } from "@/components/UseCaseBanner";

export const solutions: UseCaseBannerProps[] = [
  {
    id: "marketplace",
    headlineWhite: "Transform Inventory",
    headlineAccent: "Into Showroom-Grade Listings",
    description: "AI-powered visuals that sell more, faster.",
    features: [
      { icon: Camera, label: "Studio AI" },
      { icon: Shield, label: "360° Views" },
      { icon: FileText, label: "Consistent Brand" },
    ],
    imageDesktop: assets.banners.marketplace.desktop,
    imageMobile: assets.banners.marketplace.mobile,
    imageAlt: "Red Mahindra Thar in studio showroom for marketplace listings",
  },
  {
    id: "insurance",
    headlineWhite: "Smarter Claims.",
    headlineAccent: "Stronger Assurance.",
    description:
      "End-to-end insurance & inspection made simple, transparent, and fast.",
    features: [
      { icon: FileText, label: "Accurate Documentation" },
      { icon: Shield, label: "Fraud Control" },
      { icon: Handshake, label: "Partner Network" },
      { icon: Clock, label: "Faster Claims" },
    ],
    imageDesktop: assets.banners.insurance.desktop,
    imageMobile: assets.banners.insurance.mobile,
    imageAlt: "Insurance damage inspection with tablet documentation",
  },
  {
    id: "fleet",
    headlineWhite: "Smarter Fleet.",
    headlineAccent: "Stronger Control.",
    description:
      "Capture. Track. Verify. Maintain. Complete control over your rental fleet.",
    features: [
      { icon: Camera, label: "Vehicle Inspections" },
      { icon: Shield, label: "Damage Verification" },
      { icon: FileText, label: "Digital Records" },
    ],
    imageDesktop: assets.banners.fleet.desktop,
    imageMobile: assets.banners.fleet.mobile,
    imageAlt: "Toyota fleet vehicles lined up at airport rental facility",
  },
  {
    id: "detailing",
    headlineWhite: "Studio Quality.",
    headlineAccent: "Every Detail Matters.",
    description:
      "Showcase your detailing work with premium studio backgrounds and interactive 360° views.",
    features: [
      { icon: Camera, label: "Mercedes Studio" },
      { icon: Shield, label: "Premium Presentation" },
      { icon: FileText, label: "Before & After" },
    ],
    imageDesktop: assets.banners.detailing.desktop,
    imageMobile: assets.banners.detailing.mobile,
    imageAlt: "Mercedes in premium detailing studio environment",
  },
];
