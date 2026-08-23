import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { impactCopy } from "@/lib/homepageContent";

const BusinessImpactSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden bg-brand-black section-shell"
      aria-labelledby="impact-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-35" />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow={impactCopy.eyebrow}
            title={
              <span id="impact-heading">
                {impactCopy.title}{" "}
                <span className="text-brand-lime">{impactCopy.titleAccent}</span>
              </span>
            }
            description={impactCopy.description}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-body mx-auto max-w-xl text-center text-sm font-semibold uppercase tracking-[0.16em] text-white/50"
        >
          {impactCopy.intro}
        </motion.p>

        <div className="section-body mx-auto max-w-3xl space-y-2.5 md:space-y-3">
          {impactCopy.shifts.map((shift, index) => (
            <motion.div
              key={shift.from}
              initial={{ opacity: 0, x: -16 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.06 }}
              className="flex flex-col items-stretch gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:flex-row sm:items-center sm:gap-4 sm:px-5 sm:py-4"
            >
              <span className="flex-1 text-sm text-white/55 sm:text-base">{shift.from}</span>
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-brand-lime sm:block" aria-hidden="true" />
              <span className="flex-1 font-heading text-sm font-extrabold text-brand-lime sm:text-right sm:text-base">
                {shift.to}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
