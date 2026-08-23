import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { coreProductCopy } from "@/lib/homepageContent";

const CoreProductSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden bg-brand-black section-shell"
      aria-labelledby="core-product-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-35" />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionHeading
            eyebrow={coreProductCopy.eyebrow}
            title={
              <span id="core-product-heading">
                {coreProductCopy.title}{" "}
                <span className="text-brand-lime">{coreProductCopy.titleAccent}</span>
              </span>
            }
            description={coreProductCopy.description}
          />
          <p className="mt-5 font-heading text-lg font-extrabold text-white md:text-xl">
            {coreProductCopy.body}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            {coreProductCopy.subtext}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreProductSection;
