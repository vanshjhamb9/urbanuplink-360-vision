import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import FloatingDemo from "@/components/FloatingDemo";
import { IndustrySection } from "@/components/industries/IndustrySection";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { industries } from "@/lib/industries";

const UseCasesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // Allow layout to settle before scrolling to industry anchors
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <PageLayout>
      <section className="relative overflow-hidden border-b border-white/10 section-compact">
        <div className="pointer-events-none absolute inset-0 section-glow" />
        <div className="page-container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="Industries"
              title={
                <>
                  Why Urban Uplink matters for{" "}
                  <span className="text-brand-lime">your industry</span>
                </>
              }
              description="Each vertical has a different problem, process, and definition of success. Explore industry-specific workflows — not duplicated homepage screenshots."
              align="left"
              className="max-w-3xl"
            />

            <nav
              className="section-body flex flex-wrap gap-2"
              aria-label="Jump to industry"
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
            </nav>
          </motion.div>
        </div>
      </section>

      {industries.map((industry) => (
        <IndustrySection key={industry.id} industry={industry} />
      ))}

      <CTA />
      <FloatingDemo />
    </PageLayout>
  );
};

export default UseCasesPage;
