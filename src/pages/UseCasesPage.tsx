import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";
import {
  Building2,
  ShoppingCart,
  Wrench,
  TrendingUp,
  FileCheck,
  Camera,
  CheckCircle2,
  Sparkles,
  Layout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import indianDealership from "@/assets/indian-dealership.png";
import indianHandover from "@/assets/automotive dealership.jpg";
import indianAuction from "@/assets/used car platform.jpg";
import indianFleet from "@/assets/Fleet Management.png";
import indianDetailing from "@/assets/Premium Detailing.png";
import indianInspection from "@/assets/indian-inspection.png";
import indianStudio from "@/assets/car-photo-studio.jpg";
import image25 from "@/assets/image25.png";
import insuranceInspectionImg from "@/assets/insurance-inspection.jpg";

const useCases = [
  {
    icon: Building2,
    title: "Automotive Dealerships",
    description:
      "Transform your digital showroom with immersive 360° experiences that drive engagement and increase sales conversions.",
    stats: "78% increase in qualified leads",
    benefits: [
      "Attract more online buyers with premium listings",
      "Reduce time-to-sale with virtual test drives",
      "Stand out from competitors",
      "24/7 virtual showroom",
    ],
    image: indianHandover,
  },
  {
    icon: ShoppingCart,
    title: "Used Car Platforms",
    description:
      "Enable remote bidding and buying with confidence. Buyers see every detail, reducing disputes and returns.",
    stats: "45% higher bid participation",
    benefits: [
      "Build buyer trust with transparent views",
      "Reduce post-sale disputes significantly",
      "Enable remote inspections",
      "Faster transaction closings",
    ],
    image: indianAuction,
  },
  {
    icon: TrendingUp,
    title: "Fleet Management",
    description:
      "Document vehicle condition with precision. Perfect for lease returns, insurance claims, and maintenance records.",
    stats: "60% faster processing",
    benefits: [
      "Accurate condition documentation",
      "Streamlined lease return process",
      "Insurance claim evidence",
      "Maintenance history tracking",
    ],
    image: indianFleet,
  },
  {
    icon: Wrench,
    title: "Premium Detailing",
    description:
      "Before-and-after 360° documentation showcases your craftsmanship and builds customer trust.",
    stats: "3x more referrals",
    benefits: [
      "Visual proof of quality work",
      "Marketing material for social media",
      "Customer satisfaction increase",
      "Premium pricing justification",
    ],
    image: indianDetailing,
  },
  {
    icon: FileCheck,
    title: "Insurance & Inspection",
    description:
      "Comprehensive visual documentation for claims, inspections, and vehicle appraisals.",
    stats: "90% faster claims",
    benefits: [
      "Complete damage documentation",
      "Reduce fraud and disputes",
      "Remote inspection capability",
      "Historical condition records",
    ],
    image: insuranceInspectionImg,
  },
  {
    icon: Camera,
    title: "Car Photography Studios",
    description:
      "Expand your service offerings with cutting-edge 360° imaging technology.",
    stats: "5x service value",
    benefits: [
      "New revenue stream",
      "Premium service offering",
      "Faster shoot-to-delivery",
      "Client retention increase",
    ],
    image: indianStudio,
  },
  {
    icon: Sparkles,
    title: "AI-Powered Background Studio",
    description:
      "Instantly transform any outdoor capture into a professional studio-quality 360° view using our advanced background replacement technology.",
    stats: "95% background removal accuracy",
    benefits: [
      "Professional look for every vehicle",
      "Consistent branding across inventory",
      "Eliminate distracting environments",
      "Cost-effective studio alternative",
    ],
    image: image25, // Fallback for missing image24.png
  },
];

const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center p-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20">
            <span className="px-3 py-1 text-sm font-semibold text-accent">
              Use Cases
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Solutions for Every Automotive Need
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            From dealerships to detailers, see how UrbanUplink transforms
            businesses across the automotive industry.
          </p>
        </div>
      </section>

      {/* Use Cases List */}
      <section className="pb-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-32">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className="flex-1 w-full group perspective-1000">
                  <div className="relative transform transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur-3xl opacity-50 transition-opacity duration-500" />
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="relative rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover border border-border/50 bg-muted"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {useCase.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>

                  <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                    <TrendingUp className="w-4 h-4 text-accent mr-2" />
                    <span className="text-accent font-semibold">
                      {useCase.stats}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-medium">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl isolate">
            <img
              src={indianDealership}
              alt="Modern dealership"
              className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80 mix-blend-multiply -z-10" />

            <div className="p-12 md:p-24 text-center max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Do not wish to restrict to Indian audience alone 
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                The industry standard for automotive 360° imaging.
                transformative results, guaranteed.
              </p>
              <Button
                size="xl"
                className="bg-white text-primary hover:bg-white/90 border-0 shadow-lg font-bold text-lg px-10"
                asChild
              >
                <a href="/contact">Get Started Today</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FloatingDemo />
      <Footer />
    </div>
  );
};

export default UseCasesPage;
