import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";
import { Check, Zap, Building2, Sparkles } from "lucide-react";
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


// Services:
// 1.	BG Removal + Replacement (99/12 Images)
// 2.	360 Spin (299/Car or 12 images)
// 3.	BG Replacement + 360 + Hotspots + Number plate masking (Original Price-598 Combo Price-499)
// 4.	Manual Quality Check (INR 200/Car Minimum 200 Cars/Month volume)
// 5.	White labeling of app (TBD)
// 6.	Custom SDK/API (TBD)

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: {
      monthly: "24,999",
      annually: "2,49,999",
      earlyBird: "12,450",
    },
    description:
      "Perfect for individual sellers and small dealerships getting started",
    vehicleLimit: 50,
    features: [
      "Up to 50 vehicles/month",
      "Mobile capture app access",
      "AI background enhancement",
      // "Cloud storage (100GB)",
      // "Basic 360° viewer",
      "Email support",
      "Standard processing speed",
      // "Watermarked exports",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    icon: Building2,
    price: {
      monthly: "64,999",
      annually: "6,49,999",
      earlyBird: "50,000",
    },
    description: "Best for growing dealerships and automotive businesses",
    vehicleLimit: 200,
    features: [
      "Up to 200 vehicles/month",
      "Everything in Starter, plus:",
      "Priority processing",
      "Custom branding",
      "Advanced analytics",
      "API access",
      "Priority support",
      // "No watermarks",
      "CRM integration",
      "Dashboard access ",

    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Sparkles,
    price: {
      monthly: "Custom",
      annually: "Custom",
      earlyBird: null,
    },
    description: "For large dealership groups and automotive platforms",
    vehicleLimit: null,
    features: [
      "Unlimited vehicles",
      "Everything in Pro, plus:",
      "Dedicated account manager",
      "Custom integrations",
      "White-label solution",
      "Unlimited storage",
      "SLA guarantee",
      "24/7 phone support",
      "API integration",
      "Custom contracts",
      "Volume discounts",
      "Dashboard access ",
    ],
    cta: "Contact Sales",
    link: "https://calendly.com/admin-urbanuplink/30min",
    popular: false,
  },
];
// 1. Bulk bg removal package , 8/image(early bird ) , Standard -- 12/image 

// 2. Bg removal  branding and replacement -- 12/image(early bird ) , Standard -- 15/image 

