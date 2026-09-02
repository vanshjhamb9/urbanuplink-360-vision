import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { scaleCopy } from "@/lib/homepageContent";

const ScaleSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden border-y border-white/8 bg-brand-black section-shell"
      aria-labelledby="scale-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 section-glow opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <SectionHeading
            eyebrow={scaleCopy.eyebrow}
            title={
              <span id="scale-heading">
                {scaleCopy.title}{" "}
                <span className="text-brand-lime">{scaleCopy.titleAccent}</span>
              </span>
            }
            description={scaleCopy.description}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScaleSection;
