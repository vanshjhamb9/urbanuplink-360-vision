import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";
import {
  Check,
  X,
  Zap,
  Building2,
  Sparkles,
  RotateCcw,
  ImageMinus,
  Palette,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type BillingPeriod = "monthly" | "annually";

type PlanPricing = {
  perCar: string;
  standardPerCar: string | null;
  packageTotal: string | null;
  savingsPercent: number | null;
  vehicleLimit: number | null;
};

type Plan = {
  name: string;
  icon: typeof Zap;
  description: string;
  pricing: Record<BillingPeriod, PlanPricing> | "custom";
  features: string[];
  cta: string;
  ctaHref: string;
  popular: boolean;
};

type ServicePlan = {
  id: string;
  name: string;
  icon: typeof RotateCcw;
  description: string;
  unit: string;
  pricing: Record<
    BillingPeriod,
    { price: string; standard: string | null; packageTotal?: string; savingsPercent?: number }
  >;
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for individual sellers and small dealerships getting started",
    pricing: {
      monthly: {
        perCar: "249",
        standardPerCar: "500",
        packageTotal: "12,450",
        savingsPercent: 50,
        vehicleLimit: 50,
      },
      annually: {
        perCar: "199",
        standardPerCar: "249",
        packageTotal: "1,19,400",
        savingsPercent: 20,
        vehicleLimit: 50,
      },
    },
    features: [
      "Up to 50 Vehicles / Month",
      "Mobile Capture App",
      "AI Background Enhancement",
      "AI Background Replacement",
      "Upload up to 12 Images Per Vehicle",
      "Email Support",
      "Standard Processing",
      "Dashboard Access",
    ],
    cta: "Start Free Trial",
    ctaHref: "/contact",
    popular: false,
  },
  {
    name: "Pro",
    icon: Building2,
    description: "Best for growing dealerships and automotive businesses",
    pricing: {
      monthly: {
        perCar: "250",
        standardPerCar: "599",
        packageTotal: "50,000",
        savingsPercent: 58,
        vehicleLimit: 200,
      },
      annually: {
        perCar: "200",
        standardPerCar: "250",
        packageTotal: "4,80,000",
        savingsPercent: 20,
        vehicleLimit: 200,
      },
    },
    features: [
      "Up to 200 Vehicles / Month",
      "Everything in Starter, plus:",
      "Priority Processing",
      "Priority Support",
      "Custom Branding",
      "Advanced Analytics",
      "Dashboard Access",
    ],
    cta: "Start Free Trial",
    ctaHref: "/contact",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Sparkles,
    description: "For large dealership groups, marketplaces, and automotive platforms",
    pricing: "custom",
    features: [
      "Custom Pricing",
      "Unlimited Vehicles",
      "Dedicated Success Manager",
      "Custom AI Models",
      "API Integration",
      "CRM Integration",
      "White Label Solution",
      "SLA Support",
      "Priority Processing",
      "Custom Workflows",
    ],
    cta: "Book a Demo",
    ctaHref: "https://calendly.com/admin-urbanuplink/30min",
    popular: false,
  },
];

const imageServicePlans: ServicePlan[] = [
  {
    id: "360-spin",
    name: "360 Spin Package",
    icon: RotateCcw,
    description:
      "Interactive vehicle spins with hosted viewer, marketplace embedding, and dealership-ready walkaround experiences.",
    unit: "Car",
    pricing: {
      monthly: {
        price: "249",
        standard: "500",
        packageTotal: "12,450",
        savingsPercent: 50,
      },
      annually: {
        price: "199",
        standard: "249",
        packageTotal: "1,19,400",
        savingsPercent: 20,
      },
    },
    features: [
      "Upload Workflow",
      "Hosted 360° Viewer",
      "Marketplace Embedding",
      "Dealer Website Embed",
      "AI Photography Mobile App (Offline Mode)",
      "Feature Hotspots in 360 Spin",
      "Download 360 Walkaround Video",
      "Custom Background with Dealership Logo",
      "License Plate Masking",
      "Basic Analytics",
      "Email Support",
    ],
    cta: "Start 360 Spin",
    featured: true,
  },
  {
    id: "bulk-bg-removal",
    name: "Bulk Background Removal",
    icon: ImageMinus,
    description:
      "High-volume background removal for dealerships and marketplaces that need clean, consistent listing photos at scale.",
    unit: "Image",
    pricing: {
      monthly: {
        price: "10",
        standard: "12",
        savingsPercent: 17,
      },
      annually: {
        price: "8",
        standard: "12",
        savingsPercent: 33,
      },
    },
    features: ["Bulk Upload", "Background Removal", "Marketplace-Ready Exports"],
    cta: "Get Started",
  },
  {
    id: "bg-removal-branding",
    name: "Background Removal + Branding",
    icon: Palette,
    description:
      "Premium post-processing with brand styling, logo backgrounds, and consistent catalog visuals across every listing.",
    unit: "Image",
    pricing: {
      monthly: {
        price: "15",
        standard: null,
        savingsPercent: undefined,
      },
      annually: {
        price: "12",
        standard: "15",
        savingsPercent: 20,
      },
    },
    features: [
      "Brand Styling",
      "AI Background Replacement",
      "Custom Background With Company Logo",
      "License Plate Masking",
      "Consistent Marketplace Images",
      "High Resolution Export",
    ],
    cta: "Get Started",
  },
];

