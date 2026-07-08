import { PageLayout } from "@/components/layout/PageLayout";
import FloatingDemo from "@/components/FloatingDemo";
import {
  Camera,
  Zap,
  Palette,
  Cloud,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


// Testing the environent 
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
    title: "Lightning Fast Processing",
    description:
      "Move vehicles online in minutes, not days.",
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
  // {
  //   icon: Shield,
  //   title: "Enterprise Security",
  //   description:
  //     "Bank-level encryption and secure cloud infrastructure. Your data is protected 24/7 with automatic backups.",
  //   details: [
  //     "256-bit encryption",
  //     "SOC 2 compliant",
  //     "Automatic backups",
  //     "Role-based access control",
  //   ],
  // },
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
  // {
  //   icon: Smartphone,
  //   title: "Multi-Platform Integration",
  //   description:
  //     "Seamlessly integrate with your existing website, CRM, and automotive marketplace platforms.",
  //   details: [
  //     "WordPress plugin",
  //     "API access",
  //     "Marketplace integrations",
  //     "CRM connectors",
  //   ],
  // },
];


// Bulk processing card

const FeaturesPage = () => {
  return (
    <PageLayout>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 section-glow" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
              Product Features
            </p>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              A Complete Vehicle Imaging Platform.
            </h1>
            <p className="mt-6 text-lg text-muted-brand md:text-xl">
              Everything needed to capture, enhance, manage and publish
              professional vehicle inventory without expensive equipment.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-white/10 bg-gradient-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-lime/30 hover:shadow-glow"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-brand-lime/20 bg-brand-lime/10 transition-transform duration-500 group-hover:scale-110">
                    <feature.icon className="h-7 w-7 text-brand-lime" />
                  </div>

                  <h3 className="mb-3 font-heading text-2xl font-extrabold text-white group-hover:text-brand-lime transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-brand">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-lime/10">
                          <div className="h-2 w-2 rounded-full bg-brand-lime" />
                        </div>
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

      <FloatingDemo />
    </PageLayout>
  );
};

export default FeaturesPage;
