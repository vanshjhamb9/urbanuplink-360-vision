import { motion } from "framer-motion";
import { Clock, Target, Zap } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui-custom/BeforeAfterSlider";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { assets } from "@/lib/assets";
import { backgroundRemovalCopy } from "@/lib/homepageContent";

const statIcons = [Zap, Target, Clock];

const BackgroundRemovalShowcase = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="background-removal"
      className="relative z-20 overflow-hidden border-y border-white/8 bg-brand-black section-shell"
      aria-labelledby="bg-removal-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-45" />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow={backgroundRemovalCopy.eyebrow}
            title={
              <span id="bg-removal-heading">
                {backgroundRemovalCopy.title}{" "}
                <span className="text-brand-lime">{backgroundRemovalCopy.titleAccent}</span>
              </span>
            }
            description={backgroundRemovalCopy.description}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="section-body"
        >
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-lime">
            {backgroundRemovalCopy.vehicleLabel} · Live comparison
          </p>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3">
            <div className="hidden md:block">
              <BeforeAfterSlider
                beforeSrc={assets.beforeAfter.beforeDesktop}
                afterSrc={assets.beforeAfter.afterDesktop}
                beforeLabel={backgroundRemovalCopy.beforeLabel}
                afterLabel={backgroundRemovalCopy.afterLabel}
                orientation="horizontal"
                aspectClass="aspect-[16/10]"
                objectPosition="center center"
              />
            </div>
            <div className="md:hidden">
              <BeforeAfterSlider
                beforeSrc={assets.beforeAfter.beforeMobile}
                afterSrc={assets.beforeAfter.afterMobile}
                beforeLabel={backgroundRemovalCopy.beforeLabel}
                afterLabel={backgroundRemovalCopy.afterLabel}
                orientation="horizontal"
                aspectClass="aspect-[4/3]"
                objectPosition="center center"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="section-body grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
        >
          {backgroundRemovalCopy.stats.map(({ label, value }, index) => {
            const Icon = statIcons[index] ?? Zap;
            return (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:flex-col sm:items-center sm:p-5 sm:text-center"
              >
                <Icon className="h-5 w-5 shrink-0 text-brand-lime" />
                <div>
                  <p className="font-heading text-xl font-extrabold text-white">{value}</p>
                  <p className="mt-0.5 text-xs text-white/55 sm:text-sm">{label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BackgroundRemovalShowcase;
