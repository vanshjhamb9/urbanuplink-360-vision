import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCasesCopy } from "@/lib/homepageContent";
import { industryTeasers } from "@/lib/industryTeasers";

const IndustryTeaserGrid = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden border-y border-white/8 bg-brand-black section-shell"
      aria-labelledby="industry-teasers-heading"
    >
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow={useCasesCopy.eyebrow}
            title={
              <span id="industry-teasers-heading">
                {useCasesCopy.title}{" "}
                <span className="text-brand-lime">{useCasesCopy.titleAccent}</span>
              </span>
            }
            description={useCasesCopy.description}
          />
        </motion.div>

        <div className="section-body grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {industryTeasers.map((teaser, index) => (
            <motion.a
              key={teaser.id}
              href={teaser.href}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
              className="group flex flex-col rounded-2xl border border-white/12 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-lime/35 hover:bg-brand-lime/[0.05] md:p-5"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04]">
                <teaser.icon className="h-5 w-5 text-white/80" />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                {teaser.name}
              </p>
              <h3 className="mt-1 font-heading text-lg font-extrabold text-white">
                {teaser.headline}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                {teaser.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-lime transition-transform group-hover:translate-x-1">
                View solution
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="section-body flex justify-center"
        >
          <GlowButton href={useCasesCopy.ctaHref} variant="filled">
            {useCasesCopy.cta}
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryTeaserGrid;
