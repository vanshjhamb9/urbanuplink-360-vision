import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ResponsiveImage } from "@/components/ui-custom/ResponsiveImage";
import { IndustryProcessRail } from "@/components/industries/IndustryProcessRail";
import { MarketplaceComparison } from "@/components/industries/MarketplaceComparison";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import type { IndustryDefinition } from "@/lib/industries";
import { cn } from "@/lib/utils";

interface IndustrySectionProps {
  industry: IndustryDefinition;
  /** Load banner immediately (first visible industry section) */
  priorityBanner?: boolean;
}

export function IndustrySection({ industry, priorityBanner = false }: IndustrySectionProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [bannerReady, setBannerReady] = useState(!priorityBanner);

  return (
    <section
      ref={ref}
      id={industry.id}
      className="relative scroll-mt-24 border-b border-white/8"
      aria-labelledby={`${industry.id}-heading`}
    >
      {/* Industry intro banner */}
      <div className="relative isolate z-20 min-h-[56vh] overflow-hidden md:min-h-[62vh]">
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            bannerReady ? "opacity-100" : "opacity-0",
          )}
        >
          <ResponsiveImage
            desktopSrc={industry.bannerDesktop}
            mobileSrc={industry.bannerMobile}
            alt={industry.bannerAlt}
            loading={priorityBanner ? "eager" : "lazy"}
            fetchPriority={priorityBanner ? "high" : undefined}
            decoding={priorityBanner ? "sync" : "async"}
            onLoad={() => setBannerReady(true)}
            imgClassName="object-[center_38%] brightness-110 contrast-105 md:object-[72%_center]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/35 to-transparent md:via-brand-black/25"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-brand-black/15 md:from-brand-black/35"
          aria-hidden="true"
        />

        <div className="page-container-wide relative z-10 flex min-h-[56vh] items-end pb-10 pt-8 sm:items-center sm:pb-12 md:min-h-[62vh] md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
              {industry.eyebrow}
            </p>
            <h2
              id={`${industry.id}-heading`}
              className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
            >
              {industry.headlineWhite}{" "}
              <span className="text-brand-lime">{industry.headlineAccent}</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
              {industry.intro}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {industry.features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-lime/30 bg-brand-black/60">
                    <Icon className="h-4 w-4 text-brand-lime" />
                  </span>
                  <span className="text-sm font-medium text-white">{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Problem → Process → Solution → Result */}
      <div className="relative z-10 bg-brand-black section-shell">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
                Industry Problem
              </p>
              <h3 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
                {industry.problemTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                {industry.problem}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
                Urban Uplink Solution
              </p>
              <h3 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
                {industry.solutionTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                {industry.solution}
              </p>
            </motion.div>
          </div>

          <div className="mt-12 md:mt-16">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
              Process
            </p>
            <h3 className="mb-6 font-heading text-2xl font-extrabold text-white md:mb-8 md:text-3xl">
              How it works for {industry.name.toLowerCase()}
            </h3>
            <IndustryProcessRail steps={industry.process} />
          </div>

          {industry.id === "marketplace" && industry.listingGap ? (
            <MarketplaceComparison content={industry.listingGap} />
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-12 flex flex-col gap-6 rounded-2xl border border-brand-lime/20 bg-brand-lime/[0.06] p-6 md:mt-16 md:flex-row md:items-center md:justify-between md:p-8"
          >
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
                Output / Result
              </p>
              <h3 className="font-heading text-xl font-extrabold text-white md:text-2xl">
                {industry.resultTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">
                {industry.result}
              </p>
            </div>
            <GlowButton href="/contact" variant="filled" className="shrink-0">
              Discuss {industry.name}
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
