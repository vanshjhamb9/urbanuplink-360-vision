import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, MapPin, Calendar, Fuel, Gauge, Info, Eye, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import tataHarrier from "@/assets/2023-Tata-Harrier-facelift-dark-edition-front-.jpg";
import sierraExterior from "@/assets/sierra-exterior.jpg";
import sierraInterior from "@/assets/sierra-interior.jpg";
import bgRemoved from "@/assets/bg-removed.png";
import tata_Harrier from "@/assets/tata_harrier.avif"

const carImages = [
  { src: tataHarrier, angle: "Front View", label: "Front" },
  { src: sierraExterior, angle: "Side View", label: "Side" },
  { src: bgRemoved, angle: "Rear View", label: "Rear" },
  { src: sierraInterior, angle: "Interior", label: "Interior" },
];

const carSpecs = [
  { icon: Calendar, label: "Year", value: "2024" },
  { icon: Gauge, label: "Mileage", value: "8,500 km" },
  { icon: Fuel, label: "Fuel", value: "Diesel" },
  { icon: MapPin, label: "Location", value: "Mumbai, MH" },
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
    <section className="py-12 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 md:w-96 md:h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 md:w-96 md:h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-xs md:text-sm">
              Marketplace Ready
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Your Listings,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Supercharged
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            See how your vehicle listings stand out with professional 360° content
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-border">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200">
                  {!showVideo ? (
                    <>
                      <img
                        src={carImages[currentImage].src}
                        alt={carImages[currentImage].angle}
                        className="w-full h-full object-contain"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                        }}
                      />

                      {/* Professional Plate Masking for Front/Rear views */}
                      {(carImages[currentImage].label === "Front" || carImages[currentImage].label === "Rear") && (
                        <div
                          className="absolute pointer-events-none overflow-hidden rounded-sm"
                          style={{
                            left: '50%',
                            top: '78%',
                            width: '22%',
                            height: '4%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 20,
                          }}
                        >
                          <div className="absolute inset-0 backdrop-blur-md bg-black/40" />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-1/2 w-full animate-pulse" />
                        </div>
                      )}

                      <TooltipProvider>
                        {hotspots.map((hotspot, index) => (
                          <Tooltip key={index}>
                            <TooltipTrigger asChild>
                              <button
                                className={`absolute w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/80 border-2 border-white shadow-lg transition-all hover:scale-125 ${activeHotspot === index ? "scale-125 bg-accent" : ""
                                  }`}
                                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                                onMouseEnter={() => setActiveHotspot(index)}
                                onMouseLeave={() => setActiveHotspot(null)}
                              >
                                <Info className="w-2.5 h-2.5 md:w-3 md:h-3 text-white mx-auto" />
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
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-spin-slow">
                          <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                        </div>
                        <p className="text-base md:text-lg font-semibold">360° Video Playing</p>
                        <p className="text-xs md:text-sm text-white/60">Interactive 360° view</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-1.5 md:gap-2 p-2 md:p-4 bg-muted/50 overflow-x-auto">
                  {carImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImage(index);
                        setShowVideo(false);
                      }}
                      className={`flex-1 min-w-[60px] md:min-w-0 aspect-video rounded md:rounded-lg overflow-hidden border-2 transition-all ${currentImage === index && !showVideo
                          ? "border-primary scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                    >
                      <img src={img.src} alt={img.angle} className="w-full h-full object-contain bg-muted/30 rounded" />
                    </button>
                  ))}
                  <button
                    onClick={() => setShowVideo(true)}
                    className={`flex-1 min-w-[60px] md:min-w-0 aspect-video rounded md:rounded-lg overflow-hidden border-2 transition-all relative ${showVideo ? "border-primary scale-105" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                  >
                    <img src={tataHarrier} alt="360 Video" className="w-full h-full object-contain bg-muted/30 rounded" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <Play className="w-3 h-3 md:w-4 md:h-4 text-white ml-0.5" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-4 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 bg-primary/10 text-primary text-[10px] md:text-xs font-semibold rounded-full">
                      Featured Listing
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2">2024 Tata Harrier Dark Edition</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Adventure Plus AWD - Premium SUV</p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ₹24.5L
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">Ex-showroom Mumbai</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                  {carSpecs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-muted/50 rounded-lg md:rounded-xl">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <spec.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] md:text-xs text-muted-foreground">{spec.label}</div>
                        <div className="text-sm md:text-base font-semibold">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-3 md:p-4 mb-4 md:mb-6 border border-primary/20">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <Eye className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    <span className="text-sm md:text-base font-semibold">360° Interactive View Available</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Explore every angle with our immersive 360° viewer. Click the play button to start.
                  </p>
                </div>

                <div className="flex gap-2 md:gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 h-10 md:h-11 text-sm md:text-base">
                    Contact Seller
                  </Button>
                  <Button variant="outline" size="icon" className="h-10 w-10 md:h-11 md:w-11">
                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-10 w-10 md:h-11 md:w-11">
                    <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </div>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>2,847 views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>156 saves</span>
                    </div>
                    <span className="ml-auto w-full md:w-auto text-right">Listed 2 days ago</span>
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
