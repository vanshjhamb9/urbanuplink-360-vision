import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import BeforeImage from "../assets/2023-Tata-Harrier-facelift-dark-edition-front-.jpg";
import AfterImage from "../assets/after-image.png";

const BeforeAfterComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm">
              Transformation Showcase
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            See the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the power of our AI-driven background processing. Drag the slider to compare.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width, underneath) */}
            <img 
              src={AfterImage} 
              alt="After Processing" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-md z-10">
              AFTER
            </div>

            {/* Before Image (Clipped overlay) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={BeforeImage} 
                alt="Before Processing" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-md z-10">
                BEFORE
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform active:scale-110 transition-transform">
                <MoveHorizontal className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-8 text-sm md:text-base">
             <div className="text-center">
                <h4 className="font-bold text-lg mb-1">Raw Capture</h4>
                <p className="text-muted-foreground">Original photo with cluttered background</p>
             </div>
             <div className="w-px bg-border my-2"></div>
             <div className="text-center">
                <h4 className="font-bold text-lg mb-1">Professional Studio</h4>
                <p className="text-muted-foreground">AI-enhanced studio quality result</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;
