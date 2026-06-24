import { motion } from "framer-motion";
import { Box, Camera, Sparkles } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { BeforeAfterSlider } from "@/components/ui-custom/BeforeAfterSlider";
import { assets } from "@/lib/assets";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  { icon: Box, label: "No 3D Models" },
  { icon: Camera, label: "No Studio Setup" },
  { icon: Sparkles, label: "AI-Powered" },
];

const Hero = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>(0.05);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-brand-black"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="hidden h-full md:block">
          <BeforeAfterSlider
            beforeSrc={assets.hero.outdoorDesktop}
            afterSrc={assets.hero.studioDesktop}
            beforeLabel="Outdoor"
            afterLabel="Studio"
            orientation="vertical"
            variant="hero"
            objectPosition="right"
            className="h-full min-h-[100svh]"
          />
        </div>
        <div className="h-full md:hidden">
          <BeforeAfterSlider
            beforeSrc={assets.hero.outdoorMobile}
            afterSrc={assets.hero.studioMobile}
            beforeLabel="Outdoor"
            afterLabel="Studio"
            orientation="vertical"
            variant="hero"
            objectPosition="center"
            className="h-full min-h-[100svh]"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-brand-black/40 md:via-brand-black/75 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/50 to-brand-black/60 md:via-brand-black/25 md:to-brand-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_45%,rgba(10,10,10,0.98)_0%,transparent_60%)]" />
        <div className="absolute inset-0 noise-overlay opacity-25 md:opacity-30" />
      </div>

      <div className="pointer-events-none absolute -left-24 top-1/3 z-[1] hidden h-80 w-80 rounded-full bg-brand-lime/8 blur-[100px] md:block" />

      <div className="container relative z-10 mx-auto flex min-h-[100svh] items-end px-4 pb-12 pt-24 sm:items-center sm:pb-16 sm:pt-28 md:px-6 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xl lg:max-w-2xl"
        >
          <Logo size="sm" className="mb-5 md:mb-8" showTagline={false} />

          <div className="accent-line mb-4 md:mb-6" />

          <h1
            id="hero-heading"
            className="font-heading text-[1.875rem] font-extrabold leading-[1.05] tracking-tight text-brand-lime sm:text-4xl md:text-5xl lg:text-[3.75rem]"
          >
            Real 360° Vehicle Experiences
          </h1>

          <p className="mt-4 max-w-[95%] text-sm leading-relaxed text-white/90 sm:mt-5 sm:max-w-md sm:text-base md:mt-6 md:max-w-lg md:text-lg">
            Capture showroom-quality interactive car experiences using just your
            smartphone and AI-powered imaging.
          </p>

          <ul className="mt-6 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2 md:mt-8 md:gap-x-4">
            {features.map(({ icon: Icon, label }, index) => (
              <li key={label} className="flex items-center gap-2 text-sm text-brand-lime">
                {index > 0 && (
                  <span className="hidden text-brand-lime/35 sm:inline" aria-hidden="true">
                    •
                  </span>
                )}
                <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-brand-black to-transparent sm:h-32"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
