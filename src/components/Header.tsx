import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { navLinks } from "@/lib/brand";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isScrolled ? "glass-nav shadow-lg" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative flex h-20 items-center justify-between lg:h-24">
            <Link to="/" className="relative z-10 shrink-0" aria-label="Urban Uplink home">
              <Logo size="sm" className="md:hidden" />
              <Logo size="md" className="hidden md:flex" />
            </Link>

            <nav
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
              aria-label="Main navigation"
            >
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const active = location.pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className={cn(
                          "relative px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white",
                          active && "text-white",
                        )}
                      >
                        {link.label}
                        {active && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-lime"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="relative z-10 hidden items-center lg:flex">
              <GlowButton href="/contact">Book Demo</GlowButton>
            </div>

            <div className="flex items-center gap-2 max-[380px]:gap-1 lg:hidden">
              <GlowButton href="/contact" className="hidden px-4 py-2 text-xs min-[381px]:inline-flex">
                Book Demo
              </GlowButton>
              <button
                type="button"
                className="rounded-lg p-2 text-white hover:bg-white/10"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,360px)] flex-col border-l border-white/10 bg-brand-black/95 p-6 backdrop-blur-xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo size="sm" showTagline={false} />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2 hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = location.pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-brand-lime/10 text-brand-lime"
                            : "text-white/80 hover:bg-white/5 hover:text-white",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto border-t border-white/10 pt-6">
                <GlowButton href="/contact" className="w-full">
                  Book Demo
                </GlowButton>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
