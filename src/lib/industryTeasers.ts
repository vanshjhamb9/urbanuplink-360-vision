import { Camera, Shield, Truck, Sparkles, Store, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IndustryTeaser {
  id: string;
  name: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const industryTeasers: IndustryTeaser[] = [
  {
    id: "marketplace",
    name: "Marketplaces",
    headline: "Premium listings at scale",
    description: "Create consistent, premium vehicle listings at scale.",
    icon: Camera,
    href: "/use-cases#marketplace",
  },
  {
    id: "dealers",
    name: "Dealers",
    headline: "Professional digital presence",
    description: "Give every vehicle in your inventory a professional digital presence.",
    icon: Store,
    href: "/use-cases#marketplace",
  },
  {
    id: "insurance",
    name: "Insurance",
    headline: "Structured visual documentation",
    description: "Create structured visual documentation for vehicle inspections and assessments.",
    icon: Shield,
    href: "/use-cases#insurance",
  },
  {
    id: "fleet",
    name: "Fleet",
    headline: "Consistent fleet digitisation",
    description: "Digitise vehicles consistently across large and distributed fleets.",
    icon: Truck,
    href: "/use-cases#fleet",
  },
  {
    id: "detailing",
    name: "Detailing",
    headline: "Show the transformation",
    description: "Show the transformation with compelling before-and-after experiences.",
    icon: Sparkles,
    href: "/use-cases#detailing",
  },
  {
    id: "virtual-showrooms",
    name: "Virtual Showrooms",
    headline: "Immersive exploration",
    description: "Create immersive environments that let customers explore vehicles beyond the traditional listing.",
    icon: Monitor,
    href: "/use-cases#detailing",
  },
];
