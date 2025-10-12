import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";
import { Check, Zap, Building2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "299",
    period: "month",
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
    price: "799",
    period: "month",
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
    price: "Custom",
    period: "",
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
    answer: "Yes! Save 20% with annual billing on Starter and Pro plans.",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-semibold text-sm">Pricing Plans</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Choose the Perfect Plan for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-2 border-accent shadow-xl scale-105'
                    : 'border-2 hover:border-accent/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <plan.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.price === "Custom" ? (
                      <div className="text-4xl font-bold">Custom</div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? "gradient" : "outline"}
                    className="w-full mb-8"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto border-2 border-accent/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Large dealership groups, OEMs, and automotive platforms get custom pricing and dedicated support.
                </p>
                <Button variant="gradient" size="xl">
                  Request Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2 hover:border-accent/50 transition-all">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
