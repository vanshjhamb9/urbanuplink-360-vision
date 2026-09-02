import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { ChannelIconRow, ChannelPlatformBadge } from "@/components/ui-custom/ChannelIconRow";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  channelPreviews,
  marketplacePreview,
  platformShowcaseCopy,
  sourceVehicle,
  type OutputPreview,
} from "@/lib/platformShowcaseContent";
import { cn } from "@/lib/utils";

/** Shared image well — every card uses the same pixel height */
const CARD_IMAGE_WELL =
  "relative h-[168px] w-full shrink-0 overflow-hidden bg-[#060809] sm:h-[184px] md:h-[200px]";

function PreviewImage({
  src,
  alt,
  objectFit,
  objectPosition,
  className,
}: {
  src: string;
  alt: string;
  objectFit: "cover" | "contain";
  objectPosition: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      draggable={false}
      className={cn(
        "absolute inset-0 h-full w-full",
        objectFit === "contain" ? "object-contain" : "object-cover",
        className,
      )}
      style={{ objectPosition }}
    />
  );
}

function CardHeader({ preview }: { preview: OutputPreview }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-white/8 bg-white/[0.02] px-3 py-2.5 sm:px-4 sm:py-3">
      <ChannelPlatformBadge
        channelId={preview.channelId}
        gradient={preview.platformColor}
        fallbackLabel={preview.platformIcon}
      />
      <div className="min-w-0">
        <p className="truncate text-xs font-bold text-white sm:text-[0.8125rem]">
          {preview.label}
        </p>
        <p className="truncate text-[10px] text-white/45 sm:text-[11px]">{preview.subtitle}</p>
      </div>
    </div>
  );
}

function OutputCard({
  preview,
  visible,
  delay,
  className,
}: {
  preview: OutputPreview;
  visible: boolean;
  delay: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className={cn(
        "flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080a0c] shadow-card",
        className,
      )}
    >
      <CardHeader preview={preview} />
      <div className={CARD_IMAGE_WELL}>
        <PreviewImage
          src={preview.image}
          alt={preview.imageAlt}
          objectFit={preview.objectFit}
          objectPosition={preview.objectPosition}
        />
      </div>
    </motion.article>
  );
}

const PlatformShowcaseSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  const primaryChannels = channelPreviews.filter((c) => c.id !== "360" && c.id !== "website");
  const spinPreview = channelPreviews.find((c) => c.id === "360")!;
  const websitePreview = channelPreviews.find((c) => c.id === "website")!;

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="section-body overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-4 sm:p-5 lg:p-6"
        >
          {/* Row 1 — Source → Marketplace */}
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
            <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-brand-lime/25 bg-[#080a0c] shadow-card">
              <div className="flex items-center justify-between gap-3 border-b border-white/8 bg-brand-lime/[0.05] px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-6 items-center rounded-md bg-brand-lime/20 px-2 text-[9px] font-bold uppercase tracking-widest text-brand-lime">
                    Source
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white sm:text-sm">One capture</p>
                    <p className="text-[10px] text-white/45 sm:text-[11px]">Studio master file</p>
                  </div>
                </div>
                <span className="hidden items-center gap-1 text-[10px] font-semibold text-brand-lime sm:flex">
                  6 outputs <ArrowRight className="h-3 w-3" />
                </span>
              </div>
              <div className={CARD_IMAGE_WELL}>
                <PreviewImage
                  src={sourceVehicle.image}
                  alt={sourceVehicle.alt}
                  objectFit={sourceVehicle.objectFit}
                  objectPosition={sourceVehicle.objectPosition}
                />
              </div>
              <div className="flex items-center justify-between border-t border-white/8 px-4 py-2.5">
                <p className="text-[11px] text-white/50">Studio master file</p>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-brand-lime sm:hidden">
                  6 outputs <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </article>

            <OutputCard
              preview={marketplacePreview}
              visible={visible}
              delay={0.1}
            />
          </div>

          {/* Connector */}
          <div className="my-5 flex items-center justify-center gap-3 lg:my-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <ChannelIconRow size="sm" className="shrink-0 justify-center" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* Row 2 — Primary social channels (4-up) */}
          <div className="grid grid-cols-2 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {primaryChannels.map((preview, index) => (
              <OutputCard
                key={preview.id}
                preview={preview}
                visible={visible}
                delay={0.14 + index * 0.04}
              />
            ))}
          </div>

          {/* Row 3 — 360° + Website */}
          <div className="mt-4 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3 lg:mt-5 lg:gap-5">
            <OutputCard
              preview={spinPreview}
              visible={visible}
              delay={0.32}
              className="sm:col-span-1"
            />
            <OutputCard
              preview={websitePreview}
              visible={visible}
              delay={0.36}
              className="sm:col-span-2"
            />
          </div>
        </motion.div>

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
