import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import tataHarrier from "@/assets/2023-Tata-Harrier-facelift-dark-edition-front-.jpg";
import sierraExterior from "@/assets/sierra-exterior.jpg";
import sierraInterior from "@/assets/sierra-interior.jpg";

// Indian car images for header carousel - Using Tata Harrier as primary
const heroImages = [
  tataHarrier,
  sierraExterior,
  sierraInterior,
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Image Carousel Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
        <img
              src={img}
              alt={`Luxury car ${index + 1} - Real 360° car experience captured with smartphone`}
          className="w-full h-full object-contain md:object-cover"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
          </div>
        ))}
        {/* Lighter overlays to keep background visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/50 z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-20" />
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all hover:scale-110 group"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-primary group-hover:text-accent" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all hover:scale-110 group"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-primary group-hover:text-accent" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentImageIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-8 bg-primary"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-30">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border-2 border-primary/30 shadow-lg">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-sm">
              Real 360° Experience
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Real 360° Car Experience –{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
              No 3D Model Required
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed drop-shadow-lg font-medium">
            Capture and showcase vehicles using your smartphone – Anytime,
            Anywhere. Transform your dealership with AI-powered 360° imaging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="group bg-gradient-to-r from-primary to-accent text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-xl"
            >
              <a href="/uplai.apk" download className="flex items-center">
                <Download className="mr-2 w-5 h-5" />
                Download App
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="group bg-white/90 backdrop-blur-sm text-primary hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-primary/30 font-semibold"
            >
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1 drop-shadow-lg">
                500+
              </div>
              <div className="text-sm text-white/90 font-medium">
                Dealerships
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1 drop-shadow-lg">
                2M+
              </div>
              <div className="text-sm text-white/90 font-medium">
                Cars Captured
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1 drop-shadow-lg">
                40%
              </div>
              <div className="text-sm text-white/90 font-medium">
                Sales Increase
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
