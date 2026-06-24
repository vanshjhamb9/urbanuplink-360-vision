import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { navLinks } from "@/lib/brand";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-black py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 section-glow opacity-40" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
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
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-brand">
              <li>
                <Link to="/features" className="transition-colors hover:text-brand-lime">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="transition-colors hover:text-brand-lime">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="transition-colors hover:text-brand-lime">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/learn-more" className="transition-colors hover:text-brand-lime">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-extrabold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-brand">
              <li>
                <Link to="/privacy-policy" className="transition-colors hover:text-brand-lime">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="transition-colors hover:text-brand-lime">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="transition-colors hover:text-brand-lime">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-muted-brand">
            © {new Date().getFullYear()} Urban Uplink. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full p-2 text-muted-brand transition-colors hover:bg-white/5 hover:text-brand-lime"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
