import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  channelTiles,
  marketplaceTile,
  platformShowcaseCopy,
  sourceVehicle,
  websiteTile,
  type ChannelTile,
} from "@/lib/platformShowcaseContent";

const CARD_SHELL =
  "overflow-hidden rounded-2xl border border-white/10 bg-[#080a0c]";

/** Shared preview height — every channel card uses the same shell */
const MEDIA_H = "h-[228px]";
const CHANNEL_STAGE = `flex h-[240px] items-center justify-center overflow-hidden px-2`;

function PlatformBadge({
  icon,
  gradient,
}: {
  icon: string;
  gradient: string;
}) {
  return (
    <span
      className={`inline-flex h-6 min-w-[1.75rem] shrink-0 items-center justify-center rounded-md bg-gradient-to-br ${gradient} px-1.5 text-[9px] font-extrabold text-white`}
    >
      {icon}
    </span>
  );
}

function PlatformHeader({
  icon,
  gradient,
  label,
  subtitle,
}: {
  icon: string;
  gradient: string;
  label: string;
  subtitle: string;
}) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <PlatformBadge icon={icon} gradient={gradient} />
      <div className="min-w-0">
        <p className="truncate text-xs font-bold text-white">{label}</p>
        <p className="truncate text-[10px] text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}

function FrameImage({
  src,
  alt,
  objectPosition,
}: {
  src: string;
  alt: string;
  objectPosition: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition }}
      loading="lazy"
      draggable={false}
    />
  );
}

function FeedFrame({ tile }: { tile: ChannelTile }) {
  return (
    <div
      className={`${MEDIA_H} flex w-auto max-w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0a0c0e] aspect-square`}
    >
      <div className="flex shrink-0 items-center gap-1.5 border-b border-white/8 px-2 py-1">
        <span className="h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-orange-400" />
        <span className="text-[7px] font-semibold text-white/65">urbanuplink</span>
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <FrameImage
          src={tile.image}
          alt={tile.imageAlt}
          objectPosition={tile.objectPosition}
        />
      </div>
    </div>
  );
}

function PhoneFrame({ tile }: { tile: ChannelTile }) {
  return (
    <div
      className={`${MEDIA_H} w-auto max-w-full overflow-hidden rounded-[1.2rem] border-2 border-white/12 bg-[#0a0c0e] aspect-[9/16]`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <FrameImage
          src={tile.image}
          alt={tile.imageAlt}
          objectPosition={tile.objectPosition}
        />
      </div>
    </div>
  );
}

function BrowserFrame({ tile }: { tile: ChannelTile }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0c0e]">
      <div className="flex items-center gap-1 border-b border-white/8 bg-[#111] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
        <span className="ml-1 truncate text-[8px] text-white/35">dealer.urbanuplink.com</span>
      </div>
      <div className={`relative w-full overflow-hidden ${tile.aspectClass}`}>
        <FrameImage
          src={tile.image}
          alt={tile.imageAlt}
          objectPosition={tile.objectPosition}
        />
      </div>
    </div>
  );
}

function ChannelMedia({ tile }: { tile: ChannelTile }) {
  switch (tile.frame) {
    case "feed":
      return <FeedFrame tile={tile} />;
    case "phone":
      return <PhoneFrame tile={tile} />;
    case "browser":
      return <BrowserFrame tile={tile} />;
    default:
      return null;
  }
}

function MediaWell({
  src,
  alt,
  aspectClass,
  objectFit,
  objectPosition,
}: {
  src: string;
  alt: string;
  aspectClass: string;
  objectFit: "cover" | "contain";
  objectPosition: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClass} ${
        objectFit === "contain" ? "bg-[#060809]" : ""
      }`}
    >
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${
          objectFit === "contain" ? "object-contain" : "object-cover"
        }`}
        style={{ objectPosition }}
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

function ChannelCard({
  tile,
  index,
  visible,
  orderClass,
}: {
  tile: ChannelTile;
  index: number;
  visible: boolean;
  orderClass?: string;
}) {
  const isWebsite = tile.id === "website";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.12 + index * 0.05 }}
      className={`min-w-0 overflow-hidden ${isWebsite ? "col-span-12" : "col-span-6 lg:col-span-3"} ${orderClass ?? ""}`}
    >
      <PlatformHeader
        icon={tile.platformIcon}
        gradient={tile.platformColor}
        label={tile.label}
        subtitle={tile.subtitle}
      />
      <div className={`${CARD_SHELL} ${isWebsite ? "p-0" : CHANNEL_STAGE}`}>
        <ChannelMedia tile={tile} />
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,241,53,0.06),transparent)]" />

      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow={platformShowcaseCopy.eyebrow}
            title={
              <span id="platform-showcase-heading">
                {platformShowcaseCopy.title}{" "}
                <span className="text-brand-lime">{platformShowcaseCopy.titleAccent}</span>
              </span>
            }
            description={platformShowcaseCopy.description}
          />
        </motion.div>

        <div className="section-body space-y-5 lg:space-y-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="min-w-0 overflow-hidden lg:col-span-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-6 items-center rounded-md bg-brand-lime/15 px-2 text-[9px] font-bold uppercase tracking-widest text-brand-lime">
                  Source
                </span>
                <p className="text-xs font-bold text-white">One capture</p>
              </div>
              <div className={`${CARD_SHELL} border-brand-lime/20`}>
                <MediaWell
                  src={sourceVehicle.image}
                  alt={sourceVehicle.alt}
                  aspectClass="aspect-[16/10]"
                  objectFit={sourceVehicle.objectFit}
                  objectPosition={sourceVehicle.objectPosition}
                />
                <div className="flex items-center justify-between border-t border-white/8 px-4 py-2.5">
                  <p className="text-[11px] text-white/50">Studio master file</p>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-brand-lime">
                    6 outputs <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.12 }}
              className="min-w-0 overflow-hidden lg:col-span-7"
            >
              <PlatformHeader
                icon="MP"
                gradient="from-brand-lime to-emerald-500"
                label={marketplaceTile.label}
                subtitle={marketplaceTile.subtitle}
              />
              <div className={CARD_SHELL}>
                <MediaWell
                  src={marketplaceTile.image}
                  alt={marketplaceTile.imageAlt}
                  aspectClass={marketplaceTile.aspectClass}
                  objectFit={marketplaceTile.objectFit}
                  objectPosition={marketplaceTile.objectPosition}
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-12 gap-4 lg:gap-5">
            {channelTiles.map((tile, index) => {
              const mobileOrder =
                tile.id === "instagram"
                  ? "order-1"
                  : tile.id === "story"
                    ? "order-2"
                    : tile.id === "whatsapp"
                      ? "order-3"
                      : "order-5";

              return (
                <ChannelCard
                  key={tile.id}
                  tile={tile}
                  index={index}
                  visible={visible}
                  orderClass={`${mobileOrder} lg:order-none`}
                />
              );
            })}

            <ChannelCard
              tile={websiteTile}
              index={channelTiles.length}
              visible={visible}
              orderClass="order-4 lg:order-none"
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="section-body mt-8 text-center font-heading text-base font-extrabold text-white/75 md:text-lg"
        >
          {platformShowcaseCopy.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
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
