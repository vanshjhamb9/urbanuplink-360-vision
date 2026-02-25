import { useState, useEffect } from "react";
import tataHarrier from "@/assets/header1.webp";
import sierraExterior from "@/assets/header2.webp";
import sierraInterior from "@/assets/header3.webp";
import header4 from "@/assets/header4.webp";

// Indian car images for header carousel - Using Tata Harrier as primary
const heroImages = [
  tataHarrier,
  sierraExterior,
  sierraInterior,
  header4
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative w-full overflow-hidden bg-background pt-20 md:pt-20 pb-8 md:pb-12">
      {/* DESKTOP: Full Screen Image Carousel - Starts below header */}
      <div className="hidden lg:block relative w-full h-[calc(100vh-4rem-2rem)]">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img
              src={img}
              alt={`Luxury car ${index + 1} - Real 360° car experience captured with smartphone`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* MOBILE/TAB: Full Height Image Section - Starts below header */}
      <div className="lg:hidden relative w-full h-[calc(100vh-5rem-2rem)]">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img
              src={img}
              alt={`Luxury car ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
