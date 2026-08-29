import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { IndustryProcessStep } from "@/lib/industries";

interface IndustryProcessRailProps {
  steps: IndustryProcessStep[];
  compact?: boolean;
}

export function IndustryProcessRail({
  steps,
  compact = false,
}: IndustryProcessRailProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
      <div
        className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${
          steps.length >= 5
            ? "lg:grid-cols-5"
            : steps.length === 4
              ? "lg:grid-cols-4"
              : "lg:grid-cols-3"
        }`}
      >
        {steps.map((step, index) => (
          <motion.article
            key={`${step.title}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.035]"
          >
            <div
              className={`relative overflow-hidden border-b border-white/8 bg-white/5 ${
                compact ? "aspect-[16/10]" : "aspect-[4/3]"
              }`}
            >
              <picture>
                <source media="(max-width: 767px)" srcSet={step.imageMobile} />
                <img
                  src={step.imageDesktop}
                  alt={step.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-brand-lime/40 bg-brand-black/75 font-heading text-xs font-extrabold text-brand-lime backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-start gap-2">
                {step.icon ? (
                  <step.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                ) : null}
                <h4 className="font-heading text-sm font-extrabold leading-snug text-white sm:text-base">
                  {step.title}
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-white/65 sm:text-sm">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <span
                className="absolute -right-3 top-[28%] hidden font-heading text-3xl font-extrabold text-brand-lime/70 xl:inline"
                aria-hidden="true"
              >
                ›
              </span>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
