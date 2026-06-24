import { motion } from "framer-motion";
import { Camera, Shield, Share2, Sparkles, RotateCw, Wand2 } from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    number: "①",
    title: "Capture",
    description: "Quick mobile capture anywhere.",
    icon: Camera,
  },
  {
    number: "②",
    title: "AI Background Replacement",
    description: "Remove distractions. Add studio or branded environments.",
    icon: Wand2,
  },
  {
    number: "③",
    title: "Enhance & Style",
    description: "AI enhances lighting, reflections & clarity.",
    icon: Sparkles,
  },
  {
    number: "④",
    title: "360° Interactive Experience",
    description: "Let buyers explore every angle.",
    icon: RotateCw,
  },
  {
    number: "⑤",
    title: "Publish Everywhere",
    description: "One click to marketplaces, website & social channels.",
    icon: Share2,
  },
];

const ProcessSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand-black py-16 md:py-28"
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
                Images That Sell.{" "}
                <span className="text-brand-lime">Results That Scale.</span>
              </>
            }
            description="From quick capture to everywhere you sell—our AI-powered platform delivers showroom-quality images that drive more clicks and more sales."
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
              <div className="mb-3 flex h-24 items-center justify-center rounded-lg bg-white/5 sm:mb-4 sm:h-32 sm:rounded-xl">
                <step.icon className="h-8 w-8 text-brand-lime transition-transform duration-500 group-hover:scale-110 sm:h-10 sm:w-10" />
              </div>
              <p className="font-heading text-base font-extrabold leading-snug text-white sm:text-lg">
                {step.number} {step.title}
              </p>
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
            Secure. Fast. Scalable. Built for dealerships.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
