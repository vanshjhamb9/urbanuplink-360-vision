import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { shiftCopy } from "@/lib/homepageContent";

const TransformationSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="the-shift"
      className="relative z-20 overflow-hidden border-y border-white/8 bg-brand-black section-shell"
      aria-labelledby="shift-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-40" />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow={shiftCopy.eyebrow}
            title={
              <span id="shift-heading">
                {shiftCopy.title}{" "}
                <span className="text-brand-lime">{shiftCopy.titleAccent}</span>
              </span>
            }
            description={shiftCopy.description}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-center font-heading text-lg font-extrabold text-brand-lime md:text-xl"
        >
          {shiftCopy.tagline}
        </motion.p>

        <div className="section-body grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {shiftCopy.pillars.map((pillar, index) => (
            <motion.article
              key={pillar.label}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + index * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center md:p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-lime/8 via-transparent to-brand-blue/5" />
              <div className="relative">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-lime/30 bg-brand-lime/10 font-heading text-sm font-extrabold text-brand-lime">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg font-extrabold text-white">{pillar.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{pillar.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
