import { useState, useEffect } from "react";
import { Camera, Eraser, Image, Shield, Sparkles, Play, Pause, RotateCcw, Maximize2 } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const workflowSteps = [
  { icon: Camera, label: "Capture Images", color: "from-blue-500 to-cyan-500" },
  { icon: Eraser, label: "Remove BG", color: "from-primary to-green-400" },
  { icon: Image, label: "Replace BG", color: "from-purple-500 to-pink-500" },
  { icon: Shield, label: "Plate Masking", color: "from-orange-500 to-yellow-500" },
  { icon: Sparkles, label: "Glass Tint", color: "from-cyan-500 to-blue-500" },
  { icon: Play, label: "360° Stitch", color: "from-accent to-primary" },
];

const ThreeSixtyShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [gridComplete, setGridComplete] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<"grid" | "transition" | "video">("grid");

  useEffect(() => {
    if (!isPlaying) return;
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 1500);
    return () => clearInterval(stepInterval);
  }, [isPlaying]);

  useEffect(() => {
    const gridTimer = setTimeout(() => setGridComplete(true), 1500);
    return () => clearTimeout(gridTimer);
  }, []);

  useEffect(() => {
    if (gridComplete && !showVideo) {
      const transitionTimer = setTimeout(() => {
        setAnimationPhase("transition");
        setTimeout(() => {
          setAnimationPhase("video");
          setShowVideo(true);
        }, 1000);
      }, 2000);
      return () => clearTimeout(transitionTimer);
    }
  }, [gridComplete, showVideo]);

  useEffect(() => {
    if (!isPlaying || !showVideo) return;
    const rotationInterval = setInterval(() => {
      setRotationAngle((prev) => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(rotationInterval);
  }, [isPlaying, showVideo]);

  const gridImages = Array(12).fill(heroImage);

  const resetAnimation = () => {
    setShowVideo(false);
    setGridComplete(false);
    setAnimationPhase("grid");
    setRotationAngle(0);
    setTimeout(() => setGridComplete(true), 1500);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm">
              Complete 360° Solution
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            See the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              360° Magic
            </span>{" "}
            in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch how we transform raw smartphone captures into stunning 360° experiences
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 ${
                activeStep === index
                  ? `bg-gradient-to-r ${step.color} text-white shadow-lg scale-110`
                  : activeStep > index
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <step.icon className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">{step.label}</span>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-4">
              {showVideo ? "360° Spin Video" : "12 Angles Captured"}
              <button
                onClick={resetAnimation}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                title="Replay animation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </h3>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200">
              {!showVideo ? (
                <div className="absolute inset-0 p-4">
                  <div className={`grid grid-cols-4 gap-2 h-full transition-all duration-1000 ${
                    animationPhase === "transition" ? "scale-50 opacity-0" : ""
                  }`}>
                    {gridImages.map((img, index) => (
                      <div
                        key={index}
                        className={`relative rounded-lg overflow-hidden shadow-lg transition-all duration-700 ${
                          gridComplete
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75"
                        }`}
                        style={{
                          transitionDelay: `${index * 100}ms`,
                        }}
                      >
                        <img
                          src={img}
                          alt={`Angle ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-1 left-1 text-white text-xs font-bold bg-gradient-to-r from-primary to-accent rounded px-1.5 py-0.5">
                          {(index + 1) * 30}°
                        </div>
                      </div>
                    ))}
                  </div>

                  {animationPhase === "transition" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-pulse">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="text-lg font-semibold">Stitching 360° Video...</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="absolute inset-0">
                  <div
                    className="w-full h-full relative"
                    style={{
                      perspective: "1200px",
                    }}
                  >
                    <div
                      className="absolute inset-8 rounded-xl overflow-hidden shadow-2xl"
                      style={{
                        transform: `rotateY(${rotationAngle}deg)`,
                        transformStyle: "preserve-3d",
                        transition: "transform 0.05s linear",
                      }}
                    >
                      <img
                        src={heroImage}
                        alt="360 degree car view"
                        className="w-full h-full object-cover"
                        style={{
                          filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
                        }}
                      />
                    </div>

                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="px-3 py-1.5 bg-black/60 backdrop-blur rounded-full text-white text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        360° LIVE
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/60 backdrop-blur-lg rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white hover:scale-110 transition-transform"
                            >
                              {isPlaying ? (
                                <Pause className="w-5 h-5" />
                              ) : (
                                <Play className="w-5 h-5 ml-0.5" />
                              )}
                            </button>
                            <div>
                              <div className="text-white font-semibold">360° Spin Video</div>
                              <div className="text-white/70 text-sm">Seamlessly stitched from 12 angles</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <div className="text-white font-bold text-xl">{rotationAngle}°</div>
                              <div className="text-white/60 text-xs">Rotation</div>
                            </div>
                            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                              <Maximize2 className="w-5 h-5 text-white" />
                            </button>
                          </div>
                        </div>

                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-100"
                            style={{ width: `${(rotationAngle / 360) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Capture Time", value: "< 5 min", icon: Camera },
                { label: "Processing", value: "< 2 min", icon: Sparkles },
                { label: "Output Quality", value: "4K Ready", icon: Image },
                { label: "File Format", value: "MP4 / WebM", icon: Play },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeSixtyShowcase;
