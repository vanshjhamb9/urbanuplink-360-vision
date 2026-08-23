import { motion } from "framer-motion";
import { CheckCircle2, Cloud, Smartphone, Zap } from "lucide-react";
import CTA from "@/components/CTA";
import FloatingDemo from "@/components/FloatingDemo";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { PageLayout } from "@/components/layout/PageLayout";

const pillars = [
  {
    icon: Smartphone,
    title: "Smartphone first",
    description:
      "No expensive DSLR cameras or turntables needed. Use the phone you already own with guided capture.",
  },
  {
    icon: Zap,
    title: "Fast processing",
    description:
      "Move from capture to polished visuals quickly with cloud-optimized processing.",
  },
  {
    icon: Cloud,
    title: "Cloud sync",
    description:
      "Sync spins and listing assets to your dashboard and publish across channels.",
  },
];

const benefits = [
  "Reduce photography costs by up to 90%",
  "Increase vehicle detail page engagement",
  "Faster time-to-market for inventory",
  "Consistent, professional look across all listings",
  "Easy integration with existing websites",
];

const faqs = [
  {
    q: "Do I need a tripod?",
    a: "A tripod helps, but guided capture and stabilization make handheld photos effective for most lots.",
  },
  {
    q: "How long does processing take?",
    a: "Most assets are ready within minutes after upload, depending on connection speed and batch size.",
  },
  {
    q: "Can I change the background?",
    a: "Yes — choose virtual studio environments or upload custom branded backdrops.",
  },
  {
    q: "Is there an API available?",
    a: "Yes. Integrate captures and viewers directly into your inventory and dealer systems.",
  },
];

const LearnMorePage = () => {
  return (
    <PageLayout>
      <section className="relative overflow-hidden border-b border-white/10 section-compact">
        <div className="pointer-events-none absolute inset-0 section-glow" />
        <div className="page-container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <SectionHeading
              eyebrow="Platform Overview"
              title={
                <>
                  Built for the future of{" "}
                  <span className="text-brand-lime">automotive retail.</span>
                </>
              }
              description="See how Urban Uplink helps dealerships, marketplaces, detailers, and fleet operators create better customer experiences while reducing operational effort."
            />
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <GlowButton href="/use-cases" variant="filled">
                Explore Industries
              </GlowButton>
              <GlowButton href="/contact">Book a Demo</GlowButton>
              <GlowButton href="/pricing">View Pricing</GlowButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell border-b border-white/8">
        <div className="page-container grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
              About the platform
            </p>
            <h2 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
              The visual infrastructure platform for automotive retail.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-brand md:text-base">
              Urban Uplink gives automotive teams one workflow to digitize, present,
              inspect, and market vehicles. Photography is the starting point for a
              platform built around better vehicle experiences.
            </p>
            <ul className="section-body space-y-5">
              {pillars.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-lime/25 bg-brand-lime/10">
                    <Icon className="h-5 w-5 text-brand-lime" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-extrabold text-white">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h3 className="font-heading text-xl font-extrabold text-white">
              Why choose Urban Uplink?
            </h3>
            <ul className="section-body space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/10 pt-6">
              <GlowButton href="/pricing" variant="filled" className="w-full sm:w-auto">
                View Pricing Plans
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-b border-white/8">
        <div className="page-container">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Everything you need to know about getting started."
          />
          <div className="section-body grid gap-4 md:grid-cols-2">
            {faqs.map(({ q, a }) => (
              <article
                key={q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <h3 className="font-heading text-base font-extrabold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <FloatingDemo />
    </PageLayout>
  );
};

export default LearnMorePage;
