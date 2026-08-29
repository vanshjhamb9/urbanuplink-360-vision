import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { ResponsiveImage } from "@/components/ui-custom/ResponsiveImage";
import { assets } from "@/lib/assets";
import { finalCtaCopy } from "@/lib/homepageContent";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTA = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 min-h-[50svh] overflow-hidden bg-brand-black section-shell md:min-h-0"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0">
        <ResponsiveImage
          desktopSrc={assets.cta.desktop}
          mobileSrc={assets.cta.mobile}
          alt=""
          loading="lazy"
          objectPosition="object-center md:object-right"
          imgClassName="brightness-110 contrast-110 saturate-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-brand-black/10 md:via-brand-black/45 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent md:hidden" />

      <div className="page-container flex min-h-[50svh] items-center md:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="w-full max-w-xl rounded-2xl border border-white/10 bg-brand-black/45 p-5 text-left shadow-card backdrop-blur-xl sm:p-7 md:max-w-lg lg:max-w-xl"
        >
          <h2
            id="cta-heading"
            className="font-heading text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl"
          >
            {finalCtaCopy.title}{" "}
            <span className="text-brand-lime">{finalCtaCopy.titleAccent}</span>
          </h2>
          <p className="mt-4 text-sm text-muted-brand sm:mt-5 sm:text-base md:text-lg">
            {finalCtaCopy.description}
          </p>
          <div className="mt-6 flex sm:mt-8">
            <GlowButton href={finalCtaCopy.primaryHref} variant="filled" className="w-full sm:w-auto">
              {finalCtaCopy.primaryCta}
            </GlowButton>
          </div>
          <p className="mt-8 font-heading text-sm font-extrabold text-white/80">
            {finalCtaCopy.tagline}
          </p>
          <p className="mt-1 text-xs text-white/45">{finalCtaCopy.subtagline}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
