import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ResponsiveImage } from "@/components/ui-custom/ResponsiveImage";
import { cn } from "@/lib/utils";

export interface UseCaseBannerProps {
  id: string;
  headlineWhite: string;
  headlineAccent: string;
  description: string;
  features: { icon: React.ElementType; label: string }[];
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
}

export function UseCaseBanner({
  id,
  headlineWhite,
  headlineAccent,
  description,
  features,
  imageDesktop,
  imageMobile,
  imageAlt,
}: UseCaseBannerProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className="relative z-20 min-h-[88svh] overflow-hidden bg-brand-black md:min-h-[72vh] lg:min-h-[85vh]"
      aria-labelledby={`${id}-heading`}
    >
      <div className="absolute inset-0">
        <ResponsiveImage
          desktopSrc={imageDesktop}
          mobileSrc={imageMobile}
          alt={imageAlt}
          loading="lazy"
          imgClassName="object-[center_20%] brightness-110 contrast-110 saturate-110 md:object-center"
        />
      </div>

      {/* Keep text readable on the left while leaving right-side visuals clear. */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/62 to-transparent md:via-brand-black/40 md:to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/55 via-brand-black/10 to-transparent md:from-brand-black/35 md:via-transparent md:to-transparent"
        aria-hidden="true"
      />

      <div
        className={cn(
          "container relative mx-auto flex px-4 md:px-6",
          "min-h-[88svh] items-end pb-10 pt-28",
          "md:min-h-[72vh] md:items-center md:py-20",
          "lg:min-h-[85vh]",
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-xl text-left lg:max-w-2xl"
        >
          <div className="accent-line mb-4 md:mb-6" />

          <h2
            id={`${id}-heading`}
            className="font-heading text-2xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-3xl md:text-[2.75rem] lg:text-5xl"
          >
            {headlineWhite}
            <br />
            <span className="text-brand-lime">{headlineAccent}</span>
          </h2>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:max-w-lg sm:text-base md:mt-5 md:text-lg">
            {description}
          </p>

          <ul className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3 md:mt-8 md:gap-x-7">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-lime/30 bg-brand-black/60 backdrop-blur-sm sm:h-10 sm:w-10">
                  <Icon className="h-3.5 w-3.5 text-brand-lime sm:h-4 sm:w-4" />
                </span>
                <span className="text-xs font-medium text-white sm:text-sm">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
