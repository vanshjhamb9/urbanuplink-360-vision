import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";
import { Check, Zap, Building2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: {
      monthly: "24,999",
      annually: "2,49,999",
    },
    description: "Perfect for individual sellers and small dealerships getting started",
    features: [
      "Up to 50 vehicles/month",
      "Mobile capture app access",
      "AI background enhancement",
      "Cloud storage (100GB)",
      "Basic 360° viewer",
      "Email support",
      "Standard processing speed",
      "Watermarked exports",
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
    },
    description: "Best for growing dealerships and automotive businesses",
    features: [
      "Up to 200 vehicles/month",
      "Everything in Starter, plus:",
      "Priority processing",
      "Custom branding",
      "Advanced analytics",
      "API access",
      "Cloud storage (500GB)",
      "Priority support",
      "No watermarks",
      "CRM integration",
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
    },
    description: "For large dealership groups and automotive platforms",
    features: [
      "Unlimited vehicles",
      "Everything in Pro, plus:",
      "Dedicated account manager",
      "Custom integrations",
      "White-label solution",
      "Unlimited storage",
      "SLA guarantee",
      "24/7 phone support",
      "Custom contracts",
      "Volume discounts",
    ],
    cta: "Contact Sales",
    link: "https://calendly.com/admin-urbanuplink/30min",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "Is there a free trial?",
    answer: "Absolutely! All plans come with a 30-day free trial. No credit card required.",
  },
  {
    question: "What happens if I exceed my vehicle limit?",
    answer: "You'll be notified when approaching your limit. You can upgrade anytime or purchase additional vehicle credits.",
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes! Save ~20% with annual billing on Starter and Pro plans.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, UPI, and bank transfers for annual plans.",
  },
];

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20">
            <span className="px-3 py-1 text-sm font-semibold text-accent">Simple, Transparent Pricing</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Choose the Right Plan for Your Growth
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Scalable solutions for dealerships of all sizes. No hidden fees.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Label htmlFor="billing-mode" className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</Label>
            <Switch
              id="billing-mode"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label htmlFor="billing-mode" className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly <span className="text-accent text-xs ml-1 font-bold">(Save 20%)</span>
            </Label>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 flex flex-col h-full ${plan.popular
                  ? 'border-accent shadow-2xl scale-105 z-10 bg-gradient-to-b from-background to-accent/5'
                  : 'border-border hover:border-accent/50 hover:shadow-lg bg-card'
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
                  <CardDescription className="mt-2 min-h-[40px]">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-6">
                    {plan.price.monthly === "Custom" ? (
                      <div className="text-4xl font-bold">Custom</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold">₹</span>
                        <span className="text-4xl font-bold">
                          {isAnnual ? plan.price.annually : plan.price.monthly}
                        </span>
                        <span className="text-muted-foreground text-sm font-normal">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
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
                        <span className="text-muted-foreground hover:text-foreground transition-colors">{feature}</span>
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
            ))}
          </div>

          {/* Enterprise Contact Section */}
          <div className="mt-20">
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Enterprise Solutions</h3>
                <p className="text-muted-foreground">
                  Need volume pricing or custom integrations? we offer tailored packages for large dealership networks.
                </p>
              </div>
              <Button size="lg" variant="secondary" className="min-w-[200px]" asChild>
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
                <Card key={index} className="border-0 shadow-sm bg-background/60 backdrop-blur hover:bg-background transition-colors">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
