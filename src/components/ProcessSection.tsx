import { motion } from "framer-motion";
import { Camera, Shield, Share2, Sparkles, RotateCw, Wand2 } from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { assets } from "@/lib/assets";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "Capture vehicles using any modern smartphone with guided photography.",
    icon: Camera,
    image: assets.useCases.marketplace.process[0],
  },
  {
    number: "02",
    title: "AI Background Replacement",
    description:
      "Automatically replace distracting backgrounds with professional studio environments.",
    icon: Wand2,
    image: assets.useCases.marketplace.process[1],
  },
  {
    number: "03",
    title: "Enhance & Style",
    description:
      "Optimize lighting, reflections, alignment and image quality automatically.",
    icon: Sparkles,
    image: assets.useCases.marketplace.process[2],
  },
  {
    number: "04",
    title: "360° Interactive Experience",
    description:
      "Create interactive vehicle experiences that keep buyers engaged longer.",
    icon: RotateCw,
    image: assets.useCases.marketplace.process[3],
  },
  {
    number: "05",
    title: "Publish Everywhere",
    description:
      "Publish to your website, marketplaces and social channels with one workflow.",
    icon: Share2,
    image: assets.useCases.marketplace.process[4],
  },
];

const ProcessSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden bg-brand-black py-16 md:py-28"
      aria-labelledby="process-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow" />
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Our 5-Step Process"
            title={
              <>
                From Smartphone to{" "}
                <span className="text-brand-lime">Marketplace in Minutes.</span>
              </>
            }
            description="Capture once. Publish everywhere. Sell faster."
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-card p-4 transition-all duration-500 hover:-translate-y-1 hover:border-brand-lime/40 hover:shadow-glow sm:rounded-2xl sm:p-5"
            >
              <div className="relative mb-3 h-24 overflow-hidden rounded-lg bg-white/5 sm:mb-4 sm:h-32 sm:rounded-xl">
                <img
                  src={step.image}
                  alt={`${step.title} process preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/45 via-transparent to-transparent" />
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-brand-lime/30 bg-brand-black/70 text-brand-lime backdrop-blur">
                  <step.icon className="h-4 w-4" />
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lime/80">
                Step {step.number}
              </p>
              <h3 className="mt-1 font-heading text-base font-extrabold leading-snug text-white sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-brand sm:mt-2 sm:text-sm">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <span
                  className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-brand-lime lg:inline"
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="mb-5 text-base text-white sm:mb-6 sm:text-lg">
            Ready to elevate your car images and boost your sales?
          </p>
          <GlowButton href="/contact" className="w-full max-w-xs sm:w-auto">
            Get Started Now
          </GlowButton>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-brand sm:mt-6 sm:text-sm">
            <Shield className="h-4 w-4 shrink-0 text-brand-lime" />
            Built for dealerships. Trusted by automotive professionals. Ready to
            scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
