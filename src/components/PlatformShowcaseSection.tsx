import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  channelTiles,
  platformShowcaseCopy,
  sourceVehicle,
  type ChannelTile,
} from "@/lib/platformShowcaseContent";

function ChannelChrome({ tile }: { tile: ChannelTile }) {
  if (tile.format === "story") {
    return (
      <>
        <div className="absolute inset-x-0 top-0 z-20 flex justify-center pt-2">
          <span className="h-1 w-10 rounded-full bg-white/25" />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-brand-black/80 to-transparent px-3 pb-3 pt-8">
          <p className="text-[10px] font-bold text-white">urbanuplink.com</p>
          <p className="text-[9px] text-white/50">Swipe up to explore</p>
        </div>
      </>
    );
  }

  if (tile.format === "square") {
    return (
      <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-2 border-b border-white/10 bg-brand-black/60 px-3 py-2 backdrop-blur-sm">
        <span className="h-6 w-6 rounded-full bg-gradient-to-br from-pink-500 to-orange-400" />
        <span className="text-[10px] font-semibold text-white">urbanuplink</span>
      </div>
    );
  }

  if (tile.format === "wide") {
    return (
      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-brand-black/90 via-brand-black/50 to-transparent px-4 pb-4 pt-12 sm:px-6 sm:pb-5">
        <p className="font-heading text-sm font-extrabold text-white sm:text-base">
          Certified SUV · 360° Enabled
        </p>
        <p className="mt-0.5 text-[10px] text-brand-lime sm:text-xs">Explore every angle online</p>
      </div>
    );
  }

  if (tile.format === "spin") {
    return (
      <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-lime/40 bg-brand-black/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-lime backdrop-blur-sm">
          <RotateCcw className="h-3 w-3" />
          Drag to rotate
        </span>
      </div>
    );
  }

  return null;
}

function ChannelImage({
  tile,
  className,
}: {
  tile: Pick<ChannelTile, "image" | "imageAlt" | "format" | "objectPosition" | "objectFit">;
  className?: string;
}) {
  const isListing = tile.format === "listing";
  const fit = tile.objectFit ?? (isListing ? "cover" : "contain");

  return (
    <div className={`relative overflow-hidden bg-[#0c0e10] ${className ?? ""}`}>
      <img
        src={tile.image}
        alt={tile.imageAlt}
        className={`absolute inset-0 h-full w-full brightness-110 contrast-105 ${
          fit === "contain" ? "object-contain p-1.5 sm:p-2" : "object-cover"
        } ${isListing ? "object-top" : ""}`}
        style={{ objectPosition: tile.objectPosition ?? "center center" }}
        loading="lazy"
      />
      {!isListing && <ChannelChrome tile={tile as ChannelTile} />}
      {isListing && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
      )}
    </div>
  );
}

function ChannelTileCard({
  tile,
  index,
  visible,
}: {
  tile: ChannelTile;
  index: number;
  visible: boolean;
}) {
  const isStory = tile.format === "story";
  const isWide = tile.format === "wide";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c0e] shadow-card transition-all duration-300 hover:border-brand-lime/30 hover:shadow-glow ${tile.className}`}
    >
      <div className="flex h-full min-h-[140px] flex-col">
        <div className={`relative flex-1 overflow-hidden ${isStory ? "mx-auto w-full max-w-[200px]" : ""}`}>
          <ChannelImage
            tile={tile}
            className={`h-full w-full ${
              isStory
                ? "aspect-[9/16] min-h-[220px]"
                : isWide
                  ? "aspect-[21/9] min-h-[120px]"
                  : "min-h-[160px] aspect-square sm:aspect-[4/3]"
            }`}
          />
        </div>

        <div className="border-t border-white/10 bg-brand-black/90 px-3 py-2.5 sm:px-4 sm:py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lime">
            {tile.label}
          </p>
          <p className="mt-0.5 text-xs text-white/50">{tile.subtitle}</p>
        </div>
      </div>
    </motion.article>
  );
}

const PlatformShowcaseSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden bg-brand-black section-shell"
      aria-labelledby="platform-showcase-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-30" />
      <div className="page-container">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-lime"
          >
            {platformShowcaseCopy.eyebrow}
          </motion.p>
          <motion.h2
            id="platform-showcase-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="font-heading text-2xl font-extrabold leading-tight text-white md:text-3xl"
          >
            {platformShowcaseCopy.title}{" "}
            <span className="text-brand-lime">{platformShowcaseCopy.titleAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base"
          >
            {platformShowcaseCopy.description}
          </motion.p>
        </div>

        <div className="section-body grid auto-rows-[minmax(108px,auto)] grid-flow-dense grid-cols-12 gap-2.5 sm:gap-3 md:gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.12 }}
            className="col-span-12 overflow-hidden rounded-2xl border border-brand-lime/25 bg-[#0a0c0e] shadow-glow lg:col-span-5 lg:row-span-4"
          >
            <div className="border-b border-white/10 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-lime">
                One source capture
              </p>
              <p className="mt-0.5 text-xs text-white/50">Same vehicle · Same quality · Every output</p>
            </div>
            <ChannelImage
              tile={{
                image: sourceVehicle.image,
                imageAlt: sourceVehicle.alt,
                format: "square",
                objectPosition: sourceVehicle.objectPosition,
                objectFit: sourceVehicle.objectFit,
              }}
              className="aspect-[4/3] min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]"
            />
          </motion.div>

          {channelTiles.map((tile, index) => (
            <ChannelTileCard key={tile.id} tile={tile} index={index} visible={visible} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="section-body text-center font-heading text-base font-extrabold text-white/75 md:text-lg"
        >
          {platformShowcaseCopy.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <GlowButton href={platformShowcaseCopy.ctaHref} variant="filled">
            {platformShowcaseCopy.cta}
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformShowcaseSection;
