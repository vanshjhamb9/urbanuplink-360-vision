import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { UseCaseBanner } from "@/components/UseCaseBanner";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import FloatingDemo from "@/components/FloatingDemo";
import { solutions } from "@/lib/solutions";

const UseCasesPage = () => {
  return (
    <PageLayout>
      {/* Page intro — compact, dark */}
      <section className="relative overflow-hidden border-b border-white/10 py-12 sm:py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 section-glow" />
        <div className="container relative mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime sm:mb-4">
              Solutions
            </p>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Built for Every{" "}
              <span className="text-brand-lime">Automotive Vertical</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-brand sm:mt-5 sm:text-base md:text-lg">
              From marketplaces to fleet operations — explore how Urban Uplink
              delivers showroom-grade visuals with AI-powered 360° experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Designer banner sections — text overlaps full-bleed images */}
      <div className="divide-y divide-white/5">
        {solutions.map((solution) => (
          <UseCaseBanner key={solution.id} {...solution} />
        ))}
      </div>

      {/* Closing CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 section-glow" />
        <div className="container relative mx-auto px-4 text-center md:px-6">
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
            Ready to see it{" "}
            <span className="text-brand-lime">in your workflow?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-brand">
            Talk to our team and discover how Urban Uplink fits your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="/contact" variant="filled">
              Get Started
            </GlowButton>
            <GlowButton href="/features">Explore Services</GlowButton>
          </div>
        </div>
      </section>

      <FloatingDemo />
    </PageLayout>
  );
};

export default UseCasesPage;
