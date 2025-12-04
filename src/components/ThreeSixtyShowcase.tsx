import { useState, useEffect } from "react";
import { Camera, Eraser, Image, Shield, Sparkles, Play, Pause, RotateCcw, Maximize2, Box } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const workflowSteps = [
  { icon: Camera, label: "Capture Images", color: "from-blue-500 to-cyan-500" },
  { icon: Eraser, label: "Remove BG", color: "from-primary to-green-400" },
  { icon: Image, label: "Replace BG", color: "from-purple-500 to-pink-500" },
  { icon: Shield, label: "Plate Masking", color: "from-orange-500 to-yellow-500" },
  { icon: Sparkles, label: "Glass Tint", color: "from-cyan-500 to-blue-500" },
  { icon: Play, label: "360° Stitch", color: "from-accent to-primary" },
];

interface ThreeSixtyShowcaseProps {
  unityBuildUrl?: string;
}

const ThreeSixtyShowcase = ({ unityBuildUrl }: ThreeSixtyShowcaseProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [gridComplete, setGridComplete] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<"grid" | "transition" | "video">("grid");
  const [unityLoaded, setUnityLoaded] = useState(false);

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
          {workflowSteps.map((step, index) => {
            const StepIcon = step.icon;
            return (
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
                <StepIcon className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">{step.label}</span>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-4">
              {showVideo ? "360° Interactive View" : "12 Angles Captured"}
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
                        <p className="text-lg font-semibold">Generating 360° View...</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="absolute inset-0">
                  {unityBuildUrl ? (
                    <div className="w-full h-full relative">
                      {!unityLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-spin">
                              <Box className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-lg font-semibold">Loading 3D Model...</p>
                          </div>
                        </div>
                      )}
                      <iframe
                        src={unityBuildUrl}
                        className="w-full h-full border-0"
                        onLoad={() => setUnityLoaded(true)}
                        title="360 Degree Car View"
                        allow="fullscreen"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full relative bg-gradient-to-br from-slate-50 to-slate-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-200/50" />
                          
                          <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                            <div 
                              className="w-full h-full relative rounded-xl overflow-hidden"
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
                                alt="360 degree car view placeholder"
                                className="w-full h-full object-cover"
                                style={{
                                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))",
                                }}
                              />
                            </div>
                            
                            <div 
                              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/5 h-12"
                              style={{
                                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 70%)',
                              }}
                            />
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="relative w-4/5 h-4/5">
                              <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                                0°
                              </div>
                              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                                180°
                              </div>
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                                90°
                              </div>
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                                270°
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <div className="px-3 py-1.5 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-medium flex items-center gap-2">
                          <Box className="w-4 h-4" />
                          3D MODEL
                        </div>
                        <div className="px-3 py-1.5 bg-amber-500 rounded-full text-white text-xs font-bold flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                          UNITY READY
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
                                <div className="text-white font-semibold">Interactive 360° View</div>
                                <div className="text-white/70 text-sm">Unity WebGL - Drag to rotate</div>
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
                          
                          <div className="mt-3 text-center text-white/60 text-xs">
                            Awaiting Unity 3D model integration • Placeholder preview shown
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Capture Time", value: "< 5 min", Icon: Camera },
                { label: "Processing", value: "< 2 min", Icon: Sparkles },
                { label: "Output Quality", value: "4K Ready", Icon: Image },
                { label: "File Format", value: "MP4 / WebM", Icon: Play },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <stat.Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
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
