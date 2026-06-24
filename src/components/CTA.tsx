import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { ResponsiveImage } from "@/components/ui-custom/ResponsiveImage";
import { assets } from "@/lib/assets";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTA = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative min-h-[60svh] overflow-hidden bg-brand-black py-16 md:min-h-0 md:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0">
        <ResponsiveImage
          desktopSrc={assets.cta.desktop}
          mobileSrc={assets.cta.mobile}
          alt=""
          loading="lazy"
          objectPosition="object-center md:object-right"
          imgClassName="opacity-40"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/92 to-brand-black/75 md:via-brand-black/90 md:to-brand-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/40 md:hidden" />

      <div className="container relative mx-auto flex min-h-[50svh] items-center px-4 md:min-h-0 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-2xl text-center"
        >
          <h2
            id="cta-heading"
            className="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Ready to Transform Your{" "}
            <span className="text-brand-lime">Vehicle Listings?</span>
          </h2>
          <p className="mt-4 text-sm text-muted-brand sm:mt-5 sm:text-base md:text-lg">
            Join leading dealerships and marketplaces using Urban Uplink to create
            stunning 360° experiences that convert.
          </p>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <GlowButton href="/contact" variant="filled" className="w-full sm:w-auto">
              Get Started
            </GlowButton>
            <GlowButton href="/pricing" className="w-full sm:w-auto">
              View Pricing
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
