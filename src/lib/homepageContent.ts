import {
  Camera,
  Clock,
  ImageOff,
  Layers,
  RotateCcw,
  Sparkles,
  Sun,
  Users,
  Zap,
} from "lucide-react";

/** §1 — Hero */
export const heroCopy = {
  headline: "Turn Every Vehicle Into",
  headlineAccent: "Your Best Salesperson.",
  description:
    "Capture professional vehicle experiences using only your smartphone. AI transforms every vehicle into showroom-quality inventory that attracts more buyers and sells faster.",
  primaryCta: "Get started",
  primaryHref: "/contact",
  secondaryCta: "See live demo",
  secondaryHref: "#360-experience",
  features: [
    { icon: Camera, label: "No DSLR or Turntable Required" },
    { icon: RotateCcw, label: "Interactive 360° Experience" },
    { icon: Sparkles, label: "AI Studio Backgrounds" },
    { icon: Clock, label: "Ready in Minutes" },
  ],
};

/** §2 — The Problem */
export const problemCopy = {
  eyebrow: "The Listing Gap",
  title: "Great cars deserve",
  titleAccent: "better listings.",
  intro:
    "Typical dealer photos are shot on phones in busy yards with uneven lighting. Buyers see inconsistency — not the vehicle.",
  painPoints: [
    { icon: Camera, title: "Yard photos", description: "Mobile captures against cluttered lots make every listing look different." },
    { icon: ImageOff, title: "Distracting backgrounds", description: "Busy settings pull focus away from the vehicle you're selling." },
    { icon: Sun, title: "Poor lighting", description: "Harsh shadows and flat photos fail to show the vehicle at its best." },
    { icon: Clock, title: "Slow editing", description: "Teams wait days for retouching before listings can go live." },
    { icon: Users, title: "Inconsistent output", description: "Marketing, sales, and ops each produce a different version of the same car." },
  ],
  closing: "The result?",
  closingAccent: "Same vehicle. Different experience.",
};

/** §3 — The Shift */
export const shiftCopy = {
  eyebrow: "The Shift",
  title: "From capturing vehicles to",
  titleAccent: "creating digital assets.",
  description:
    "Urban Uplink transforms a simple vehicle capture into a consistent, premium digital experience that can be used across every customer touchpoint.",
  tagline: "Capture once. Create more.",
  pillars: [
    { label: "One vehicle", description: "Start with a single, guided capture." },
    { label: "One consistent visual identity", description: "Every output follows the same premium standard." },
    { label: "Multiple experiences", description: "Listings, 360°, social, web, and more — from one source." },
  ],
};

/** §5 — Value Proposition */
export const valueCopy = {
  eyebrow: "Why Urban Uplink",
  title: "Studio quality",
  titleAccent: "without the studio.",
  description:
    "Replace manual editing and inconsistent yard photos with one guided capture workflow your whole team can run.",
  benefits: [
    { icon: Layers, title: "Consistent listings", description: "Every vehicle follows the same visual standard across your inventory." },
    { icon: Users, title: "More buyer engagement", description: "360° views and clean presentation keep shoppers on the listing longer." },
    { icon: Zap, title: "Faster to market", description: "Go from lot capture to published listing in minutes, not days." },
  ],
};

/** §6 — Core Product */
export const coreProductCopy = {
  eyebrow: "The Core Product",
  title: "Your vehicle.",
  titleAccent: "Your digital studio.",
  description:
    "What used to require cameras, editing teams, studio setups and multiple workflows can now begin with a single capture.",
  body: "Urban Uplink brings the studio to the vehicle.",
  subtext:
    "AI-powered processing creates clean, consistent and presentation-ready vehicle imagery — without requiring a physical studio.",
};

/** Background removal demo — Kia Seltos before/after */
export const backgroundRemovalCopy = {
  eyebrow: "Background Removal",
  title: "From busy background to",
  titleAccent: "clean vehicle.",
  description:
    "Drag the slider to compare a real outdoor capture against the background-removed result — same Kia Seltos, ready for any showroom or listing.",
  vehicleLabel: "Kia Seltos",
  beforeLabel: "Original background",
  afterLabel: "Background removed",
  stats: [
    { label: "Instant processing", value: "< 30s" },
    { label: "Edge accuracy", value: "99.9%" },
    { label: "Time saved vs. manual", value: "10×" },
  ],
};

/** §7 — 360° Experience */
export const threeSixtyCopy = {
  eyebrow: "360° Experience",
  title: "Let customers",
  titleAccent: "explore the vehicle.",
  description:
    "A photograph shows a moment. A 360° experience lets customers explore. Create an interactive view of the vehicle from multiple angles and give online buyers a more complete sense of what they're considering.",
  tagline: "Real vehicle. Real capture. Immersive experience.",
  footnote: "No 3D model required.",
  cta: "Explore 360°",
  ctaHref: "#360-experience",
};

/** §8 — Social Media */
export const socialCopy = {
  eyebrow: "Social Media",
  title: "One vehicle.",
  titleAccent: "Endless content.",
  description:
    "Your vehicle imagery shouldn't stop at the listing. Turn the same digital assets into content for Instagram, Facebook, LinkedIn, WhatsApp, websites and campaigns.",
  tagline: "Publish to WhatsApp, Instagram, Facebook, and your website from one capture.",
  cta: "Get started",
  ctaHref: "/contact",
};

/** §9 — Use Cases */
export const useCasesCopy = {
  eyebrow: "Use Cases",
  title: "Built for the entire",
  titleAccent: "automotive ecosystem.",
  description: "Marketplaces, dealers, insurance, fleet, and detailing — one platform, tailored workflows.",
  cta: "Explore use cases",
  ctaHref: "/use-cases",
};

/** §10 — Business Impact */
export const impactCopy = {
  eyebrow: "Business Impact",
  title: "Better listings.",
  titleAccent: "Better outcomes.",
  description:
    "When buyers can see, explore, and trust what they're looking at, enquiries go up and time-to-sale goes down.",
  intro: "Teams move from:",
  shifts: [
    { from: "Manual retouching", to: "Automated studio output" },
    { from: "Inconsistent yard photos", to: "Premium presentation" },
    { from: "One-time listing images", to: "Reusable channel assets" },
  ],
};

/** §11 — Scale */
export const scaleCopy = {
  eyebrow: "Scale",
  title: "Built for one vehicle.",
  titleAccent: "Designed for thousands.",
  description:
    "Whether you manage a dealership lot, a marketplace catalog, or a distributed fleet — one workflow scales across every vehicle.",
};

/** §12 — Final CTA */
export const finalCtaCopy = {
  title: "Ready to make every listing",
  titleAccent: "look professional?",
  description:
    "Give your team a faster way to capture, enhance, and publish vehicle inventory that builds buyer confidence.",
  primaryCta: "Book a Demo",
  primaryHref: "/contact",
  secondaryCta: "View Pricing",
  secondaryHref: "/pricing",
  tagline: "Urban Uplink",
  subtagline: "Smarter tools. Greater impact.",
};
