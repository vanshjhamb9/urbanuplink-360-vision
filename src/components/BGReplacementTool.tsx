import { useState, useEffect } from "react";
import { Check, Camera, Eraser, Image } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const stages = [
  {
    id: 1,
    title: "Raw Image",
    description: "Original capture from smartphone",
    icon: Camera,
  },
  {
    id: 2,
    title: "BG Removal",
    description: "AI removes the background instantly",
    icon: Eraser,
  },
  {
    id: 3,
    title: "BG Replacement",
    description: "Professional studio background applied",
    icon: Image,
  },
];

const backgrounds = [
  { id: 1, name: "Studio White", gradient: "from-gray-50 via-white to-gray-100", textDark: true },
  { id: 2, name: "Showroom", gradient: "from-slate-300 via-slate-200 to-slate-100", textDark: true },
  { id: 3, name: "Outdoor", gradient: "from-sky-200 via-blue-100 to-emerald-100", textDark: true },
  { id: 4, name: "Night City", gradient: "from-slate-900 via-purple-900 to-indigo-900", textDark: false },
];

const BGReplacementTool = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [selectedBg, setSelectedBg] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev >= 3) {
          setSelectedBg((bg) => (bg + 1) % backgrounds.length);
          return 1;
        }
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm">
              Complete Transformation
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Background Removal &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Replacement
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch the complete transformation from raw capture to professional
            studio quality
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Stage buttons */}
          <div className="flex justify-center gap-2 md:gap-4 mb-8 flex-wrap">
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => {
                  setCurrentStage(stage.id);
                  setIsAutoPlaying(false);
                }}
                className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 rounded-full transition-all ${
                  currentStage >= stage.id
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStage > stage.id
                      ? "bg-white/20"
                      : currentStage === stage.id
                      ? "bg-white/20"
                      : "bg-muted"
                  }`}
                >
                  {currentStage > stage.id ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <stage.icon className="w-4 h-4" />
                  )}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="font-semibold text-sm">{stage.title}</div>
                </div>
                {index < stages.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-current to-transparent ml-2" />
                )}
              </button>
            ))}
          </div>

          {/* Main display area */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            {/* Stage 1: Raw Image with original messy background */}
            <div 
              className={`absolute inset-0 transition-all duration-700 ${
                currentStage === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={heroImage}
                alt="Raw image with original background"
                className="w-full h-full object-cover"
              />
              {/* Overlay to emphasize "raw/unprocessed" look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Raw indicator badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-orange-500 text-white rounded-full text-xs font-bold flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                RAW
              </div>
            </div>

            {/* Stage 2: Background Removed - Checkerboard with masked car */}
            <div 
              className={`absolute inset-0 transition-all duration-700 ${
                currentStage === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Checkerboard pattern (transparency indicator) */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #d4d4d4 25%, transparent 25%),
                    linear-gradient(-45deg, #d4d4d4 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #d4d4d4 75%),
                    linear-gradient(-45deg, transparent 75%, #d4d4d4 75%)
                  `,
                  backgroundSize: '30px 30px',
                  backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px',
                  backgroundColor: '#f0f0f0'
                }}
              />
              
              {/* Car with mask applied - showing only the car on transparent BG */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
              >
                <div 
                  className="relative w-full h-full"
                  style={{
                    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='52' rx='44' ry='30' fill='black'/%3E%3C/svg%3E")`,
                    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='52' rx='44' ry='30' fill='black'/%3E%3C/svg%3E")`,
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                  }}
                >
                  <img
                    src={heroImage}
                    alt="Car with background removed"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.4))",
                    }}
                  />
                </div>
              </div>
              
              {/* Transparency indicator badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-primary to-accent text-white rounded-full text-xs font-bold flex items-center gap-1.5">
                <Eraser className="w-3 h-3" />
                BG REMOVED
              </div>
            </div>

            {/* Stage 3: Background Replaced with selected gradient */}
            <div 
              className={`absolute inset-0 transition-all duration-700 ${
                currentStage === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Selected background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${backgrounds[selectedBg].gradient}`} />
              
              {/* Subtle lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20" />
              
              {/* Car with mask applied on new background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="relative w-full h-full"
                  style={{
                    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='52' rx='44' ry='30' fill='black'/%3E%3C/svg%3E")`,
                    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='52' rx='44' ry='30' fill='black'/%3E%3C/svg%3E")`,
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                  }}
                >
                  <img
                    src={heroImage}
                    alt="Car with new background"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.35))",
                    }}
                  />
                </div>
              </div>
              
              {/* Floor shadow/reflection */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 70%)',
                }}
              />
              
              {/* Replaced indicator badge */}
              <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                backgrounds[selectedBg].textDark ? 'bg-black/70 text-white' : 'bg-white/90 text-black'
              }`}>
                <Image className="w-3 h-3" />
                {backgrounds[selectedBg].name.toUpperCase()}
              </div>
            </div>

            {/* Info bar at bottom */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-black/60 backdrop-blur-lg rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                      {(() => {
                        const StageIcon = stages[currentStage - 1].icon;
                        return StageIcon ? <StageIcon className="w-5 h-5" /> : null;
                      })()}
                      {stages[currentStage - 1].title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {stages[currentStage - 1].description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {stages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentStage > index
                            ? "bg-gradient-to-r from-primary to-accent"
                            : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background selection - visible on stage 3 */}
          <div className={`mt-8 transition-all duration-500 ${currentStage === 3 ? 'opacity-100' : 'opacity-50'}`}>
            <p className="text-center text-sm text-muted-foreground mb-4">
              Choose a background:
            </p>
            <div className="flex justify-center gap-4">
              {backgrounds.map((bg, index) => (
                <button
                  key={bg.id}
                  onClick={() => {
                    setSelectedBg(index);
                    setCurrentStage(3);
                    setIsAutoPlaying(false);
                  }}
                  className={`group relative w-16 h-16 rounded-xl bg-gradient-to-br ${
                    bg.gradient
                  } transition-all overflow-hidden ${
                    selectedBg === index && currentStage === 3
                      ? "ring-4 ring-primary ring-offset-2 scale-110"
                      : "hover:scale-105 hover:ring-2 hover:ring-primary/50"
                  }`}
                  title={bg.name}
                >
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white text-[10px] font-medium">
                    {bg.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isAutoPlaying 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'bg-muted text-muted-foreground border border-border hover:border-primary/30'
              }`}
            >
              {isAutoPlaying ? '⏸ Auto-playing...' : '▶ Click to auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BGReplacementTool;
