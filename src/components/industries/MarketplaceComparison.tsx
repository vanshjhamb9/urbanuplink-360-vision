import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import type { ListingGapContent } from "@/lib/industries";

interface MarketplaceComparisonProps {
  content: ListingGapContent;
}

export function MarketplaceComparison({ content }: MarketplaceComparisonProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="mt-12 space-y-10 border-t border-white/8 pt-12 md:mt-16 md:space-y-12 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
          {content.eyebrow}
        </p>
        <h3 className="font-heading text-2xl font-extrabold tracking-tight text-white md:text-3xl lg:text-[2rem]">
          {content.title}{" "}
          <span className="text-brand-lime">{content.titleAccent}</span>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
          {content.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-8">
        {content.steps.map((step, index) => (
          <motion.div
            key={step.stepTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="relative flex h-full flex-col"
          >
            <div className="mb-4 flex min-h-[3.25rem] items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-brand-lime/50 bg-brand-black font-heading text-xs font-extrabold text-brand-lime">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-brand-lime">
                  {step.stepTitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">{step.stepHint}</p>
              </div>
            </div>

            <article className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#111111] shadow-card">
              <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-white/8 bg-[#0a0c0e]">
                <picture>
                  <source media="(max-width: 767px)" srcSet={step.imageMobile} />
                  <img
                    src={step.imageDesktop}
                    alt={step.cardTitle}
                    className="absolute inset-0 h-full w-full object-cover brightness-105 contrast-105 transition-transform duration-500 hover:scale-[1.02]"
                    style={{ objectPosition: step.objectPosition ?? "center center" }}
                    loading="eager"
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="sync"
                  />
                </picture>
              </div>
              <div className="flex flex-1 flex-col space-y-3 p-4 md:p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-lime/35 bg-brand-lime/[0.08]">
                  <step.icon className="h-4 w-4 text-brand-lime" strokeWidth={2} />
                </span>
                <div className="flex-1">
                  <h4 className="font-heading text-sm font-extrabold uppercase tracking-wide text-white">
                    {step.cardTitle}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/65 sm:text-sm">
                    {step.cardDescription}
                  </p>
                </div>
              </div>
            </article>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto max-w-3xl pt-2 text-center"
      >
        <div className="mx-auto mb-5 h-px w-20 bg-brand-lime/70 md:mb-6 md:w-28" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lime">
          {content.footerTagline}
        </p>
        <p className="mt-4 font-heading text-lg font-extrabold text-white md:text-xl">
          {content.footerHeadline}
        </p>
        <p className="mt-3 text-sm text-white/60 md:text-base">
          {content.footerBody}{" "}
          <span className="font-semibold text-brand-lime">{content.footerAccent}</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.28 }}
        className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:p-5 md:p-6"
      >
        <div>
          <p className="text-sm font-bold text-white">Marketplace listing environment</p>
          <p className="mt-1 text-xs leading-relaxed text-white/50 sm:text-sm">
            How Urban Uplink-processed inventory appears across multiple listings
          </p>
        </div>
        <GlowButton href="/contact" variant="filled" className="w-full shrink-0 sm:w-auto">
          Book a Demo
        </GlowButton>
      </motion.div>
    </section>
  );
}
