import { Camera, Zap, TrendingUp, Shield, Palette, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Real 360° Photography",
    description: "Authentic 360-degree views without expensive 3D modeling. Capture reality, showcase excellence.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "From capture to publish in minutes. Our AI-powered platform delivers industry-leading turnaround times.",
  },
  {
    icon: TrendingUp,
    title: "Proven Sales Growth",
    description: "Dealerships using UrbanUplink see up to 40% increase in online engagement and conversion rates.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and secure cloud storage. Your inventory data is protected 24/7.",
  },
  {
    icon: Palette,
    title: "Brand Customization",
    description: "Fully white-labeled solutions that match your dealership's brand identity perfectly.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Integration",
    description: "Seamlessly integrate with your existing website, social media, and automotive marketplaces.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete 360° Solution for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Automotive Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to showcase your inventory in stunning detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
