import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { productWorkflowCopy, productWorkflowSteps } from "@/lib/productWorkflow";

const ProductWorkflowSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative z-20 overflow-hidden bg-brand-black section-shell"
      aria-labelledby="product-workflow-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-60" />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow={productWorkflowCopy.eyebrow}
            title={
              <span id="product-workflow-heading">
                {productWorkflowCopy.title}{" "}
                <span className="text-brand-lime">{productWorkflowCopy.titleAccent}</span>
              </span>
            }
          />
        </motion.div>

        <div className="section-body grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          {productWorkflowSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group relative overflow-visible rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-3 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-lime/40 sm:p-4"
            >
              <div className="mb-3 flex min-h-[3rem] items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-lime bg-brand-black font-heading text-sm font-extrabold text-brand-lime shadow-[0_0_18px_rgba(201,241,53,0.22)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-sm font-extrabold uppercase leading-tight tracking-wide text-white">
                  {step.title}
                </h3>
              </div>

              <div className="relative mb-3 h-32 overflow-hidden rounded-xl border border-white/8 bg-white/5 sm:mb-4 sm:h-36">
                <picture>
                  <source media="(max-width: 767px)" srcSet={step.imageMobile} />
                  <img
                    src={step.imageDesktop}
                    alt={step.imageAlt}
                    className="h-full w-full object-cover brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: step.objectPosition ?? "center center" }}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-black/55 to-transparent" />
              </div>

              <div className="flex items-start gap-3">
                <step.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
                <p className="text-xs leading-relaxed text-white/72">{step.description}</p>
              </div>

              {index < productWorkflowSteps.length - 1 && (
                <span
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 font-heading text-3xl font-extrabold text-brand-lime xl:inline"
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="section-body text-center font-heading text-base font-extrabold text-brand-lime md:text-lg"
        >
          {productWorkflowCopy.footer}
        </motion.p>
      </div>
    </section>
  );
};

export default ProductWorkflowSection;
