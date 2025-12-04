import { useState, useRef, useEffect } from "react";
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200">
              <img
                src={heroImage}
                alt="Car with background removed"
                className="w-full h-full object-cover"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
                  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                }}
              />
            </div>

            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={heroImage}
                alt="Original car with background"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-primary rounded-full" />
                  <div className="w-0.5 h-4 bg-accent rounded-full" />
                </div>
              </div>
            </div>

            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur rounded-full text-white text-sm font-medium">
              Before
            </div>
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-medium">
              After
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { label: "Processing Time", value: "< 3 sec" },
              { label: "Accuracy", value: "99.8%" },
              { label: "Edge Detection", value: "AI-Powered" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-card/50 backdrop-blur border border-border/50"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
    </section>
  );
};

export default BackgroundRemovalShowcase;
