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

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/team" },
] as const;