const imageServicePlans = [
  {
    name: "360 Spin Experience",
    description:
      "Starter package for interactive vehicle spins. We create and host a smooth 360° car spin experience that can be embedded into marketplace listings, dealer pages, and buyer journeys.",
    earlyBird: "249",
    standard: "299",
    unit: "car spin",
    cta: "Start 360 Spin",
    features: [
      "Upload workflow",
      "Hosted 360° spin viewer",
      "Embeddable listing experience",
      "Basic analytics",
      "Email support",
    ],
    featured: true,
  },
  {
    name: "Bulk BG Removal Package",
    description:
      "Designed for dealerships and marketplaces handling large photo volumes. We remove distracting backgrounds quickly and consistently so every listing looks clean, professional, and marketplace-ready while reducing your edit turnaround time.",
    earlyBird: "8",
    standard: "12",
    unit: "image",
    cta: "Get Started",
    features: ["Bulk upload", "Background removal", "Marketplace-ready exports"],
  },
  {
    name: "BG Removal + Branding + Replacement",
    description:
      "Complete post-processing for premium listing visuals. Along with precise background removal and replacement, we apply your brand look for a uniform catalog experience that improves buyer trust and helps your inventory stand out.",
    earlyBird: "12",
    standard: "15",
    unit: "image",
    cta: "Get Started",
    features: ["Brand styling", "Background replacement", "Consistent catalog visuals"],
  },
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

const parsePrice = (price: string) => Number(price.replace(/,/g, ""));

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(price),
  );

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20">
            <span className="px-3 py-1 text-sm font-semibold text-accent">
              Simple, Transparent Pricing
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Choose the Right Plan for Your Growth
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Scalable solutions for dealerships of all sizes. No hidden fees.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Label
              htmlFor="billing-mode"
              className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}
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
              className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly{" "}
              <span className="text-accent text-xs ml-1 font-bold">
                (Save 20%)
              </span>
            </Label>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {plans.map((plan, index) => {
              const hasFixedPricing = plan.price.monthly !== "Custom" && plan.vehicleLimit;
              const planTotal =
                hasFixedPricing &&
                (isAnnual ? plan.price.annually : plan.price.earlyBird || plan.price.monthly);
              const vehicleAllowance = hasFixedPricing
                ? plan.vehicleLimit * (isAnnual ? 12 : 1)
                : null;
              const perCarPrice =
                planTotal && vehicleAllowance
                  ? formatPrice(parsePrice(planTotal) / vehicleAllowance)
                  : null;
              const standardPerCar =
                !isAnnual && hasFixedPricing
                  ? formatPrice(parsePrice(plan.price.monthly) / plan.vehicleLimit)
                  : null;

              return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 flex flex-col h-full ${
                  plan.popular
                    ? "border-accent shadow-2xl scale-105 z-10 bg-gradient-to-b from-background to-accent/5"
                    : "border-border hover:border-accent/50 hover:shadow-lg bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                )}

                <CardHeader className="pb-4">
                  {plan.popular && (
                    <div className="absolute top-4 right-4 bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full border border-accent/20">
                      Most Popular
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="mt-2 min-h-[40px]">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-6">
                    {plan.price.monthly === "Custom" ? (
                      <div className="text-4xl font-bold">Custom</div>
                    ) : (
                      <div className="space-y-2">
                        {!isAnnual && plan.price.earlyBird && (
                           <div className="inline-block bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded mb-1 shadow-sm">
                             Early bird offer ₹{plan.price.earlyBird}/month
                           </div>
                        )}
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold">₹</span>
                          <span className={`text-4xl font-bold ${!isAnnual && plan.price.earlyBird ? 'text-accent' : ''}`}>
                            {perCarPrice}
                          </span>
                          <span className="text-muted-foreground text-sm font-normal">
                            /car
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Package total: ₹{planTotal}/{isAnnual ? "year" : "month"}
                        </div>
                        {!isAnnual && standardPerCar && plan.price.earlyBird && (
                          <div className="text-sm text-muted-foreground">
                            Standard:{" "}
                            <span className="line-through decoration-red-500/50">
                              ₹{standardPerCar}/car
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    {isAnnual && plan.price.monthly !== "Custom" && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Billed annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 border-0" : ""}`}
                    size="lg"
                    asChild
                  >
                    <a href="/contact">{plan.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
              );
            })}
          </div>

          {/* Image Services Cards */}
          <div className="mt-14">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                Add-on Services & 360 Spin Pricing
              </h3>
              <p className="text-muted-foreground mt-2">
                Flexible per-car and per-image pricing for specific workflows.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {imageServicePlans.map((service, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-card ${
                    service.featured ? "border-accent/70 shadow-glow" : ""
                  }`}
                >
                  {service.featured && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  )}
                  <CardHeader>
                    {service.featured && (
                      <div className="mb-3 w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                        Starter Package
                      </div>
                    )}
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="inline-block bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                        Early bird offer
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-accent">₹</span>
                        <span className="text-4xl font-bold text-accent">
                          {service.earlyBird}
                        </span>
                        <span className="text-muted-foreground">
                          /{service.unit}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Standard:{" "}
                        <span className="line-through decoration-red-500/50">
                          ₹{service.standard}/{service.unit}
                        </span>
                      </div>
                      <ul className="space-y-2 pt-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline" asChild>
                      <a href="/contact">{service.cta}</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Enterprise Contact Section */}
          <div className="mt-20">
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Enterprise Solutions
                </h3>
                <p className="text-muted-foreground">
                  Need volume pricing or custom integrations? we offer tailored
                  packages for large dealership networks.
                </p>
              </div>
              <Button
                size="lg"
                variant="secondary"
                className="min-w-[200px]"
                asChild
              >
                <a href="/contact">Talk to Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm bg-background/60 backdrop-blur hover:bg-background transition-colors"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
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
