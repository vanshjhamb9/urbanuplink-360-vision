import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury car in professional studio - Real 360° car experience captured with smartphone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold text-sm">Real 360° Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Real 360° Car Experience – No 3D Model Required
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Capture and showcase vehicles using your smartphone – Anytime, Anywhere. Transform your dealership with AI-powered 360° imaging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="group">
              <a href="/uplai.apk" download>
                Download Apk
              </a>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Dealerships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">2M+</div>
              <div className="text-sm text-muted-foreground">Cars Captured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">40%</div>
              <div className="text-sm text-muted-foreground">Sales Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
