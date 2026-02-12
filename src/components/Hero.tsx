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
    <section className="relative min-h-[100dvh] flex flex-col lg:block overflow-hidden bg-background">
      {/* DESKTOP: Background Image Carousel */}
      <div className="hidden lg:block absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img
              src={img}
              alt={`Luxury car ${index + 1} - Real 360° car experience captured with smartphone`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlays for Desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-20" />
      </div>

      {/* MOBILE/TAB: Top Image Section */}
      <div className="lg:hidden relative w-full h-[45vh] bg-muted/20 overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Added gradient overlay at bottom of image for blending */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
            <img
              src={img}
              alt={`Luxury car ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls - Commented out as per original */}
      {/* <button
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
      </button> */}

      {/* Carousel Indicators - Removed as per new layout, or can be added conditionally */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentImageIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
              ? "w-8 bg-primary"
              : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div> */}

      {/* CONTENT SECTION */}
      <div className="relative z-30 flex-1 flex flex-col justify-center lg:h-screen lg:justify-center">
        <div className="container mx-auto px-6 py-8 mt-[2rem] lg:py-0 lg:px-6">
          <div className="max-w-3xl mx-auto lg:mx-0 lg:text-center w-full"> {/* Align left on mobile, center on desktop? User asked for 'different layout'. Let's center everything for consistency or try left aligned on mobile for readability. Centered usually looks best for 'Hero'. Let's stick to Centered for now as it's safer. */}

            <div className="flex justify-center lg:justify-center mb-6">
              <div className="inline-block px-4 py-2 bg-primary/10 lg:bg-white/10 backdrop-blur-sm rounded-full border border-primary/20 lg:border-white/20 shadow-sm">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent lg:text-white font-bold text-xs lg:text-sm uppercase tracking-wider">
                  Real 360° Experience
                </span>
              </div>
            </div>

            <h1 className="text-center font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-foreground lg:text-white drop-shadow-none lg:drop-shadow-2xl">
              Real 360° Car Experience –{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-primary lg:via-secondary lg:to-accent">
                No 3D Model Required
              </span>
            </h1>

            <p className="text-center text-lg sm:text-xl lg:text-2xl text-muted-foreground lg:text-white/95 mb-8 leading-relaxed lg:drop-shadow-lg font-medium max-w-2xl mx-auto">
              Capture and showcase vehicles using your smartphone – Anytime,
              Anywhere. Transform your dealership with AI-powered 360° imaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                variant="hero"
                size="xl"
                className="group bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-lg w-full sm:w-auto"
              >
                <a href="/uplai.apk" download className="flex items-center justify-center w-full">
                  <Download className="mr-2 w-5 h-5" />
                  Download App
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="group w-full sm:w-auto hover:shadow-xl hover:scale-105 transition-all duration-300 border-primary/20 lg:border-white/20 bg-background/50 lg:bg-white/10 backdrop-blur-sm lg:text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="https://calendly.com/admin-urbanuplink/30min" target="_blank" rel="noopener noreferrer">
                  Request Demo
                </a>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50 lg:border-white/20">
              <div className="text-center lg:text-left text-center">
                <div className="text-2xl lg:text-4xl font-bold text-primary lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-primary lg:to-accent mb-1">
                  500+
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground lg:text-white/90 font-medium uppercase tracking-wide">
                  Dealerships
                </div>
              </div>
              <div className="text-center lg:text-left text-center">
                <div className="text-2xl lg:text-4xl font-bold text-primary lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-primary lg:to-accent mb-1">
                  2M+
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground lg:text-white/90 font-medium uppercase tracking-wide">
                  Cars Captured
                </div>
              </div>
              <div className="text-center lg:text-left text-center">
                <div className="text-2xl lg:text-4xl font-bold text-primary lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-primary lg:to-accent mb-1">
                  40%
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground lg:text-white/90 font-medium uppercase tracking-wide">
                  Sales Increase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce Indicator - Desktop Only */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
