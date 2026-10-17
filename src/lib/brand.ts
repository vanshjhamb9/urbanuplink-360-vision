export const brand = {
  colors: {
    accent: "#C9F135",
    secondary: "#3B9AE1",
    background: "#0A0A0A",
    text: "#FFFFFF",
    muted: "rgba(255,255,255,0.7)",
    border: "rgba(255,255,255,0.08)",
  },
  fonts: {
    heading: "'Manrope', sans-serif",
    body: "'Inter', sans-serif",
  },
} as const;

/** Legal entity + public contact details */
export const company = {
  legalName: "Urban Uplink Private Limited",
  shortName: "Urban Uplink",
  cin: "U62020KA2025PTC196899",
  email: "admin@urbanuplink.ai",
  supportEmail: "admin@urbanuplink.ai",
  careersEmail: "admin@urbanuplink.ai",
  phone: "+91 9632747166",
  phoneHref: "tel:+919632747166",
  website: "https://www.urbanuplink.ai",
  websiteLabel: "www.urbanuplink.ai",
  calendlyUrl: "https://calendly.com/admin-urbanuplink",
  address: {
    line1: "C/o WeWork Salarpuria Symbiosis",
    line2: "Ground floor, Bannerghatta Road, Arekere Village",
    line3: "Begur Hobli, Bengaluru, Karnataka 560076",
    short: "WeWork Salarpuria Symbiosis, Bannerghatta Road, Bengaluru",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

/** Footer / social — only live profiles (X/LinkedIn URLs currently 404) */
export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/urban.uplink/",
    network: "facebook" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/urbanuplink",
    network: "instagram" as const,
  },
] as const;
