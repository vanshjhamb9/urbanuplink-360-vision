import { Smartphone, Upload, Sparkles, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Mobile Capture",
    description: "Simply use your smartphone to capture your vehicle from multiple angles. No special equipment needed.",
  },
  {
    icon: Upload,
    number: "02",
    title: "Upload Images",
    description: "Upload your photos directly to our platform. Our AI automatically detects and organizes them.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "AI Processing",
    description: "Our advanced AI enhances backgrounds, adjusts lighting, and creates seamless 360° views in minutes.",
  },
  {
    icon: Eye,
    number: "04",
    title: "Immersive Experience",
    description: "Get publish-ready 360° interactive viewer that you can embed anywhere. Share and showcase instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold text-sm">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From capture to showcase in just 4 simple steps. No technical expertise required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-6">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
