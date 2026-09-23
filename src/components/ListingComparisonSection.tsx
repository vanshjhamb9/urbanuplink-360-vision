import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  afterGrid,
  beforeGrid,
  listingComparisonCopy,
  type ComparisonPhoto,
} from "@/lib/listingComparisonContent";
import { cn } from "@/lib/utils";

function PhotoCell({
  photo,
  variant,
  className,
}: {
  photo: ComparisonPhoto;
  variant: "before" | "after";
  className?: string;
}) {
  const isAfter = variant === "after";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#0e1012]",
        className,
      )}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          isAfter ? "brightness-[1.03] contrast-[1.02]" : "saturate-[0.88] contrast-[0.96]",
        )}
        style={{ objectPosition: photo.objectPosition ?? "center center" }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function PhotoGrid({ variant, photos }: { variant: "before" | "after"; photos: ComparisonPhoto[] }) {
  const [hero, a, b, c, d] = photos;

  const cell = (photo: ComparisonPhoto, className: string) => (
    <PhotoCell photo={photo} variant={variant} className={className} />
  );

  /**
   * Aspect-matched mosaic:
   * hero @ 5:4 (800×640) on top, four 16:9 thumbs (640×360) below.
   * object-cover fills each cell without letterboxing or heavy crop.
   */
  return (
    <div className="flex flex-col gap-2 sm:gap-2.5">
      {cell(hero, "aspect-[5/4] w-full rounded-xl sm:rounded-2xl")}
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
        {cell(a, "aspect-video rounded-lg sm:rounded-xl")}
        {cell(b, "aspect-video rounded-lg sm:rounded-xl")}
        {cell(c, "aspect-video rounded-lg sm:rounded-xl")}
        {cell(d, "aspect-video rounded-lg sm:rounded-xl")}
      </div>
    </div>
  );
}

function ComparisonCard({
  variant,
  visible,
  delay,
}: {
  variant: "before" | "after";
  visible: boolean;
  delay: number;
}) {
  const config =
    variant === "before" ? listingComparisonCopy.before : listingComparisonCopy.after;
  const Icon = config.icon;
  const isAfter = variant === "after";
  const photos = variant === "before" ? beforeGrid : afterGrid;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={`relative flex h-full min-h-0 flex-col rounded-2xl border p-4 sm:rounded-3xl sm:p-5 ${
        isAfter
          ? "border-brand-lime/30 bg-gradient-to-b from-brand-lime/[0.06] to-[#0a0c0e] shadow-glow"
          : "border-white/10 bg-[#0a0c0e]"
      }`}
    >
      {isAfter && "badge" in config && (
        <span className="absolute -right-0.5 top-4 z-10 rotate-3 rounded-md border border-brand-lime/50 bg-brand-lime px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-black shadow-lg sm:text-xs">
          {config.badge}
        </span>
      )}

      <header className="mb-4 flex shrink-0 items-center gap-2.5">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
            isAfter
              ? "border-brand-lime/40 bg-brand-lime/15 text-brand-lime"
              : "border-white/15 bg-white/[0.04] text-white/50"
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <h3
          className={`text-xs font-extrabold uppercase tracking-[0.16em] sm:text-sm ${
            isAfter ? "text-brand-lime" : "text-white/45"
          }`}
        >
          {config.label}
        </h3>
      </header>

      <PhotoGrid variant={variant} photos={photos} />

      <p
        className={`mt-4 shrink-0 text-center text-xs font-semibold sm:text-sm ${
          isAfter ? "text-brand-lime" : "text-white/40"
        }`}
      >
        {config.caption}
      </p>
    </motion.article>
  );
}

const ListingComparisonSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden border-y border-white/8 bg-brand-black section-shell"
      aria-labelledby="listing-comparison-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-35" />
      <div className="page-container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="See the difference"
            title={
              <span id="listing-comparison-heading">
                Lot photos vs.{" "}
                <span className="text-brand-lime">listings buyers explore.</span>
              </span>
            }
            description="The same vehicle deserves more than flat yard photos. Urban Uplink turns a simple capture into a premium, multi-angle presentation — no studio required."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-body flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {listingComparisonCopy.badges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/75 sm:text-sm"
            >
              <badge.icon className="h-3.5 w-3.5 shrink-0 text-brand-lime" />
              {badge.label}
            </span>
          ))}
        </motion.div>

        <div className="section-body grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <ComparisonCard variant="before" visible={visible} delay={0.15} />
          <ComparisonCard variant="after" visible={visible} delay={0.22} />
        </div>
      </div>
    </section>
  );
};

export default ListingComparisonSection;
