import { Building2, ShoppingCart, Wrench, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    icon: Building2,
    title: "Dealerships",
    description: "Transform your showroom online with immersive 360° views that increase engagement and drive sales.",
    benefits: ["Higher conversion rates", "Reduced return visits", "24/7 virtual showroom"],
  },
  {
    icon: ShoppingCart,
    title: "Online Marketplaces",
    description: "Stand out from competitors with premium 360° listings that build buyer confidence.",
    benefits: ["Premium listings", "Faster sales cycles", "Higher selling prices"],
  },
  {
    icon: Wrench,
    title: "Service & Detailing",
    description: "Showcase your craftsmanship with before-and-after 360° documentation.",
    benefits: ["Visual proof of work", "Customer trust", "Marketing material"],
  },
  {
    icon: TrendingUp,
    title: "Fleet & Rental",
    description: "Streamline vehicle documentation and condition reporting with automated 360° capture.",
    benefits: ["Condition tracking", "Insurance claims", "Asset management"],
  },
];

const Industries = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold text-sm">Industries We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for the Entire{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Automotive Ecosystem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From dealerships to detailers, UrbanUplink transforms how the industry presents vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 hover:border-accent/50 bg-card/50 backdrop-blur overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <industry.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