type ComparisonValue = boolean | string;

const comparisonFeatures: {
  feature: string;
  starter: ComparisonValue;
  pro: ComparisonValue;
  enterprise: ComparisonValue;
}[] = [
  { feature: "Cars Included", starter: "50 / Month", pro: "200 / Month", enterprise: "Unlimited" },
  { feature: "AI Enhancement", starter: true, pro: true, enterprise: true },
  { feature: "AI Background Replacement", starter: true, pro: true, enterprise: true },
  { feature: "License Plate Masking", starter: true, pro: true, enterprise: true },
  { feature: "360 Viewer", starter: true, pro: true, enterprise: true },
  { feature: "Walkaround Video", starter: true, pro: true, enterprise: true },
  { feature: "Offline App", starter: true, pro: true, enterprise: true },
  { feature: "Processing", starter: "Standard", pro: "Priority", enterprise: "Priority" },
  { feature: "Custom Branding", starter: false, pro: true, enterprise: true },
  { feature: "Logo Background", starter: false, pro: true, enterprise: true },
  { feature: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Advanced +" },
  { feature: "Priority Support", starter: false, pro: true, enterprise: true },
  { feature: "API", starter: false, pro: false, enterprise: true },
  { feature: "CRM", starter: false, pro: false, enterprise: true },
  { feature: "White Label Solution", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated Manager", starter: false, pro: false, enterprise: true },
];

const faqs = [
  {
    question: "Can I change plans later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Absolutely! All plans come with a 30-day free trial. No credit card required.",
  },
  {
    question: "What happens if I exceed my vehicle limit?",
    answer:
      "You'll be notified when approaching your limit. You can upgrade anytime or purchase additional vehicle credits.",
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes! Save ~20% with annual billing on Starter and Pro plans.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, UPI, and bank transfers for annual plans.",
  },
];

const ComparisonCell = ({ value }: { value: ComparisonValue }) => {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  }
  if (value) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/15">
        <Check className="h-4 w-4 text-accent" />
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted/40">
      <X className="h-3.5 w-3.5 text-muted-foreground/60" />
    </span>
  );
};

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { hash } = useLocation();
  const billing: BillingPeriod = isAnnual ? "annually" : "monthly";

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-accent/20 bg-accent/10 p-1.5">
            <span className="px-3 py-1 text-sm font-semibold text-accent">
              Simple, Transparent Pricing
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Choose the Right Plan for Your Growth
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
            Enterprise-grade automotive imaging for dealerships, marketplaces,
            and platforms. Clear pricing. No hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="mb-4 flex items-center justify-center gap-4">
            <Label
              htmlFor="billing-mode"
              className={`cursor-pointer text-sm font-medium transition-colors ${
                !isAnnual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </Label>
            <Switch
              id="billing-mode"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label
              htmlFor="billing-mode"
              className={`cursor-pointer text-sm font-medium transition-colors ${
                isAnnual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Annual
            </Label>
          </div>
          {isAnnual && (
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              Save 20% Annually
            </div>
          )}
        </div>
      </section>

      {/* Main Plans */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-7xl items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan) => {
              const isCustom = plan.pricing === "custom";
              const price = isCustom ? null : plan.pricing[billing];

              return (
                <Card
                  key={plan.name}
                  className={`group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? "z-10 border-accent bg-gradient-to-b from-background to-accent/5 shadow-2xl shadow-accent/10 lg:scale-[1.02]"
                      : "border-border bg-card hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  )}

                  <CardHeader className="pb-4 pt-8">
                    {plan.popular && (
                      <div className="absolute right-4 top-4 rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <plan.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-2 min-h-[48px]">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    {/* Price block */}
                    <div className="mb-6 space-y-3 border-b border-border/60 pb-6">
                      {isCustom || !price ? (
                        <div className="text-4xl font-bold tracking-tight">
                          Custom Pricing
                        </div>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xl font-bold text-accent">₹</span>
                            <span className="text-4xl font-bold tracking-tight text-accent md:text-5xl">
                              {price.perCar}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              / Car
                            </span>
                          </div>

                          {price.standardPerCar && (
                            <div className="text-sm text-muted-foreground">
                              <span className="line-through decoration-red-500/60">
                                ₹{price.standardPerCar} / Car
                              </span>
                            </div>
                          )}

                          {price.savingsPercent != null && (
                            <div className="inline-flex rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                              Save {price.savingsPercent}%
                            </div>
                          )}

                          {price.packageTotal && (
                            <div className="pt-1">
                              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                Package Total
                              </p>
                              <p className="text-lg font-semibold">
                                ₹{price.packageTotal}{" "}
                                <span className="text-sm font-normal text-muted-foreground">
                                  / {isAnnual ? "Year" : "Month"}
                                </span>
                              </p>
                            </div>
                          )}

                          <p className="text-xs text-muted-foreground">
                            Billed {isAnnual ? "Annually" : "Monthly"}
                            {price.vehicleLimit
                              ? ` · Max ${price.vehicleLimit} Cars / Month`
                              : ""}
                          </p>
                        </>
                      )}
                      {isCustom && (
                        <p className="text-sm text-muted-foreground">
                          Tailored for volume, integrations, and SLAs
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="mb-6 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-muted-foreground transition-colors group-hover:text-foreground/90">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="mt-auto border-t border-border/40 bg-background/40 pt-6 backdrop-blur-sm">
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      className={`w-full ${
                        plan.popular
                          ? "border-0 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                          : ""
                      }`}
                      size="lg"
                      asChild
                    >
                      <a
                        href={plan.ctaHref}
                        {...(plan.ctaHref.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {plan.cta}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Feature Comparison Table */}
          <div className="mx-auto mt-24 max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Compare Plans
              </h2>
              <p className="mt-3 text-muted-foreground">
                See exactly what you get at every tier — and where upgrading unlocks more.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/50 shadow-lg backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border/60 bg-muted/30">
                      <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Starter
                      </th>
                      <th className="relative px-6 py-4 text-center text-sm font-semibold text-accent">
                        Pro
                        <span className="ml-2 inline-block rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                          Popular
                        </span>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, idx) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-border/40 transition-colors hover:bg-muted/20 ${
                          idx % 2 === 0 ? "bg-transparent" : "bg-muted/10"
                        }`}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-foreground">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <ComparisonCell value={row.starter} />
                          </div>
                        </td>
                        <td className="bg-accent/[0.03] px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <ComparisonCell value={row.pro} />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <ComparisonCell value={row.enterprise} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Add-on Services */}
          <div id="services" className="mt-24 scroll-mt-28">
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold md:text-3xl">
                Add-on Services &amp; 360 Spin Pricing
              </h3>
              <p className="mt-2 text-muted-foreground">
                Flexible per-car and per-image pricing for specific imaging workflows.
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {imageServicePlans.map((service) => {
                const price = service.pricing[billing];

                return (
                  <Card
                    key={service.id}
                    id={service.id}
                    className={`group relative flex h-full scroll-mt-28 flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                      service.featured
                        ? "border-accent/70 bg-gradient-to-b from-background to-accent/5 shadow-glow"
                        : "border-border bg-card hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
                    }`}
                  >
                    {service.featured && (
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
                    )}

                    <CardHeader className="pb-4 pt-8">
                      {service.featured && (
                        <div className="mb-3 w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                          Featured
                        </div>
                      )}
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="mt-2 min-h-[60px]">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col">
                      <div className="mb-6 space-y-3 border-b border-border/60 pb-6">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl font-bold text-accent">₹</span>
                          <span className="text-4xl font-bold tracking-tight text-accent">
                            {price.price}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            / {service.unit}
                          </span>
                        </div>

                        {price.standard && (
                          <div className="text-sm text-muted-foreground">
                            <span className="line-through decoration-red-500/60">
                              ₹{price.standard} / {service.unit}
                            </span>
                          </div>
                        )}

                        {price.savingsPercent != null && (
                          <div className="inline-flex rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                            Save {price.savingsPercent}%
                          </div>
                        )}

                        {price.packageTotal && (
                          <div className="pt-1">
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Package Total
                            </p>
                            <p className="text-lg font-semibold">
                              ₹{price.packageTotal}{" "}
                              <span className="text-sm font-normal text-muted-foreground">
                                / {isAnnual ? "Year" : "Month"}
                              </span>
                            </p>
                          </div>
                        )}

                        <p className="text-xs text-muted-foreground">
                          Billed {isAnnual ? "Annually" : "Monthly"}
                          {service.id === "360-spin" ? " · Max 50 Cars / Month" : ""}
                        </p>
                      </div>

                      <ul className="mb-6 flex-1 space-y-2.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="mt-auto border-t border-border/40 bg-background/40 pt-6 backdrop-blur-sm">
                      <Button className="w-full" variant="outline" size="lg" asChild>
                        <a href="/contact">{service.cta}</a>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Enterprise CTA band */}
          <div className="mx-auto mt-20 max-w-4xl">
            <div className="flex flex-col items-center gap-8 rounded-3xl border border-border/50 bg-muted/30 p-8 text-center md:flex-row md:p-12 md:text-left">
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold">Need a custom enterprise rollout?</h3>
                <p className="text-muted-foreground">
                  Volume pricing, white-label, custom AI models, and dedicated success —
                  built for large dealership networks and marketplaces.
                </p>
              </div>
              <Button size="lg" variant="secondary" className="min-w-[200px]" asChild>
                <a
                  href="https://calendly.com/admin-urbanuplink/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6">
              {faqs.map((faq) => (
                <Card
                  key={faq.question}
                  className="border-0 bg-background/60 shadow-sm backdrop-blur transition-colors hover:bg-background"
                >
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-lg font-semibold">{faq.question}</h4>
                    <p className="leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FloatingDemo />
      <Footer />
    </div>
  );
};

export default PricingPage;
