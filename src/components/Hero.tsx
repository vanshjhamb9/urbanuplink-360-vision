import { useEffect, useRef, useState } from "react";
import { Box, Camera, Sparkles, Timer } from "lucide-react";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { assets } from "@/lib/assets";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const features = [
  { icon: Camera, label: "No DSLR or Turntable Required" },
  { icon: Sparkles, label: "AI Studio Backgrounds" },
  { icon: Box, label: "Interactive 360° Experience" },
  { icon: Timer, label: "Ready in Minutes" },
];

const heroImageClass =
  "h-full w-full object-cover object-center md:object-[75%_center]";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const smoothProgress = (value: number) => {
  const eased = clamp(value);
  return eased * eased * (3 - 2 * eased);
};

type HeroPinState = "before" | "active" | "after";

const getHeroScrollState = (section: HTMLElement | null) => {
  if (typeof window === "undefined" || !section) {
    return { progress: 0, pinState: "before" as HeroPinState };
  }

  const scrollableDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
  const rawProgress = (window.scrollY - section.offsetTop) / scrollableDistance;
  const pinState: HeroPinState =
    rawProgress < 0 ? "before" : rawProgress >= 1 ? "after" : "active";

  return {
    progress: clamp(rawProgress),
    pinState,
  };
};

const AnimatedHeroBackground = ({ progress }: { progress: number }) => {
  const reducedMotion = useReducedMotion();
  const revealProgress = reducedMotion ? 1 : smoothProgress(progress);
  const sweepProgress = smoothProgress(progress);
  const sweepOpacity =
    revealProgress > 0 && revealProgress < 1
      ? 0.7 * (1 - Math.abs(revealProgress - 0.5) / 0.5)
      : 0;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <picture className="block h-full w-full">
        <source media="(min-width: 768px)" srcSet={assets.hero.outdoorDesktop} />
        <img
          src={assets.hero.outdoorMobile}
          alt=""
          className={heroImageClass}
          draggable={false}
        />
      </picture>

      <div
        className="absolute inset-0 overflow-hidden transition-opacity duration-500 will-change-opacity"
        style={{
          opacity: reducedMotion ? 1 : revealProgress,
        }}
      >
        <picture className="block h-full w-full">
          <source media="(min-width: 768px)" srcSet={assets.hero.studioDesktop} />
          <img
            src={assets.hero.studioMobile}
            alt=""
            className={heroImageClass}
            draggable={false}
          />
        </picture>
      </div>

      {!reducedMotion && (
        <div
          className="absolute inset-y-0 left-0 z-[1] w-20 bg-gradient-to-r from-transparent via-brand-lime/25 to-transparent blur-sm will-change-transform"
          style={{
            opacity: sweepOpacity,
            transform: `translate3d(${-15 + sweepProgress * 120}vw, 0, 0)`,
          }}
        />
      )}
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pinState, setPinState] = useState<HeroPinState>("before");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nextState = getHeroScrollState(sectionRef.current);
        setScrollProgress(nextState.progress);
        setPinState(nextState.pinState);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const heroFrameClass =
    !reducedMotion && pinState === "active"
      ? "fixed inset-0 z-10 h-[100svh] overflow-hidden"
      : !reducedMotion && pinState === "after"
        ? "absolute inset-x-0 bottom-0 z-10 h-[100svh] overflow-hidden"
        : "relative z-10 h-[100svh] overflow-hidden";

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-brand-black"
      style={{ height: reducedMotion ? "100svh" : "220svh" }}
      aria-labelledby="hero-heading"
    >
      <div className={heroFrameClass}>
        <AnimatedHeroBackground progress={scrollProgress} />

        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/88 to-brand-black/10 md:via-brand-black/58 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/78 via-brand-black/20 to-brand-black/28 md:from-brand-black/70 md:via-transparent md:to-brand-black/18" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_45%,rgba(10,10,10,0.82)_0%,transparent_58%)]" />
          <div className="absolute inset-0 noise-overlay opacity-15 md:opacity-20" />
        </div>

        <div className="pointer-events-none absolute -left-24 top-1/3 z-[1] hidden h-80 w-80 rounded-full bg-brand-lime/8 blur-[100px] md:block" />

        <div className="container relative z-10 mx-auto flex h-screen items-end px-4 pb-12 pt-24 sm:items-center sm:pb-16 sm:pt-28 md:px-6 lg:pt-32">
          <div className="relative w-full max-w-xl lg:max-w-2xl">
            <div className="accent-line mb-4 md:mb-6" />

            <h1
              id="hero-heading"
              className="font-heading text-[1.875rem] font-extrabold leading-[1.05] tracking-tight text-brand-lime sm:text-4xl md:text-5xl lg:text-[3.75rem]"
            >
              Turn Every Vehicle Into Your Best Salesperson.
            </h1>

            <p className="mt-4 max-w-[95%] text-sm leading-relaxed text-white/90 sm:mt-5 sm:max-w-md sm:text-base md:mt-6 md:max-w-lg md:text-lg">
              Capture professional vehicle experiences using only your smartphone.
              AI transforms every vehicle into showroom-quality inventory that
              attracts more buyers and sells faster.
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

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <GlowButton href="/contact" variant="filled" className="w-full sm:w-auto">
                Book a Demo
              </GlowButton>
              <GlowButton href="/learn-more" className="w-full sm:w-auto">
                See it in Action
              </GlowButton>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-brand-black to-transparent sm:h-32"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
