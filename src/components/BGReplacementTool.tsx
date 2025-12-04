import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const stages = [
  {
    id: 1,
    title: "Raw Image",
    description: "Original capture from smartphone",
  },
  {
    id: 2,
    title: "BG Removal",
    description: "AI removes the background instantly",
  },
  {
    id: 3,
    title: "BG Replacement",
    description: "Professional studio background applied",
  },
];

const backgrounds = [
  { id: 1, name: "Studio White", gradient: "from-gray-100 to-white" },
  { id: 2, name: "Showroom", gradient: "from-slate-200 to-slate-100" },
  { id: 3, name: "Outdoor", gradient: "from-blue-100 to-green-100" },
  { id: 4, name: "Night City", gradient: "from-slate-900 to-purple-900" },
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
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getImageStyle = () => {
    switch (currentStage) {
      case 1:
        return {};
      case 2:
        return {
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
        };
      case 3:
        return {
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
        };
      default:
        return {};
    }
  };

  const getBackgroundStyle = () => {
    if (currentStage === 1) {
      return "bg-gradient-to-br from-gray-400 to-gray-600";
    }
    if (currentStage === 2) {
      return "bg-[repeating-conic-gradient(#e5e5e5_0%_25%,#ffffff_0%_50%)] bg-[length:20px_20px]";
    }
    return `bg-gradient-to-br ${backgrounds[selectedBg].gradient}`;
  };

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
          <div className="flex justify-center gap-4 mb-8">
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => {
                  setCurrentStage(stage.id);
                  setIsAutoPlaying(false);
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
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
                    <span className="text-sm font-bold">{stage.id}</span>
                  )}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="font-semibold text-sm">{stage.title}</div>
                </div>
                {index < stages.length - 1 && (
                  <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-current to-transparent ml-2" />
                )}
              </button>
            ))}
          </div>

          <div
            className={`relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${getBackgroundStyle()}`}
          >
            <img
              src={heroImage}
              alt="Car transformation"
              className="w-full h-full object-cover transition-all duration-700"
              style={getImageStyle()}
            />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-lg rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">
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
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentStage > index
                            ? "bg-primary"
                            : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {currentStage === 3 && (
            <div className="mt-8">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Choose a background:
              </p>
              <div className="flex justify-center gap-4">
                {backgrounds.map((bg, index) => (
                  <button
                    key={bg.id}
                    onClick={() => {
                      setSelectedBg(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                      bg.gradient
                    } transition-all ${
                      selectedBg === index
                        ? "ring-4 ring-primary ring-offset-2 scale-110"
                        : "hover:scale-105"
                    }`}
                    title={bg.name}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BGReplacementTool;
