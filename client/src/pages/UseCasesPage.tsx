import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";
import { Building2, ShoppingCart, Wrench, TrendingUp, FileCheck, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dealershipImage from "@/assets/dealership.jpg";

const useCases = [
  {
    icon: Building2,
    title: "Automotive Dealerships",
    description: "Transform your digital showroom with immersive 360° experiences that drive engagement and increase sales conversions.",
    stats: "78% increase in qualified leads",
    benefits: [
      "Attract more online buyers with premium listings",
      "Reduce time-to-sale with virtual test drives",
      "Stand out from competitors",
      "24/7 virtual showroom",
    ],
    image: "https://images.unsplash.com/photo-1562882168-6bc0dc1d1948?w=800&h=600&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "Used Car Platforms",
    description: "Enable remote bidding and buying with confidence. Buyers see every detail, reducing disputes and returns.",
    stats: "45% higher bid participation",
    benefits: [
      "Build buyer trust with transparent views",
      "Reduce post-sale disputes significantly",
      "Enable remote inspections",
      "Faster transaction closings",
    ],
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Fleet Management",
    description: "Document vehicle condition with precision. Perfect for lease returns, insurance claims, and maintenance records.",
    stats: "60% faster processing",
    benefits: [
      "Accurate condition documentation",
      "Streamlined lease return process",
      "Insurance claim evidence",
      "Maintenance history tracking",
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
  },
  {
    icon: Wrench,
    title: "Premium Detailing",
    description: "Before-and-after 360° documentation showcases your craftsmanship and builds customer trust.",
    stats: "3x more referrals",
    benefits: [
      "Visual proof of quality work",
      "Marketing material for social media",
      "Customer satisfaction increase",
      "Premium pricing justification",
    ],
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop",
  },
  {
    icon: FileCheck,
    title: "Insurance & Inspection",
    description: "Comprehensive visual documentation for claims, inspections, and vehicle appraisals.",
    stats: "90% faster claims",
    benefits: [
      "Complete damage documentation",
      "Reduce fraud and disputes",
      "Remote inspection capability",
      "Historical condition records",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  },
  {
    icon: Camera,
    title: "Car Photography Studios",
    description: "Expand your service offerings with cutting-edge 360° imaging technology.",
    stats: "5x service value",
    benefits: [
      "New revenue stream",
      "Premium service offering",
      "Faster shoot-to-delivery",
      "Client retention increase",
    ],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
  },
];

const UseCasesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-secondary via-secondary to-primary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary-foreground/10 rounded-full border border-secondary-foreground/20">
              <span className="text-secondary-foreground font-semibold text-sm">Use Cases</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Solutions for Every Automotive Need
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8">
              From dealerships to detailers, see how UrbanUplink transforms businesses across the automotive industry
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="border-2 hover:border-accent/50 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                        <useCase.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-3">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                        {useCase.description}
                      </p>
                      
                      <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                        <span className="text-accent font-bold">{useCase.stats}</span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-accent" />
                            </div>
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={dealershipImage}
              alt="Modern dealership"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12 text-center">
              <h3 className="text-4xl font-bold text-secondary-foreground mb-4">
                Join 500+ Businesses Using UrbanUplink
              </h3>
              <p className="text-xl text-secondary-foreground/90 mb-6">
                The industry standard for automotive 360° imaging
              </p>
              <Button variant="secondary" size="xl">
                Get Started Today
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
