import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, MapPin, Calendar, Fuel, Gauge, Eye, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import tataHarrier from "@/assets/2023-Tata-Harrier-facelift-dark-edition-front-.jpg";
import sierraExterior from "@/assets/sierra-exterior.jpg";
import sierraInterior from "@/assets/sierra-interior.jpg";
import bgRemoved from "@/assets/bg-removed.png";

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

const hotspotsByAngle = [
  // Front View
  [
    { x: 18, y: 45, label: "Sequential DRLs", description: "Signature connected LED DRLs" },
    { x: 50, y: 52, label: "Parametric Grille", description: "Dark chrome accent grille with radar" },
    { x: 82, y: 45, label: "LED Projectors", description: "Vertically stacked headlamps" },
    { x: 50, y: 80, label: "ADAS Radar", description: "Level 2 ADAS Sensor Module" },
    { x: 15, y: 75, label: "LED Fog Lamps", description: "Cornering function enabled" },
  ],
  // Side View
  [
    { x: 28, y: 65, label: "19\" Aero Alloys", description: "Diamond cut dark finish alloy wheels" },
    { x: 50, y: 22, label: "Panoramic Sunroof", description: "Voice assisted panoramic sunroof" },
    { x: 72, y: 65, label: "Rear Disc Brakes", description: "Standard all-wheel disc brakes" },
    { x: 55, y: 45, label: "Chrome Handles", description: "Request sensors on both sides" },
    { x: 50, y: 85, label: "Side Cladding", description: "Muscular wheel arch cladding" },
  ],
  // Rear View
  [
    { x: 50, y: 40, label: "Connected Tail Lamp", description: "End-to-end LED tail lamp bar" },
    { x: 50, y: 15, label: "Shark Fin Antenna", description: "Aerodynamic connectivity module" },
    { x: 50, y: 75, label: "Power Tailgate", description: "Gesture controlled powered tailgate" },
    { x: 50, y: 30, label: "Rear Wiper", description: "Intermittent rear wiper with washer" },
    { x: 25, y: 65, label: "Reflectors", description: "Safety reflectors with surround chrome" },
  ],
  // Interior
  [
    { x: 50, y: 40, label: "12.3\" Infotainment", description: "Cinematic touchscreen with JBL audio" },
    { x: 70, y: 55, label: "Digital Cluster", description: "10.25\" configurable instrument cluster" },
    { x: 20, y: 65, label: "Ventilated Seats", description: "Premium Benecke-Kaliko leather upholstery" },
    { x: 50, y: 65, label: "Wireless Charger", description: "45W fast wireless charging pad" },
    { x: 50, y: 20, label: "Mood Lighting", description: "Ambient mood lighting on dashboard" },
  ]
];

const MarketplaceShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % carImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + carImages.length) % carImages.length);

  const currentHotspots = hotspotsByAngle[currentImage] || [];

  return (
    <section className="py-8 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
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
          {/* Mobile Layout: Stacked with Full Width Image */}
          <div className="bg-card md:rounded-3xl shadow-none md:shadow-2xl overflow-hidden border-0 md:border border-border -mx-4 md:mx-0">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative order-1">
                <div className="relative aspect-[4/3] md:aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200">
                  {!showVideo ? (
                    <>
                      <img
                        src={carImages[currentImage].src}
                        alt={carImages[currentImage].angle}
                        className="w-full h-full object-cover md:object-contain"
                      />

                      {/* Hotspots */}
                      <TooltipProvider delayDuration={0}>
                        {currentHotspots.map((hotspot, index) => (
                          <Tooltip key={index}>
                            <TooltipTrigger asChild>
                              <button
                                className={`absolute w-6 h-6 md:w-6 md:h-6 rounded-full bg-primary/90 border border-white shadow-xl transition-all duration-300 z-30 flex items-center justify-center animate-pulse hover:animate-none hover:scale-125 ${activeHotspot === index ? "scale-125 bg-accent ring-4 ring-accent/20" : ""
                                  }`}
                                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, animationDuration: '3s' }} // Slower animation
                                onClick={() => setActiveHotspot(activeHotspot === index ? null : index)} // Click for mobile
                                onMouseEnter={() => setActiveHotspot(index)}
                                onMouseLeave={() => setActiveHotspot(null)}
                              >
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-[200px] z-50 bg-black/90 border-white/10 text-white">
                              <div className="font-bold text-sm mb-0.5">{hotspot.label}</div>
                              <div className="text-xs text-white/70">{hotspot.description}</div>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>

                      {/* Navigation Controls */}
                      <button
                        onClick={prevImage}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                        {carImages.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${currentImage === idx ? "w-6 bg-white" : "w-1.5 bg-white/50"
                              }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <div className="text-center text-white">
                        {/* Video Placeholder Content */}
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-spin-slow">
                          <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                        </div>
                        <p className="text-base md:text-lg font-semibold">360° Video Playing</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Thumbnails - Hidden on mobile to clean up layout */}
                <div className="hidden md:flex gap-2 p-4 bg-muted/30 overflow-x-auto absolute bottom-0 left-0 right-0 translate-y-full opacity-0 lg:static lg:translate-y-0 lg:opacity-100 lg:bg-muted/50 transition-all">
                  {carImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImage(index);
                        setShowVideo(false);
                      }}
                      className={`flex-1 min-w-[60px] aspect-video rounded-lg overflow-hidden border-2 transition-all ${currentImage === index && !showVideo
                        ? "border-primary scale-105"
                        : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                    >
                      <img src={img.src} alt={img.angle} className="w-full h-full object-contain bg-muted/30" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-8 order-2 bg-card">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 bg-primary/10 text-primary text-[10px] md:text-xs font-semibold rounded-full mb-2">
                        Featured Listing
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold">2024 Tata Harrier</h3>
                      <p className="text-sm md:text-base text-muted-foreground">Dark Edition • Automatic</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        ₹24.5L
                      </div>
                      <p className="text-xs text-muted-foreground">On-road Mumbai</p>
                    </div>
                  </div>

                  {/* Mobile: Horizontal Scroll Specs. Desktop: Grid */}
                  <div className="flex overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-2 gap-3 md:gap-4 -mx-6 px-6 md:mx-0 md:px-0 snap-x hide-scrollbar">
                    {carSpecs.map((spec, index) => (
                      <div key={index} className="flex-shrink-0 w-[140px] md:w-auto snap-center flex items-center gap-3 p-3 bg-muted/50 rounded-xl border border-border/50">
                        <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shadow-sm">
                          <spec.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{spec.label}</div>
                          <div className="text-sm font-semibold">{spec.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium">360° Inspection Report</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This vehicle has passed our 140-point quality check. Inspect every detail with the interactive view above.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Button className="col-span-2 bg-gradient-to-r from-primary to-accent text-white h-12 text-base shadow-lg hover:shadow-xl transition-all">
                      Contact Seller
                    </Button>
                    <Button variant="outline" className="h-11">
                      <Heart className="w-4 h-4 mr-2" /> Save
                    </Button>
                    <Button variant="outline" className="h-11">
                      <Share2 className="w-4 h-4 mr-2" /> Share
                    </Button>
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
