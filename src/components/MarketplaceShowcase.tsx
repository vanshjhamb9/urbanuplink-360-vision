import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, MapPin, Calendar, Fuel, Gauge, Info, Eye, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import heroImage from "@/assets/hero-car.jpg";

const carImages = [
  { src: heroImage, angle: "Front" },
  { src: heroImage, angle: "Side" },
  { src: heroImage, angle: "Rear" },
  { src: heroImage, angle: "Interior" },
];

const carSpecs = [
  { icon: Calendar, label: "Year", value: "2024" },
  { icon: Gauge, label: "Mileage", value: "12,500 km" },
  { icon: Fuel, label: "Fuel", value: "Petrol" },
  { icon: MapPin, label: "Location", value: "Mumbai" },
];

const hotspots = [
  { x: 20, y: 30, label: "LED Headlights", description: "Adaptive LED with auto high beam" },
  { x: 45, y: 50, label: "Alloy Wheels", description: "18-inch diamond cut alloys" },
  { x: 75, y: 35, label: "Sunroof", description: "Panoramic glass sunroof" },
  { x: 60, y: 70, label: "Rear Spoiler", description: "Aerodynamic sport spoiler" },
];

const MarketplaceShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % carImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + carImages.length) % carImages.length);

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm">
              Marketplace Ready
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Your Listings,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Supercharged
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how your vehicle listings stand out with professional 360° content
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200">
                  {!showVideo ? (
                    <>
                      <img
                        src={carImages[currentImage].src}
                        alt={carImages[currentImage].angle}
                        className="w-full h-full object-cover"
                      />

                      <TooltipProvider>
                        {hotspots.map((hotspot, index) => (
                          <Tooltip key={index}>
                            <TooltipTrigger asChild>
                              <button
                                className={`absolute w-6 h-6 rounded-full bg-primary/80 border-2 border-white shadow-lg transition-all hover:scale-125 ${
                                  activeHotspot === index ? "scale-125 bg-accent" : ""
                                }`}
                                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                                onMouseEnter={() => setActiveHotspot(index)}
                                onMouseLeave={() => setActiveHotspot(null)}
                              >
                                <Info className="w-3 h-3 text-white mx-auto" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-xs">
                              <div className="font-semibold">{hotspot.label}</div>
                              <div className="text-xs text-muted-foreground">{hotspot.description}</div>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>

                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-spin-slow">
                          <Play className="w-8 h-8 ml-1" />
                        </div>
                        <p className="text-lg font-semibold">360° Video Playing</p>
                        <p className="text-sm text-white/60">Interactive 360° view</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 p-4 bg-muted/50">
                  {carImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImage(index);
                        setShowVideo(false);
                      }}
                      className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        currentImage === index && !showVideo
                          ? "border-primary scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img.src} alt={img.angle} className="w-full h-full object-cover" />
                    </button>
                  ))}
                  <button
                    onClick={() => setShowVideo(true)}
                    className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all relative ${
                      showVideo ? "border-primary scale-105" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={heroImage} alt="360 Video" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <Play className="w-4 h-4 text-white ml-0.5" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      Featured
                    </span>
                    <h3 className="text-2xl font-bold mt-2">2024 Premium Sports Sedan</h3>
                    <p className="text-muted-foreground">Luxury Performance Edition</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ₹45.5L
                    </div>
                    <p className="text-sm text-muted-foreground">Ex-showroom</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {carSpecs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <spec.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{spec.label}</div>
                        <div className="font-semibold">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 mb-6 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="font-semibold">360° Interactive View Available</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Explore every angle with our immersive 360° viewer. Click the play button to start.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Contact Seller
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>2,847 views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>156 saves</span>
                    </div>
                    <span className="ml-auto">Listed 2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceShowcase;
