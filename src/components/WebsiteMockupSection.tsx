import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui-custom/BeforeAfterSlider";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { ResponsiveImage } from "@/components/ui-custom/ResponsiveImage";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { assets } from "@/lib/assets";
import { mockupStats } from "@/lib/homepageContent";

const WebsiteMockupSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden border-y border-white/8 bg-brand-black section-shell"
      aria-labelledby="website-mockup-heading"
    >
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Website Mockup"
            title={
              <span id="website-mockup-heading">
                See the difference in a{" "}
                <span className="text-brand-lime">real listing environment.</span>
              </span>
            }
            description="Before-and-after inventory presentation inside a marketplace-style layout — the clearest proof of value at a glance."
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="overflow-visible px-1"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
              Listing photo comparison
            </p>
            <div className="overflow-visible rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
              <div className="hidden md:block">
                <BeforeAfterSlider
                  beforeSrc={assets.beforeAfter.beforeDesktop}
                  afterSrc={assets.beforeAfter.afterDesktop}
                  beforeLabel="Before"
                  afterLabel="After"
                  orientation="horizontal"
                  aspectClass="aspect-[16/10]"
                />
              </div>
              <div className="md:hidden">
                <BeforeAfterSlider
                  beforeSrc={assets.beforeAfter.beforeMobile}
                  afterSrc={assets.beforeAfter.afterMobile}
                  beforeLabel="Before"
                  afterLabel="After"
                  orientation="horizontal"
                  aspectClass="aspect-[4/3]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F1113] shadow-card"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="ml-2 truncate text-xs text-white/45">
                marketplace-preview.urbanuplink.com
              </span>
            </div>
            <ResponsiveImage
              desktopSrc={assets.marketplace.listingDesktop}
              mobileSrc={assets.marketplace.listingMobile}
              alt="Marketplace listing page mockup with Urban Uplink processed vehicle photos"
              loading="lazy"
              imgClassName="brightness-110 contrast-105"
            />
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {mockupStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-sm font-bold text-white">{stat.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/55">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteMockupSection;
