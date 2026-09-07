import {
  Camera,
  Shield,
  FileText,
  Clock,
  Handshake,
  Box,
  Palette,
  AlertTriangle,
  Search,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { assets } from "@/lib/assets";

export interface IndustryProcessStep {
  title: string;
  description: string;
  imageDesktop: string;
  imageMobile: string;
  icon?: LucideIcon;
  showChannelIcons?: boolean;
  objectPosition?: string;
}

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

export interface ListingGapContent {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  steps: ListingGapStep[];
  footerTagline: string;
  footerHeadline: string;
  footerBody: string;
  footerAccent: string;
}

export interface IndustryDefinition {
  id: string;
  name: string;
  eyebrow: string;
  headlineWhite: string;
  headlineAccent: string;
  intro: string;
  problemTitle: string;
  problem: string;
  solutionTitle: string;
  solution: string;
  resultTitle: string;
  result: string;
  features: { icon: LucideIcon; label: string }[];
  bannerDesktop: string;
  bannerMobile: string;
  bannerAlt: string;
  process: IndustryProcessStep[];
  /** Marketplace-only listing gap showcase */
  listingGap?: ListingGapContent;
}

export const industries: IndustryDefinition[] = [
  {
    id: "marketplace",
    name: "Marketplaces",
    eyebrow: "Marketplace",
    headlineWhite: "Every Listing Should Look Like It",
    headlineAccent: "Belongs in a Premium Showroom.",
    intro:
      "Turn everyday smartphone photos into professional inventory that generates more clicks, longer engagement and higher buyer confidence.",
    problemTitle: "The listing problem",
    problem:
      "Typical dealer photos are captured on mobile phones against busy yards, uneven lighting, and cluttered backgrounds. Listings look inconsistent, less premium, and harder for buyers to trust.",
    solutionTitle: "The Urban Uplink solution",
    solution:
      "Urban Uplink transforms everyday smartphone photos into studio-grade inventory visuals with clean backgrounds, consistent presentation, and interactive 360 experiences ready for marketplace channels.",
    resultTitle: "The result",
    result:
      "Professional listings that feel premium, build buyer confidence, and present inventory with visual consistency across every vehicle.",
    features: [
      { icon: Camera, label: "AI Studio" },
      { icon: Box, label: "Interactive 360°" },
      { icon: Palette, label: "Brand Consistency" },
      { icon: FileText, label: "Marketplace Ready" },
    ],
    bannerDesktop: assets.banners.marketplace.desktop,
    bannerMobile: assets.banners.marketplace.mobile,
    bannerAlt:
      "Red SUV presented in a premium Drive One studio with before-and-after listing comparison",
    process: [
      {
        title: "Capture on site",
        description: "Dealers photograph vehicles with a smartphone.",
        imageDesktop: assets.productWorkflow.capture.desktop,
        imageMobile: assets.productWorkflow.capture.mobile,
        objectPosition: "center 55%",
      },
      {
        title: "Clean presentation",
        description: "Backgrounds are removed and replaced with studio quality.",
        imageDesktop: assets.beforeAfter.afterDesktop,
        imageMobile: assets.beforeAfter.afterMobile,
        objectPosition: "center center",
      },
      {
        title: "Listing-ready assets",
        description: "Outputs stay consistent across the inventory catalog.",
        imageDesktop: assets.productWorkflow.present.desktop,
        imageMobile: assets.productWorkflow.present.mobile,
        objectPosition: "center 42%",
      },
      {
        title: "Buyer-facing experience",
        description: "Premium visuals support stronger listing perception.",
        imageDesktop: assets.productWorkflow.showcase.desktop,
        imageMobile: assets.productWorkflow.showcase.mobile,
        objectPosition: "center 38%",
      },
      {
        title: "Published anywhere",
        description: "Share to WhatsApp, Instagram, Facebook, web, and marketplaces from one capture.",
        imageDesktop: assets.productWorkflow.publish.desktop,
        imageMobile: assets.productWorkflow.publish.mobile,
        objectPosition: "center top",
        showChannelIcons: true,
      },
    ],
    listingGap: {
      eyebrow: "The Listing Gap",
      title: "Great cars deserve",
      titleAccent: "better listings.",
      description:
        "Turn a simple vehicle capture into a premium digital experience.",
      steps: [
        {
          stepTitle: "Capture",
          stepHint: "Real-world photos",
          cardTitle: "Real-world capture",
          cardDescription:
            "Guided mobile capture from your lot — consistent angles without studio equipment.",
          imageDesktop: assets.beforeAfter.beforeDesktop,
          imageMobile: assets.beforeAfter.beforeMobile,
          icon: Camera,
          objectPosition: "center center",
        },
        {
          stepTitle: "Clean",
          stepHint: "Remove the clutter",
          cardTitle: "Clean vehicle",
          cardDescription:
            "Automatically isolate the vehicle and remove cluttered yard backgrounds.",
          imageDesktop: assets.beforeAfter.afterDesktop,
          imageMobile: assets.beforeAfter.afterMobile,
          icon: Sparkles,
          objectPosition: "center center",
        },
        {
          stepTitle: "Present",
          stepHint: "Studio-grade visuals",
          cardTitle: "Premium experience",
          cardDescription:
            "Drop inventory into polished, purpose-built listing environments buyers trust.",
          imageDesktop: assets.beforeAfter.studioDesktop,
          imageMobile: assets.beforeAfter.studioMobile,
          icon: Box,
          objectPosition: "center center",
        },
      ],
      footerTagline: "Same vehicle. Different experience.",
      footerHeadline: "From a basic capture to a listing that feels premium.",
      footerBody: "No studio. No complex editing workflow.",
      footerAccent: "Just a better way to present every vehicle.",
    },
  },
  {
    id: "insurance",
    name: "Insurance",
    eyebrow: "Insurance",
    headlineWhite: "Faster Inspections.",
    headlineAccent: "Faster Claims.",
    intro:
      "Insurance workflows depend on clear vehicle documentation. Urban Uplink helps teams capture consistent evidence that supports inspection and claims processes.",
    problemTitle: "The documentation gap",
    problem:
      "Claims teams receive phone photos with inconsistent angles, poor lighting, and missing context. Inspectors spend more time chasing clarity than reviewing damage.",
    solutionTitle: "The Urban Uplink solution",
    solution:
      "Standardize field capture with guided imaging that produces clean, consistent vehicle records — easier for adjusters to review and share across the claim lifecycle.",
    resultTitle: "The result",
    result:
      "Cleaner documentation, easier review, and a more reliable visual trail for inspection and claim workflows — without inventing unsupported automation claims.",
    features: [
      { icon: Camera, label: "Inspection Ready" },
      { icon: FileText, label: "Damage Documentation" },
      { icon: Shield, label: "Clear Evidence" },
      { icon: Clock, label: "Faster Review" },
    ],
    bannerDesktop: assets.banners.insurance.desktop,
    bannerMobile: assets.banners.insurance.mobile,
    bannerAlt: "Insurance damage inspection with tablet documentation",
    process: [
      {
        title: "Capture condition",
        description: "Document the vehicle with guided, consistent imaging.",
        imageDesktop: assets.useCases.insurance.process.desktop[0],
        imageMobile: assets.useCases.insurance.process.mobile[0],
        icon: Camera,
      },
      {
        title: "Organize evidence",
        description: "Keep inspection visuals structured for review teams.",
        imageDesktop: assets.useCases.insurance.process.desktop[1],
        imageMobile: assets.useCases.insurance.process.mobile[1],
        icon: FileText,
      },
      {
        title: "Process visuals",
        description: "Enhance clarity so damage and condition are easier to assess.",
        imageDesktop: assets.useCases.insurance.process.desktop[2],
        imageMobile: assets.useCases.insurance.process.mobile[2],
        icon: Sparkles,
      },
      {
        title: "Support the claim",
        description: "Share professional visual records with stakeholders.",
        imageDesktop: assets.useCases.insurance.process.desktop[3],
        imageMobile: assets.useCases.insurance.process.mobile[3],
        icon: Shield,
      },
    ],
  },
  {
    id: "fleet",
    name: "Fleet Management",
    eyebrow: "Fleet Management",
    headlineWhite: "Manage Every Vehicle",
    headlineAccent: "With Confidence.",
    intro:
      "Fleet and rental operators need a repeatable way to capture vehicle condition before and after every assignment.",
    problemTitle: "The accountability problem",
    problem:
      "Rental and fleet teams rely on rushed phone photos at checkout and return. When damage appears later, there is no clear before-and-after record to resolve disputes quickly.",
    solutionTitle: "The Urban Uplink solution",
    solution:
      "Capture condition at handoff with the same guided workflow every time — then compare checkout and return visuals side by side with clear, audit-ready evidence.",
    resultTitle: "The result",
    result:
      "Stronger accountability, clearer damage conversations, and audit-ready visual records across the fleet.",
    features: [
      { icon: Camera, label: "Digital Inspections" },
      { icon: Shield, label: "Damage Tracking" },
      { icon: Clock, label: "Lifecycle Records" },
      { icon: FileText, label: "Audit Ready" },
    ],
    bannerDesktop: assets.banners.fleet.desktop,
    bannerMobile: assets.banners.fleet.mobile,
    bannerAlt:
      "Fleet vehicles lined up for digital inspection and operational records",
    process: [
      {
        title: "Executive captures vehicle condition",
        description:
          "Detailed photos of the vehicle are taken before it goes out for rent.",
        imageDesktop: assets.useCases.fleet.process.desktop[0],
        imageMobile: assets.useCases.fleet.process.mobile[0],
        icon: Camera,
      },
      {
        title: "Client/driver takes it for the ride",
        description: "The vehicle is assigned and the journey begins.",
        imageDesktop: assets.useCases.fleet.process.desktop[1],
        imageMobile: assets.useCases.fleet.process.mobile[1],
        icon: Users,
      },
      {
        title: "Vehicle is returned with damage",
        description:
          "The driver returns the vehicle with visible damage that needs documentation.",
        imageDesktop: assets.useCases.fleet.process.desktop[2],
        imageMobile: assets.useCases.fleet.process.mobile[2],
        icon: AlertTriangle,
      },
      {
        title: "Identify damage with clear comparison",
        description:
          "Before and after visuals help the team identify and communicate damage clearly.",
        imageDesktop: assets.useCases.fleet.process.desktop[3],
        imageMobile: assets.useCases.fleet.process.mobile[3],
        icon: Search,
      },
    ],
  },
  {
    id: "detailing",
    name: "Car Detailing",
    eyebrow: "Car Detailing Studios",
    headlineWhite: "Make Every Detail",
    headlineAccent: "Worth Paying For.",
    intro:
      "Detailing studios sell transformation. Customers need to see the before, the work, and the finished result — clearly enough to justify premium packages.",
    problemTitle: "The presentation problem",
    problem:
      "Customers cannot see the transformation when before/after proof is shot on a phone in a dim bay. Premium packages look like every other listing — hard to justify the price.",
    solutionTitle: "The Urban Uplink solution",
    solution:
      "Document the full detailing journey with studio-grade before, process, and after visuals customers can explore — and share on social without a separate photo shoot.",
    resultTitle: "The result",
    result:
      "A clear visual story that showcases craftsmanship, supports upsells, and gives customers a shareable record of the finished vehicle.",
    features: [
      { icon: Camera, label: "Premium Studio" },
      { icon: FileText, label: "Before & After" },
      { icon: Handshake, label: "Shareable Proof" },
    ],
    bannerDesktop: assets.banners.detailing.desktop,
    bannerMobile: assets.banners.detailing.mobile,
    bannerAlt: "Vehicle in a premium detailing studio environment",
    process: [
      {
        title: "Before vehicle",
        description: "Capture the starting condition clearly.",
        imageDesktop: assets.useCases.detailing.process.desktop[0],
        imageMobile: assets.useCases.detailing.process.mobile[0],
      },
      {
        title: "Detailing process",
        description: "Document the work as it happens.",
        imageDesktop: assets.useCases.detailing.process.desktop[1],
        imageMobile: assets.useCases.detailing.process.mobile[1],
      },
      {
        title: "After vehicle",
        description: "Show the finished result in a premium presentation.",
        imageDesktop: assets.useCases.detailing.process.desktop[2],
        imageMobile: assets.useCases.detailing.process.mobile[2],
      },
      {
        title: "Report & share",
        description: "Deliver documentation customers can keep and share.",
        imageDesktop: assets.useCases.detailing.process.desktop[3],
        imageMobile: assets.useCases.detailing.process.mobile[3],
      },
    ],
  },
];
