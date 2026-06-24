import { motion } from "framer-motion";
import { Clock, Target, Zap } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui-custom/BeforeAfterSlider";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { assets } from "@/lib/assets";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { icon: Zap, label: "Instant Processing", value: "< 30s" },
  { icon: Target, label: "Pixel Accuracy", value: "99.9%" },
  { icon: Clock, label: "Time Saved", value: "10x" },
];

const BackgroundRemovalShowcase = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand-black py-16 md:py-28"
      aria-labelledby="bg-removal-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-60" />
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="AI-Powered Magic"
            title={
              <>
                Instant{" "}
                <span className="text-brand-lime">Background Removal</span>
              </>
            }
            description="See the transformation in real-time. Drag the slider to compare before and after — from outdoor capture to studio-grade presentation."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-10 max-w-5xl md:mt-14"
        >
          <div className="hidden md:block">
            <BeforeAfterSlider
              beforeSrc={assets.beforeAfter.beforeDesktop}
              afterSrc={assets.beforeAfter.afterDesktop}
              beforeLabel="Before"
              afterLabel="After"
              orientation="horizontal"
              aspectClass="aspect-video"
            />
          </div>
          <div className="md:hidden">
            <BeforeAfterSlider
              beforeSrc={assets.beforeAfter.beforeMobile}
              afterSrc={assets.beforeAfter.afterMobile}
              beforeLabel="Before"
              afterLabel="After"
              orientation="horizontal"
              aspectClass="aspect-[4/3]"
              className="rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:mt-12"
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass-card flex flex-row items-center gap-4 rounded-xl p-4 sm:flex-col sm:items-center sm:p-5 sm:text-center"
            >
              <Icon className="h-6 w-6 shrink-0 text-brand-lime sm:mb-0" />
              <div className="sm:mt-0">
                <p className="font-heading text-xl font-extrabold text-white sm:text-2xl">
                  {value}
                </p>
                <p className="mt-0.5 text-xs text-muted-brand sm:mt-1 sm:text-sm">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BackgroundRemovalShowcase;
