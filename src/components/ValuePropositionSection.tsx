import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { valueCopy } from "@/lib/homepageContent";

const ValuePropositionSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden border-y border-white/8 bg-brand-black section-shell"
      aria-labelledby="value-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-45" />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow={valueCopy.eyebrow}
            title={
              <span id="value-heading">
                {valueCopy.title}{" "}
                <span className="text-brand-lime">{valueCopy.titleAccent}</span>
              </span>
            }
            description={valueCopy.description}
          />
        </motion.div>

        <div className="section-body grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {valueCopy.benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-2xl border border-brand-lime/15 bg-brand-lime/[0.04] p-4 md:p-5"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-brand-lime/25 bg-brand-lime/10">
                <benefit.icon className="h-5 w-5 text-brand-lime" />
              </span>
              <h3 className="font-heading text-base font-extrabold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{benefit.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
