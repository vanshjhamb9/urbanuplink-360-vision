import React, { useState, useRef, useEffect } from "react";
import { Smartphone, Sparkles } from "lucide-react";

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold text-sm">
              AI Transformation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Raw Capture to{" "}
            <span className="text-primary italic">Studio Quality</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI automatically enhances your smartphone captures, removes
            distracting backgrounds, and applies professional lighting in
            seconds.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border-4 border-slate-100"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image (Full background) */}
          <img
            src="/step_3_final.png"
            alt="Processed Car"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="/step_1_raw.png"
              alt="Raw Capture"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary">
              <div className="flex gap-1.5">
                <div className="w-1 h-4 bg-primary rounded-full" />
                <div className="w-1 h-4 bg-primary rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 z-30 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-lg flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-white" />
            <span className="text-white font-bold text-sm uppercase tracking-widest">
              Raw Capture
            </span>
          </div>
          <div className="absolute top-6 right-6 z-30 px-4 py-2 bg-primary/80 backdrop-blur-md border border-white/20 rounded-lg flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white font-bold text-sm uppercase tracking-widest">
              AI Final
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
            <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm italic">
                01
              </span>
              Background Removal
            </h4>
            <p className="text-muted-foreground text-sm">
              Perfectly isolated vehicle from any environment, no matter how
              busy the dealership is.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
            <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm italic">
                02
              </span>
              Lighting Correction
            </h4>
            <p className="text-muted-foreground text-sm">
              AI-driven lighting adjustments to highlight every curve and detail
              of the vehicle.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
            <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm italic">
                03
              </span>
              Studio Integration
            </h4>
            <p className="text-muted-foreground text-sm">
              Placement in a custom branded virtual studio that makes your
              inventory look premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
