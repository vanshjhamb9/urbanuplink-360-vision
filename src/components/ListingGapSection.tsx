import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { homepageListingGap } from "@/lib/listingGapContent";

const ListingGapSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="listing-gap"
      className="relative z-20 overflow-hidden bg-brand-black section-shell"
      aria-labelledby="listing-gap-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-50" />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow={homepageListingGap.eyebrow}
            title={
              <span id="listing-gap-heading">
                {homepageListingGap.title}{" "}
                <span className="text-brand-lime">{homepageListingGap.titleAccent}</span>
              </span>
            }
            description={homepageListingGap.description}
          />
        </motion.div>

        <div className="section-body hidden items-center justify-between gap-2 lg:flex">
          {homepageListingGap.steps.map((step, index) => (
            <div key={step.stepTitle} className="flex flex-1 items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-lime/40 bg-brand-black font-heading text-xs font-extrabold text-brand-lime">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-center text-[10px] font-bold uppercase tracking-wide text-brand-lime">
                  {step.stepTitle}
                </span>
                <span className="text-center text-[10px] text-white/45">{step.stepHint}</span>
              </div>
              {index < homepageListingGap.steps.length - 1 && (
                <div className="mb-6 h-px flex-1 bg-gradient-to-r from-brand-lime/50 to-brand-lime/20" />
              )}
            </div>
          ))}
        </div>

        <div className="section-body grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-5">
          {homepageListingGap.steps.map((step, index) => (
            <motion.article
              key={step.stepTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.035] shadow-card"
            >
              <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-white/8 bg-[#0a0c0e]">
                <picture>
                  <source media="(max-width: 767px)" srcSet={step.imageMobile} />
                  <img
                    src={step.imageDesktop}
                    alt={step.cardTitle}
                    className="absolute inset-0 h-full w-full object-cover brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: step.objectPosition ?? "center center" }}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </picture>
                <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-brand-lime/40 bg-brand-black/80 font-heading text-[10px] font-extrabold text-brand-lime lg:hidden">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex min-h-[2.25rem] items-center gap-2">
                  <step.icon className="h-4 w-4 shrink-0 text-brand-lime" strokeWidth={2} />
                  <p className="font-heading text-xs font-extrabold uppercase tracking-wide text-white">
                    {step.cardTitle}
                  </p>
                </div>
                <p className="flex-1 text-xs leading-relaxed text-white/65">{step.cardDescription}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="section-body"
        >
          <div className="flex items-center gap-3 rounded-full border border-brand-lime/25 bg-brand-lime/[0.06] px-5 py-3 md:px-6 md:py-3.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-lime/30 bg-brand-black text-brand-lime">
              <Globe className="h-4 w-4" />
            </span>
            <p className="font-heading text-sm font-extrabold text-white md:text-base">
              One <span className="text-brand-lime">workflow.</span> Every car. Consistently{" "}
              <span className="text-brand-lime">better.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ListingGapSection;
