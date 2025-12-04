import { useState, useRef, useEffect } from "react";
import { Clock, Target, Zap } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const BackgroundRemovalShowcase = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm">
              AI-Powered Magic
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Instant{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Background Removal
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See the transformation in real-time. Drag the slider to compare
            before and after.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* AFTER - Clean studio background with isolated car */}
            <div className="absolute inset-0">
              {/* Checkerboard pattern to show transparency concept */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #e8e8e8 25%, transparent 25%),
                    linear-gradient(-45deg, #e8e8e8 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #e8e8e8 75%),
                    linear-gradient(-45deg, transparent 75%, #e8e8e8 75%)
                  `,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0px',
                  backgroundColor: '#f5f5f5'
                }}
              />
              {/* Clean studio gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-gray-100/80 to-slate-200/90" />
              
              {/* Car with CSS mask to simulate background removal - showing only the car */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="relative w-full h-full"
                  style={{
                    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='52' rx='42' ry='28' fill='black'/%3E%3C/svg%3E")`,
                    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='52' rx='42' ry='28' fill='black'/%3E%3C/svg%3E")`,
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
                      filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))",
                    }}
                  />
                </div>
              </div>
              
              {/* Subtle floor shadow */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%)',
                }}
              />
            </div>

            {/* BEFORE - Original with dealership background */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={heroImage}
                alt="Original car with background"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay to emphasize "messy" background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5" />
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary/50">
                <div className="flex gap-1">
                  <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                  <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-semibold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              Before
            </div>
            <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-semibold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              After
            </div>

            {/* Instruction */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center gap-2">
              <svg className="w-4 h-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 12h10M7 12l3-3m-3 3l3 3M17 12l-3-3m3 3l-3 3" />
              </svg>
              Drag to compare
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                &lt; 3 sec
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Processing Time
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
              <Target className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                99.8%
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Accuracy
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
              <Zap className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI-Powered
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Edge Detection
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundRemovalShowcase;
