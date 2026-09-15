import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { navLinks, socialLinks } from "@/lib/brand";

const serviceLinks = [
  { label: "360 Spin Experience", href: "/pricing#360-spin" },
  { label: "Bulk BG Removal Package", href: "/pricing#bulk-bg-removal" },
  {
    label: "BG Removal + Branding + Replacement",
    href: "/pricing#bg-removal-branding",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const socialIcon = {
  facebook: Facebook,
  instagram: Instagram,
} as const;

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-black section-compact">
      <div className="pointer-events-none absolute inset-0 section-glow opacity-40" />
      <div className="page-container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-brand">
              Transforming automotive sales with real 360° imaging solutions powered
              by AI.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-brand transition-colors hover:text-brand-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-brand transition-colors hover:text-brand-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-brand transition-colors hover:text-brand-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-muted-brand">
            © {new Date().getFullYear()} Urban Uplink. All rights reserved.
          </p>
          <ul className="flex items-center gap-3" aria-label="Social media">
            {socialLinks.map((link) => {
              const Icon = socialIcon[link.network];
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-brand-lime/40 hover:text-brand-lime"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
