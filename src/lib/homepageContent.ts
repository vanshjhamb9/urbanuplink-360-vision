import {
  Camera,
  Clock,
  Globe,
  ImageOff,
  Layers,
  Lightbulb,
  Repeat,
  Sparkles,
  Store,
  Sun,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** §1 — Hero */
export const heroCopy = {
  headline: "One Capture.",
  headlineAccent: "Infinite Possibilities.",
  description:
    "Turn every vehicle into a premium digital experience — ready for marketplaces, insurance, fleet, detailing and beyond.",
  tagline: "Capture once. Transform automatically. Publish everywhere.",
  primaryCta: "Explore Urban Uplink",
  primaryHref: "/contact",
  secondaryCta: "See How It Works",
  secondaryHref: "#how-it-works",
  features: [
    { icon: Camera, label: "Guided capture" },
    { icon: Sparkles, label: "Premium presentation" },
    { icon: Layers, label: "Multi-channel output" },
    { icon: Zap, label: "Ready in minutes" },
  ],
};

/** §2 — The Problem */
export const problemCopy = {
  eyebrow: "The Problem",
  title: "A great vehicle deserves",
  titleAccent: "better than a basic listing.",
  intro:
    "Most vehicles are captured once — but the images rarely do justice to what is being sold.",
  painPoints: [
    { icon: Camera, title: "Inconsistent angles", description: "Every shoot looks different — buyers can't compare inventory fairly." },
    { icon: ImageOff, title: "Distracting backgrounds", description: "Busy yards and uneven settings pull focus away from the vehicle." },
    { icon: Sun, title: "Poor lighting", description: "Harsh shadows and flat photos fail to show the vehicle at its best." },
    { icon: Clock, title: "Time-consuming editing", description: "Teams lose days waiting on retouching before listings go live." },
    { icon: Users, title: "Different teams, different experiences", description: "Marketing, sales, and ops each create their own version of the truth." },
  ],
  closing: "The result?",
  closingAccent: "Vehicles become listings instead of experiences.",
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
  eyebrow: "The Value Proposition",
  title: "Make every vehicle",
  titleAccent: "work harder.",
  description:
    "Urban Uplink helps automotive businesses create better vehicle experiences without adding more complexity to their workflow.",
  benefits: [
    { icon: Layers, title: "More Consistency", description: "Every vehicle follows the same visual standard." },
    { icon: Users, title: "More Engagement", description: "Give customers more reasons to stop, explore and enquire." },
    { icon: Zap, title: "More Speed", description: "Reduce the time between capture and publication." },
    { icon: Repeat, title: "More Reusability", description: "Create assets that work across multiple channels and use cases." },
    { icon: Lightbulb, title: "More Value", description: "Turn one vehicle capture into multiple digital experiences." },
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
  tagline: "Capture once. Create for every channel.",
  cta: "Show Me What's Possible",
  ctaHref: "/contact",
};

/** §9 — Use Cases */
export const useCasesCopy = {
  eyebrow: "Use Cases",
  title: "Built for the entire",
  titleAccent: "automotive ecosystem.",
  description: "One platform. Multiple applications.",
  cta: "Explore Solutions",
  ctaHref: "/use-cases",
};

/** §10 — Business Impact */
export const impactCopy = {
  eyebrow: "The Business Impact",
  title: "Better vehicle presentation.",
  titleAccent: "Better outcomes.",
  description:
    "When vehicles are easier to understand, easier to explore and easier to trust, customers spend more time engaging with them.",
  intro: "Urban Uplink helps businesses move from:",
  shifts: [
    { from: "More manual work", to: "More automation" },
    { from: "Inconsistent images", to: "Consistent presentation" },
    { from: "Basic listings", to: "Premium experiences" },
    { from: "One-time content", to: "Reusable digital assets" },
    { from: "Vehicle photos", to: "Vehicle experiences" },
  ],
};

/** §11 — Scale */
export const scaleCopy = {
  eyebrow: "Scale",
  title: "Built for one vehicle.",
  titleAccent: "Designed for thousands.",
  description:
    "Whether you're managing a dealership inventory, a marketplace with thousands of listings or a distributed fleet, Urban Uplink creates a consistent visual standard across every vehicle.",
  tagline: "One workflow. Every vehicle. Consistently.",
};

/** §12 — Final CTA */
export const finalCtaCopy = {
  title: "Your vehicles are already valuable.",
  titleAccent: "Make them look it.",
  description:
    "Turn every capture into a digital asset that works harder across your business.",
  primaryCta: "Transform Your Vehicle Experience",
  primaryHref: "/contact",
  tagline: "Urban Uplink",
  subtagline: "Smarter tools. Greater impact.",
};
