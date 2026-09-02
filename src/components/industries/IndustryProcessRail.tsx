import { ChannelIconRow } from "@/components/ui-custom/ChannelIconRow";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { IndustryProcessStep } from "@/lib/industries";
import { cn } from "@/lib/utils";

interface IndustryProcessRailProps {
  steps: IndustryProcessStep[];
  compact?: boolean;
}

const gridColsClass = (count: number) => {
  if (count >= 5) return "sm:grid-cols-2 lg:grid-cols-5";
  if (count === 4) return "sm:grid-cols-2 lg:grid-cols-4";
  return "sm:grid-cols-2 lg:grid-cols-3";
};

export function IndustryProcessRail({
  steps,
  compact = false,
}: IndustryProcessRailProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
      <div
        className={cn(
          "grid grid-cols-1 items-stretch gap-4 sm:gap-5",
          gridColsClass(steps.length),
        )}
      >
        {steps.map((step, index) => (
          <motion.article
            key={`${step.title}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.035]"
          >
            <div
              className={cn(
                "relative shrink-0 overflow-hidden border-b border-white/8 bg-[#0a0c0e]",
                compact ? "aspect-[16/10]" : "aspect-[16/10]",
              )}
            >
              <picture>
                <source media="(max-width: 767px)" srcSet={step.imageMobile} />
                <img
                  src={step.imageDesktop}
                  alt={step.title}
                  className="absolute inset-0 h-full w-full object-cover brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: step.objectPosition ?? "center center" }}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-brand-lime/40 bg-brand-black/80 font-heading text-xs font-extrabold text-brand-lime backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <div className="mb-3 flex min-h-[2.75rem] items-start gap-2">
                {step.icon ? (
                  <step.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                ) : null}
                <h4 className="font-heading text-sm font-extrabold leading-snug text-white sm:text-[0.9375rem]">
                  {step.title}
                </h4>
              </div>

              <p className="flex-1 text-xs leading-relaxed text-white/65 sm:text-sm">
                {step.description}
              </p>

              <div className="mt-4 min-h-[5.5rem]">
                {step.showChannelIcons ? (
                  <ChannelIconRow className="gap-1.5" size="sm" />
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
