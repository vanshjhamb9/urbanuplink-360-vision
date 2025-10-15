import { Check } from "lucide-react";
import techImage from "@/assets/360-tech.jpg";

const benefits = [
  "No expensive 3D modeling required",
  "Real photography, real results",
  "Setup in under 15 minutes",
  "Compatible with any camera system",
  "Cloud-based processing",
  "Instant online publishing",
];

const TechShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src={techImage}
                alt="360-degree car photography technology"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-semibold text-sm">Technology That Works</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary 360° Imaging Without the Complexity
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              UrbanUplink uses advanced camera arrays and AI-powered stitching to create 
              seamless 360-degree experiences. Unlike traditional 3D modeling that takes 
              days and costs thousands, our solution captures reality in minutes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-semibold text-foreground">Real-time Processing</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our AI processes images as they're captured, delivering publish-ready 360° 
                views in under 10 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
