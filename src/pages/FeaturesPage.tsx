import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";
import { Camera, Zap, Palette, Cloud, Shield, Globe, Smartphone, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Mobile Capture Technology",
    description: "Turn any smartphone into a professional 360° imaging device. No expensive equipment or special cameras needed.",
    details: [
      "Works with any modern smartphone",
      "Automated capture guidance",
      "Real-time quality checks",
      "Instant preview on device",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Background Enhancement",
    description: "Our AI automatically removes distracting backgrounds and replaces them with professional studio environments.",
    details: [
      "One-click background removal",
      "Library of professional backgrounds",
      "Custom background uploads",
      "Automatic lighting adjustment",
    ],
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "From upload to publish-ready 360° view in under 10 minutes. Industry-leading processing speeds powered by AI.",
    details: [
      "Real-time processing status",
      "Batch processing support",
      "Priority processing available",
      "Automatic quality optimization",
    ],
  },
  {
    icon: Globe,
    title: "Instant 360° Viewer",
    description: "Embeddable, interactive viewer that works on any website or platform. Mobile-optimized for perfect viewing.",
    details: [
      "Responsive design",
      "Touch & swipe support",
      "Customizable UI controls",
      "Fullscreen mode",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud-Based Storage & Sharing",
    description: "Securely store unlimited vehicles in the cloud. Share links instantly or embed viewers anywhere.",
    details: [
      "Unlimited storage",
      "CDN-powered delivery",
      "One-click sharing",
      "Privacy controls",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and secure cloud infrastructure. Your data is protected 24/7 with automatic backups.",
    details: [
      "256-bit encryption",
      "SOC 2 compliant",
      "Automatic backups",
      "Role-based access control",
    ],
  },
  {
    icon: Palette,
    title: "Brand Customization",
    description: "White-label solution that matches your brand perfectly. Customize colors, logos, and viewer interface.",
    details: [
      "Custom branding",
      "Logo placement",
      "Color customization",
      "Custom domains",
    ],
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Integration",
    description: "Seamlessly integrate with your existing website, CRM, and automotive marketplace platforms.",
    details: [
      "WordPress plugin",
      "API access",
      "Marketplace integrations",
      "CRM connectors",
    ],
  },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-accent to-primary-glow text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
              <span className="text-primary-foreground font-semibold text-sm">Product Features</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Everything You Need for Professional 360° Imaging
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Powerful features designed for automotive professionals. No technical expertise required.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-foreground/80 text-sm">{detail}</span>
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
      <Footer />
    </div>
  );
};

export default FeaturesPage;
