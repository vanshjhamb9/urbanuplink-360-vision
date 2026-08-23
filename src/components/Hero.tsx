import { useEffect, useRef, useState } from "react";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { assets } from "@/lib/assets";
import { heroCopy } from "@/lib/homepageContent";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const heroImageClass =
  "h-full w-full object-cover brightness-105 contrast-105 object-[center_42%] md:object-[78%_center] lg:object-[82%_center] xl:object-[76%_center]";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const smoothProgress = (value: number) => {
  const eased = clamp(value);
  return eased * eased * (3 - 2 * eased);
};

const HERO_TRANSITION_VH = 80;
const HERO_HOLD_VH = 0;
const HERO_SECTION_VH = 100 + HERO_TRANSITION_VH + HERO_HOLD_VH;

type HeroPinState = "before" | "active" | "after";

const getHeroScrollState = (section: HTMLElement | null) => {
  if (typeof window === "undefined" || !section) {
    return { progress: 0, pinState: "before" as HeroPinState };
  }

  const viewport = window.innerHeight || 1;
  const scrollableDistance = Math.max(section.offsetHeight - viewport, 1);
  const scrolled = window.scrollY - section.offsetTop;
  const rawProgress = scrolled / scrollableDistance;
  const pinState: HeroPinState =
    rawProgress < 0 ? "before" : rawProgress >= 1 ? "after" : "active";

  const transitionDistance = Math.max(
    (HERO_TRANSITION_VH / (HERO_TRANSITION_VH + HERO_HOLD_VH || 1)) *
      scrollableDistance,
    1,
  );

  return {
    progress: clamp(scrolled / transitionDistance),
    pinState,
  };
};

const AnimatedHeroBackground = ({ progress }: { progress: number }) => {
  const reducedMotion = useReducedMotion();
  const revealProgress = reducedMotion ? 1 : smoothProgress(progress);

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
        className="absolute inset-0 overflow-hidden transition-opacity duration-300 will-change-opacity"
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
      style={{ height: reducedMotion ? "100svh" : `${HERO_SECTION_VH}svh` }}
      aria-labelledby="hero-heading"
    >
      <div className={heroFrameClass}>
        <AnimatedHeroBackground progress={scrollProgress} />

        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/50 to-transparent md:via-brand-black/40 md:to-transparent lg:via-brand-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-brand-black/20 md:hidden" />
        </div>

        <div className="page-container-wide relative z-10 flex min-h-[100svh] items-end pb-10 pt-[4.5rem] sm:items-center sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-[4.75rem]">
          <div className="w-full max-w-xl lg:max-w-[34rem]">
            <h1
              id="hero-heading"
              className="text-balance font-heading text-[1.65rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-[2.35rem] lg:text-4xl"
            >
              {heroCopy.headline}{" "}
              <span className="text-brand-lime">{heroCopy.headlineAccent}</span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/78 sm:mt-5 sm:text-base lg:max-w-lg lg:text-lg">
              {heroCopy.description}
            </p>

            <p className="mt-3 text-xs font-semibold tracking-wide text-brand-lime/90 sm:text-sm">
              {heroCopy.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2.5 sm:mt-7 lg:gap-x-5">
              {heroCopy.features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-white/88 sm:text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-brand-black/45 sm:h-9 sm:w-9">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-white sm:h-4 sm:w-4" strokeWidth={2} />
                  </span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-7 sm:flex-row sm:items-center">
              <GlowButton href={heroCopy.primaryHref} variant="filled" className="w-full sm:w-auto">
                {heroCopy.primaryCta}
              </GlowButton>
              <GlowButton href={heroCopy.secondaryHref} className="w-full sm:w-auto">
                {heroCopy.secondaryCta}
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
