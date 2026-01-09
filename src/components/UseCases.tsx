import { Building2, Car, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import indianDealership from "@/assets/indian-dealership.png";
import indianAuction from "@/assets/indian-auction.png";
import indianFleet from "@/assets/indian-fleet.png";
import indianDetailing from "@/assets/indian-detailing.png";
import indianHandover from "@/assets/indian-dealership-handover.png";

const useCases = [
  {
    icon: Building2,
    title: "Car Dealerships",
    description: "Showcase your entire inventory with stunning 360° views that drive online engagement and in-person visits.",
    stats: "78% increase in qualified leads",
    image: indianHandover,
  },
  {
    icon: Car,
    title: "Auto Auctions",
    description: "Enable remote bidding with confidence. Buyers see every angle, every detail, reducing post-sale disputes.",
    stats: "45% higher bid participation",
    image: indianAuction,
  },
  {
    icon: Users,
    title: "Fleet Management",
    description: "Document vehicle condition with precision. Perfect for lease returns, insurance, and maintenance records.",
    stats: "60% faster processing",
    image: indianFleet,
  },
  {
    icon: Sparkles,
    title: "Premium Detailing",
    description: "Before-and-after 360° documentation that showcases your craftsmanship and builds customer trust.",
    stats: "3x more referrals",
    image: indianDetailing,
  },
];

const UseCases = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for the Indian Automotive Industry
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            From dealerships to detailers, UrbanUplink transforms how you present vehicles across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="group bg-background/50 backdrop-blur border-2 hover:border-accent transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <div className="h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60" />
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                    <useCase.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 pt-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="inline-block px-3 py-1 bg-accent/10 rounded-full">
                    <span className="text-sm font-semibold text-accent">{useCase.stats}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src={indianDealership}
            alt="Modern car dealership showroom in India"
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Join 500+ Dealerships Across India
            </h3>
            <p className="text-xl text-secondary-foreground/90 max-w-2xl mx-auto">
              The industry standard for automotive 360° imaging, trusted by top brands from Mumbai to Delhi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
