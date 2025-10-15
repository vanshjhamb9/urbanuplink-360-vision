import { Building2, Car, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import dealershipImage from "@/assets/dealership.jpg";

const useCases = [
  {
    icon: Building2,
    title: "Car Dealerships",
    description: "Showcase your entire inventory with stunning 360° views that drive online engagement and in-person visits.",
    stats: "78% increase in qualified leads",
  },
  {
    icon: Car,
    title: "Auto Auctions",
    description: "Enable remote bidding with confidence. Buyers see every angle, every detail, reducing post-sale disputes.",
    stats: "45% higher bid participation",
  },
  {
    icon: Users,
    title: "Fleet Management",
    description: "Document vehicle condition with precision. Perfect for lease returns, insurance, and maintenance records.",
    stats: "60% faster processing",
  },
  {
    icon: Sparkles,
    title: "Premium Detailing",
    description: "Before-and-after 360° documentation that showcases your craftsmanship and builds customer trust.",
    stats: "3x more referrals",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for the Entire Automotive Industry
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            From dealerships to detailers, UrbanUplink transforms how you present vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="bg-background/50 backdrop-blur border-2 hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-3">{useCase.description}</p>
                    <div className="inline-block px-3 py-1 bg-accent/10 rounded-full">
                      <span className="text-sm font-semibold text-accent">{useCase.stats}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={dealershipImage}
            alt="Modern car dealership showroom"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-2">
              Join 500+ Dealerships Already Using UrbanUplink
            </h3>
            <p className="text-lg text-secondary-foreground/90">
              The industry standard for automotive 360° imaging
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
