import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { problemCopy } from "@/lib/homepageContent";

const PainPointsSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden bg-brand-black section-shell"
      aria-labelledby="pain-points-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-50" />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow={problemCopy.eyebrow}
            title={
              <span id="pain-points-heading">
                {problemCopy.title}{" "}
                <span className="text-brand-lime">{problemCopy.titleAccent}</span>
              </span>
            }
            description={problemCopy.intro}
          />
        </motion.div>

        <div className="section-body grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-4">
          {problemCopy.painPoints.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04]">
                <point.icon className="h-5 w-5 text-white/80" />
              </span>
              <h3 className="font-heading text-base font-extrabold text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{point.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="section-body text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
            {problemCopy.closing}
          </p>
          <p className="mt-2 font-heading text-xl font-extrabold text-brand-lime md:text-2xl">
            {problemCopy.closingAccent}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
