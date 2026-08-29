import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { Camera, Zap, Palette, Cloud, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Mobile Capture",
    description:
      "Capture consistent vehicle images with guided workflows designed for dealerships.",
    details: [
      "Works with any modern smartphone",
      "Automated capture guidance",
      "Real-time quality checks",
      "Instant preview on device",
    ],
  },
  {
    icon: Cloud,
    title: "Studio Background Enhancement",
    description:
      "Create clean, professional inventory images that strengthen your brand identity.",
    details: [
      "One-click background removal",
      "Library of professional backgrounds",
      "Custom background uploads",
    ],
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description:
      "Move vehicles online quickly with cloud-optimized processing.",
    details: [
      "Real-time processing status",
      "Batch processing support",
      "Priority processing available",
      "Automatic quality optimization",
    ],
  },
  {
    icon: Globe,
    title: "360 Viewer",
    description:
      "Give buyers the confidence to inspect every angle before visiting your showroom.",
    details: [
      "Responsive design",
      "Touch & swipe support",
      "Customizable UI controls",
      "Fullscreen mode",
    ],
  },
  {
    icon: Palette,
    title: "Brand Customization",
    description:
      "Deliver a consistent branded experience across every listing.",
    details: [
      "Custom branding",
      "Logo placement",
      "Color customization",
      "Custom domains",
    ],
  },
];

const FeaturesPage = () => {
  return (
    <PageLayout>
      <section className="relative overflow-hidden page-hero-band">
        <div className="pointer-events-none absolute inset-0 section-glow" />
        <div className="page-container">
          <SectionHeading
            eyebrow="Product Features"
            size="page"
            title={
              <>
                A complete vehicle imaging{" "}
                <span className="text-brand-lime">platform.</span>
              </>
            }
            description="Everything needed to capture, enhance, manage, and publish professional vehicle inventory without expensive equipment."
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="page-container">
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-brand-lime/30 hover:shadow-glow"
              >
                <CardContent className="p-6 md:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-lime/20 bg-brand-lime/10 transition-transform duration-500 group-hover:scale-105">
                    <feature.icon className="h-6 w-6 text-brand-lime" />
                  </div>

                  <h3 className="mb-2 font-heading text-xl font-extrabold text-white transition-colors group-hover:text-brand-lime">
                    {feature.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-brand">
                    {feature.description}
                  </p>

                  <ul className="space-y-2.5">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-lime" />
                        <span className="text-sm text-white/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FeaturesPage;
