import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import { UseCaseBanner } from "@/components/UseCaseBanner";
import { IndustrySection } from "@/components/industries/IndustrySection";
import { PageLayout } from "@/components/layout/PageLayout";
import { assets } from "@/lib/assets";
import { industries } from "@/lib/industries";
import { solutions } from "@/lib/solutions";

function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

const marketplaceHero = solutions[0];

const UseCasesPage = () => {
  const location = useLocation();

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    preloadImage(
      desktop ? marketplaceHero.imageDesktop : marketplaceHero.imageMobile,
    );
    industries.forEach((industry) => {
      if (industry.id === "marketplace") return;
      preloadImage(desktop ? industry.bannerDesktop : industry.bannerMobile);
    });
    preloadImage(assets.beforeAfter.beforeDesktop);
    preloadImage(assets.beforeAfter.afterDesktop);
    preloadImage(assets.beforeAfter.beforeMobile);
    preloadImage(assets.beforeAfter.afterMobile);
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <PageLayout>
      <UseCaseBanner {...marketplaceHero} priority />

      <section className="relative border-b border-white/8 bg-brand-black section-compact">
        <div className="page-container">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2"
            aria-label="Jump to use case"
          >
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/75 transition-colors hover:border-brand-lime/40 hover:text-brand-lime sm:text-sm"
              >
                {industry.name}
              </a>
            ))}
          </motion.nav>
        </div>
      </section>

      {industries.map((industry, index) => (
        <IndustrySection
          key={industry.id}
          industry={industry}
          hideBanner={industry.id === "marketplace"}
          priorityBanner={industry.id === "insurance"}
        />
      ))}

      <CTA />
    </PageLayout>
  );
};

export default UseCasesPage;
