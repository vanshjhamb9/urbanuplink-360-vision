import { motion } from "framer-motion";
import { AlertTriangle, Camera, Search, Shield, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import fleetStep1 from "@/assets/3. Fleet Management/desktop/1. Main Feature Image (Card Style) fleet management desktop 1240 x 760.webp";
import fleetStep2 from "@/assets/3. Fleet Management/desktop/2. Main Feature Image (Card Style) fleet management desktop 1240 x 760.webp";
import fleetStep3 from "@/assets/3. Fleet Management/desktop/3. Main Feature Image (Card Style) fleet management desktop 1240 x 760.webp";
import fleetStep4 from "@/assets/3. Fleet Management/desktop/4. Main Feature Image (Card Style) fleet management desktop 1240 x 760.webp";

const steps = [
  {
    number: "01",
    title: "Executive captures vehicle condition",
    description:
      "Executive takes detailed photos of the vehicle before it goes for rent.",
    icon: Camera,
    image: fleetStep1,
  },
  {
    number: "02",
    title: "Client/driver takes it for the ride",
    description:
      "Vehicle is assigned to the driver and the journey begins.",
    icon: Users,
    image: fleetStep2,
  },
  {
    number: "03",
    title: "Vehicle is returned with slight damage",
    description:
      "Driver returns the vehicle with damage on the front headlight.",
    icon: AlertTriangle,
    image: fleetStep3,
  },
  {
    number: "04",
    title: "Executive easily identifies damage using system",
    description:
      "System compares before and after photos and highlights the damage instantly.",
    icon: Search,
    image: fleetStep4,
  },
];

const ProcessSection = () => {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-20 overflow-hidden bg-brand-black py-16 md:py-28"
      aria-labelledby="process-heading"
    >
      <div className="pointer-events-none absolute inset-0 section-glow" />
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Our 4-Step Process"
            title={
              <>
                Complete Control Over{" "}
                <span className="text-brand-lime">Your Rental Fleet.</span>
              </>
            }
            description="From inspection to insights, our AI-powered platform helps you manage every vehicle with confidence."
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-visible rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-4 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-lime/45 hover:shadow-glow"
            >
              <div className="mb-3 flex min-h-[3.25rem] items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-lime bg-brand-black font-heading text-sm font-extrabold text-brand-lime shadow-[0_0_18px_rgba(201,241,53,0.22)]">
                  {index + 1}
                </span>
                <h3 className="font-heading text-sm font-extrabold leading-tight text-white">
                  {step.title}
                </h3>
              </div>

              <div className="relative mb-4 h-40 overflow-hidden rounded-xl border border-white/8 bg-white/5">
                <img
                  src={step.image}
                  alt={`${step.title} process preview`}
                  className="h-full w-full object-cover brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-black/55 to-transparent" />
              </div>

              <div className="flex items-start gap-3">
                <step.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
                <p className="text-xs leading-relaxed text-white/72">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <span
                  className="absolute -right-7 top-1/2 hidden -translate-y-1/2 font-heading text-4xl font-extrabold text-brand-lime lg:inline"
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex justify-center md:mt-14"
        >
          <p className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-xs text-muted-brand shadow-card backdrop-blur-xl sm:text-sm">
            <Shield className="h-4 w-4 shrink-0 text-brand-lime" />
            <span>All records are securely stored and accessible anytime.</span>
            <span className="hidden h-4 w-px bg-white/15 sm:inline-block" />
            <span className="font-semibold text-brand-lime">Smarter tools. Greater impact.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
