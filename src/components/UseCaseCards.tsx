import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { ResponsiveImage } from "@/components/ui-custom/ResponsiveImage";
import { assets } from "@/lib/assets";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const useCases = [
  {
    title: "Marketplace",
    subtitle: "Premium Listing Experience",
    desktop: assets.useCases.marketplace.desktop,
    mobile: assets.useCases.marketplace.mobile,
    gradient: "from-brand-lime/20 to-transparent",
  },
  {
    title: "Insurance",
    subtitle: "Damage Inspection",
    desktop: assets.useCases.insurance.desktop,
    mobile: assets.useCases.insurance.mobile,
    gradient: "from-brand-blue/20 to-transparent",
  },
  {
    title: "Fleet Management",
    subtitle: "Operational Visibility",
    desktop: assets.useCases.fleet.desktop,
    mobile: assets.useCases.fleet.mobile,
    gradient: "from-brand-lime/15 to-transparent",
  },
  {
    title: "Car Detailing",
    subtitle: "Studio-Grade Presentation",
    desktop: assets.useCases.detailing.desktop,
    mobile: assets.useCases.detailing.mobile,
    gradient: "from-brand-blue/15 to-transparent",
  },
];

const UseCaseCards = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden bg-brand-black py-16 md:py-28"
      aria-labelledby="use-cases-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow" />
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Industries We Serve"
            title={
              <>
                Built for Every{" "}
                <span className="text-brand-lime">Automotive Vertical</span>
              </>
            }
            description="Premium interactive experiences tailored for marketplaces, insurance, fleet operations, and detailing studios."
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:mt-14 md:grid-cols-2">
          {useCases.map((item, index) => (
            <motion.article
              key={item.title.trim()}
              initial={{ opacity: 0, y: 28 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-lime/40 hover:shadow-glow sm:rounded-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              {/* Mobile 930×570 (~3:2) · Desktop wide card */}
              <div className="relative aspect-[31/19] overflow-hidden md:aspect-[16/7]">
                <ResponsiveImage
                  desktopSrc={item.desktop}
                  mobileSrc={item.mobile}
                  alt={`${item.title.trim()} solution preview`}
                  objectPosition="object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/15 to-transparent" />
              </div>
              <div className="relative p-4 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-lime sm:text-xs">
                  {item.subtitle}
                </p>
                <h3 className="mt-1.5 font-heading text-xl font-extrabold text-white sm:mt-2 sm:text-2xl">
                  {item.title.trim()}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseCards;
