import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  MousePointer2,
  Pause,
  Play,
  RotateCcw,
  Share2,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

// 360° car images - all angles with background removed
import car360_1 from "@/assets/bgCreta/creta1.avif";
import car360_2 from "@/assets/bgCreta/creta2.avif";
import car360_3 from "@/assets/bgCreta/creta3.avif";
import car360_4 from "@/assets/bgCreta/creta4.avif";
import car360_5 from "@/assets/bgCreta/creta5.avif";
import car360_6 from "@/assets/bgCreta/creta6.avif";
import car360_7 from "@/assets/bgCreta/creta7.avif";
import car360_8 from "@/assets/bgCreta/creta8.avif";
import car360_9 from "@/assets/bgCreta/creta9.avif";
import car360_10 from "@/assets/bgCreta/creta10.avif";
import car360_11 from "@/assets/bgCreta/creta11.avif";
import car360_12 from "@/assets/bgCreta/creta12.avif";
import car360_13 from "@/assets/bgCreta/creta13.avif";
import car360_14 from "@/assets/bgCreta/creta14.avif";
import car360_15 from "@/assets/bgCreta/creta15.avif";
import car360_16 from "@/assets/bgCreta/creta16.avif";
import car360_17 from "@/assets/bgCreta/creta17.avif";
import car360_18 from "@/assets/bgCreta/creta18.avif";
import car360_19 from "@/assets/bgCreta/creta19.avif";
import car360_20 from "@/assets/bgCreta/creta20.avif";
import car360_21 from "@/assets/bgCreta/creta21.avif";
import car360_22 from "@/assets/bgCreta/creta22.avif";
import car360_23 from "@/assets/bgCreta/creta23.avif";
import car360_24 from "@/assets/bgCreta/creta24.avif";
import car360_25 from "@/assets/bgCreta/creta25.avif";
import car360_26 from "@/assets/bgCreta/creta26.avif";
import car360_27 from "@/assets/bgCreta/creta27.avif";
import car360_28 from "@/assets/bgCreta/creta28.avif";
import car360_29 from "@/assets/bgCreta/creta29.avif";
import car360_30 from "@/assets/bgCreta/creta30.avif";
import car360_31 from "@/assets/bgCreta/creta31.avif";
import car360_32 from "@/assets/bgCreta/creta32.avif";
import car360_33 from "@/assets/bgCreta/creta33.avif";

import carBg360 from "@/assets/Bgimage360.webp";
import logoImage from "@/assets/2 (2).png";

const car360Images = [
  car360_1,  // 0°
  car360_2,  // 30°
  car360_3,  // 60°
  car360_4,  // 90°
  car360_5,  // 120°
  car360_6,  // 150°
  car360_7,  // 180°
  car360_8,  // 210°
  car360_9,  // 240°
  car360_10, // 270°
  car360_11, // 300°
  car360_12, // 330°
  car360_13, // 360°
  car360_14, // 390°
  car360_15, // 420°
  car360_16, // 450°
  car360_17, // 480°
  car360_18, // 510°
  car360_19, // 540°
  car360_20, // 570°
  car360_21, // 600°
  car360_22, // 630°
  car360_23, // 660°
  car360_24, // 690°
  car360_25, // 720°
  car360_26, // 750°
  car360_27, // 780°
  car360_28, // 810°
  car360_29, // 840°
  car360_30, // 870°
  car360_31, // 900°
  car360_32, // 930°
  car360_33, // 960°
];

const totalAngles = car360Images.length;

// Hotspots configuration - visible at specific angles
// Note: 33 images total, index 6 = 180° (rear), index 7-9 = rear-left, index 10-12 = left side
const hotspots = [
  { id: 1, angleIndices: [2,3,4 , 8], x: 50, y: 57, label: "Front Grille", description: "Parametric grille design" },
  { id: 2, angleIndices: [8 ], x: 36, y: 52, label: "LED Headlights", description: "Projector LED headlamps" },
  { id: 3, angleIndices: [10, 11,12], x: 50, y: 62, label: "Alloy Wheels", description: "17\" diamond-cut alloys" },
  { id: 4, angleIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], x: 50, y: 35, label: "Panoramic Sunroof", description: "Large panoramic sunroof" },
  { id: 5, angleIndices: [26 ,27, 28 ,29], x: 74, y: 48, label: "LED Tail Lamps", description: "Connected LED tail lamps" },
  { id: 6, angleIndices: [2, 3, 4, 5, 9 ], x: 60, y: 52, label: "Chrome Door Handles", description: "Body-colored with chrome accents" },
];

const ThreeSixtyShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number>(hotspots[3].id);
  const [framesReady, setFramesReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    let cancelled = false;

    const preloadFrames = async () => {
      await Promise.all(
        car360Images.map(
          (src) =>
            new Promise<void>((resolve) => {
              const image = new Image();
              image.onload = async () => {
                if ("decode" in image) {
                  try {
                    await image.decode();
                  } catch {
                    // Continue even if a browser cannot decode this frame eagerly.
                  }
                }
                resolve();
              };
              image.onerror = () => resolve();
              image.src = src;
            }),
        ),
      );

      if (!cancelled) {
        setFramesReady(true);
      }
    };

    preloadFrames();

    return () => {
      cancelled = true;
    };
  }, []);

  // Smooth auto-rotate 360° view
  useEffect(() => {
    if (!isPlaying || !framesReady) return;
    
    const animate = () => {
      const now = Date.now();
      lastTimeRef.current = now;
      
      setRotationAngle((prev) => {
        const newAngle = (prev + 0.3) % 360;
        const newIndex = Math.floor((newAngle / 360) * totalAngles) % totalAngles;
        setCurrentImageIndex(newIndex);
        return newAngle;
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [framesReady, isPlaying]);

  // Handle drag to rotate with smooth interpolation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setIsPlaying(false);
    setVelocity(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const deltaX = e.clientX - dragStartX;
    const sensitivity = 1.5;
    const angleChange = (deltaX / containerRef.current.offsetWidth) * 360 * sensitivity;
    const newAngle = (rotationAngle + angleChange) % 360;
    const normalizedAngle = newAngle < 0 ? newAngle + 360 : newAngle;
    
    // Calculate image index instantly based on angle
    const exactIndex = (normalizedAngle / 360) * totalAngles;
    const newIndex = Math.floor(exactIndex) % totalAngles;
    
    // Update both angle and image index immediately
    setRotationAngle(normalizedAngle);
    setCurrentImageIndex(newIndex);
    setDragStartX(e.clientX);
    
    // Calculate velocity for momentum
    setVelocity(angleChange);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Add momentum effect
    if (Math.abs(velocity) > 0.5) {
      const momentumAngle = (rotationAngle + velocity * 2) % 360;
      setRotationAngle(momentumAngle < 0 ? momentumAngle + 360 : momentumAngle);
    }
    setVelocity(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setIsPlaying(false);
    setVelocity(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const deltaX = e.touches[0].clientX - dragStartX;
    const sensitivity = 1.5;
    const angleChange = (deltaX / containerRef.current.offsetWidth) * 360 * sensitivity;
    const newAngle = (rotationAngle + angleChange) % 360;
    const normalizedAngle = newAngle < 0 ? newAngle + 360 : newAngle;
    
    // Calculate image index instantly based on angle
    const exactIndex = (normalizedAngle / 360) * totalAngles;
    const newIndex = Math.floor(exactIndex) % totalAngles;
    
    // Update both angle and image index immediately
    setRotationAngle(normalizedAngle);
    setCurrentImageIndex(newIndex);
    setDragStartX(e.touches[0].clientX);
    setVelocity(angleChange);
  };

  // Manual navigation with smooth transitions
  const handlePrevious = () => {
    setIsPlaying(false);
    setRotationAngle((prev) => {
      const angleStep = 360 / totalAngles;
      const newAngle = (prev - angleStep * 3 + 360) % 360;
      const newIndex = Math.floor((newAngle / 360) * totalAngles) % totalAngles;
      setCurrentImageIndex(newIndex);
      return newAngle;
    });
  };

  const handleNext = () => {
    setIsPlaying(false);
    setRotationAngle((prev) => {
      const angleStep = 360 / totalAngles;
      const newAngle = (prev + angleStep * 3) % 360;
      const newIndex = Math.floor((newAngle / 360) * totalAngles) % totalAngles;
      setCurrentImageIndex(newIndex);
      return newAngle;
    });
  };

  const visibleHotspots = hotspots.filter((spot) =>
    spot.angleIndices.includes(currentImageIndex),
  );
  const selectedHotspot =
    hotspots.find((spot) => spot.id === activeHotspot) ||
    visibleHotspots[0] ||
    hotspots[0];

  return (
    <section className="relative z-20 overflow-hidden bg-brand-black py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 section-glow opacity-80" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-[120px]" />
      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Interactive 360 Experience"
          title={
            <>
              Spin, inspect and explore{" "}
              <span className="text-brand-lime">every detail.</span>
            </>
          }
          description="A premium Creta-style vehicle experience with smooth 360 rotation, clickable hotspots and buyer-ready listing context."
        />

        <div className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-card backdrop-blur-xl md:mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr]">
            {/* Left: 360 Viewer */}
            <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden border-b border-white/10 bg-[linear-gradient(145deg,#0e1214,#050606)] p-0 lg:min-h-[640px] lg:border-b-0 lg:border-r">
              {/* Showroom Background */}
              <div className="absolute inset-0 z-0">
                <img src={carBg360} className="h-full w-full object-cover opacity-75 brightness-75 contrast-125" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/5 to-brand-black/65" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,241,53,0.12),transparent_36%)]" />
                <div className="absolute inset-x-8 bottom-16 h-24 rounded-full bg-brand-lime/10 blur-3xl" />
              </div>

              {/* Centered Logo on the background wall - Positioned higher to be visible */}
              <div className="pointer-events-none absolute inset-x-0 top-16 z-0 flex items-center justify-center opacity-60">
                <img src={logoImage} className="h-auto w-28 object-contain md:w-44" alt="Urban Uplink" />
              </div>
              <div
                ref={containerRef}
                className="perspective-1000 relative flex h-full w-full cursor-grab touch-none items-center justify-center active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => {
                  setIsDragging(false);
                  if (Math.abs(velocity) > 0.5) {
                    const momentumAngle = (rotationAngle + velocity * 2) % 360;
                    setRotationAngle(momentumAngle < 0 ? momentumAngle + 360 : momentumAngle);
                  }
                  setVelocity(0);
                }}
              >
                {/* 360 Images - Instant switch for real rotation effect */}
                <div className="relative mt-20 flex aspect-[4/3] w-full items-center justify-center px-3 sm:mt-24 sm:px-8 lg:mt-28">
                  {!framesReady && (
                    <div className="absolute inset-0 z-30 flex items-center justify-center">
                      <div className="rounded-full border border-brand-lime/20 bg-brand-black/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-lime backdrop-blur-xl">
                        Loading 360 frames
                      </div>
                    </div>
                  )}
                  {car360Images.map((img, index) => {
                    const isActive = index === currentImageIndex;
                    
                    return (
                      <img
                        key={index}
                        src={img}
                        alt={`Angle ${index * 11}`}
                        className={`absolute h-full w-full translate-y-8 object-contain drop-shadow-[0_45px_80px_rgba(0,0,0,0.72)] sm:translate-y-10 lg:translate-y-12 ${
                          isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                        loading="eager"
                        decoding="async"
                      />
                    );
                  })}
                  
                  {/* Hotspots Overlay */}
                  {visibleHotspots.map((spot) => (
                      <button
                        key={spot.id}
                        type="button"
                        className="group absolute z-20 cursor-pointer"
                        style={{
                          left: `${spot.x}%`,
                          top: `${spot.y}%`,
                        }}
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveHotspot(spot.id);
                          setIsPlaying(false);
                        }}
                        aria-label={`Open ${spot.label} hotspot`}
                      >
                         <div className="relative">
                           <div className="absolute inset-0 h-7 w-7 rounded-full bg-brand-lime/35 animate-ping" />
                           <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-brand-lime text-brand-black shadow-[0_0_24px_rgba(201,241,53,0.55)] transition-transform group-hover:scale-125">
                              <div className="h-2 w-2 rounded-full bg-brand-black" />
                           </div>
                           {/* Tooltip */}
                           <div className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-brand-black/90 px-3 py-2 text-left text-xs font-bold text-white opacity-0 shadow-card backdrop-blur transition-opacity group-hover:opacity-100">
                             <span className="text-brand-lime">{spot.label}</span>
                             <span className="mt-0.5 block font-medium text-white/55">{spot.description}</span>
                           </div>
                         </div>
                      </button>
                  ))}
                </div>


                {/* Controls Overlay */}
                <div className="pointer-events-none absolute bottom-6 left-5 right-5 z-30 flex items-center justify-between">
                  {/* Rotation Indicator */}
                  <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-brand-black/70 px-4 py-2 text-white shadow-card backdrop-blur-xl">
                     <RotateCcw className="h-4 w-4 text-brand-lime" />
                     <div className="h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-brand-lime to-brand-blue transition-all duration-100"
                          style={{ width: `${(rotationAngle / 360) * 100}%` }}
                        />
                     </div>
                     <span className="hidden text-xs font-semibold text-white/60 sm:inline">
                       {Math.round(rotationAngle)}°
                     </span>
                  </div>

                   {/* Play/Pause */}
                   <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-brand-lime/30 bg-brand-lime text-brand-black shadow-[0_0_28px_rgba(201,241,53,0.35)] transition-transform hover:scale-105"
                    aria-label={isPlaying ? "Pause 360 rotation" : "Play 360 rotation"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="ml-1 h-5 w-5" />}
                  </button>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-brand-black/70 text-white shadow-card backdrop-blur transition-all hover:scale-110 hover:border-brand-lime/40 hover:text-brand-lime active:scale-95 md:flex"
                  aria-label="Previous 360 angle"
                >
                  ←
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-brand-black/70 text-white shadow-card backdrop-blur transition-all hover:scale-110 hover:border-brand-lime/40 hover:text-brand-lime active:scale-95 md:flex"
                  aria-label="Next 360 angle"
                >
                  →
                </button>
              </div>
              
              {/* Thumbnails (Static for visual) */}
              <div className="absolute bottom-0 left-0 right-0 hidden grid-cols-4 gap-3 border-t border-white/10 bg-brand-black/72 p-4 backdrop-blur-xl lg:grid">
                {[0, 2, 8, 10].map((idx) => (
                  <div 
                    key={idx} 
                    className="aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 opacity-70 transition-all hover:scale-105 hover:border-brand-lime/40 hover:opacity-100"
                    onClick={() => {
                      setIsPlaying(false);
                      setCurrentImageIndex(idx);
                      setRotationAngle(idx * 30);
                    }}
                  >
                    <img src={car360Images[idx]} className="h-full w-full object-cover" alt="360 angle thumbnail" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex h-full flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 text-white sm:p-8 lg:p-10">
               <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="rounded-full border border-brand-lime/20 bg-brand-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-lime">
                    Featured Listing
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-white to-brand-lime bg-clip-text text-3xl font-extrabold text-transparent">₹18.5L</div>
                    <div className="text-xs font-medium text-white/55">On-road Mumbai</div>
                  </div>
               </div>

               <h3 className="mb-1 font-heading text-3xl font-extrabold tracking-tight text-white">Certified Mid-Size SUV</h3>
               <p className="mb-8 font-medium text-white/58">Automatic • Verified Listing • 360° Enabled</p>

               <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-black/45 p-4">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-lime/20 bg-brand-lime/10 text-brand-lime">
                        <Calendar className="h-5 w-5" />
                     </div>
                     <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-white/38">Year</div>
                        <div className="font-bold text-white">2023</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-black/45 p-4">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-lime/20 bg-brand-lime/10 text-brand-lime">
                        <Gauge className="h-5 w-5" />
                     </div>
                     <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-white/38">Mileage</div>
                        <div className="font-bold text-white">12,500 km</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-black/45 p-4">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-lime/20 bg-brand-lime/10 text-brand-lime">
                        <Fuel className="h-5 w-5" />
                     </div>
                     <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-white/38">Fuel</div>
                        <div className="font-bold text-white">Petrol</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-black/45 p-4">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-lime/20 bg-brand-lime/10 text-brand-lime">
                        <MapPin className="h-5 w-5" />
                     </div>
                     <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-white/38">Location</div>
                        <div className="font-bold text-white">Mumbai, MH</div>
                     </div>
                  </div>
               </div>

               <motion.div
                  key={selectedHotspot.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative mb-4 overflow-hidden rounded-2xl border border-brand-lime/20 bg-brand-lime/10 p-5"
                >
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-brand-lime/15 blur-2xl" />
                  <div className="relative z-10">
                    <div className="mb-2 flex items-center gap-2">
                       <MousePointer2 className="h-4 w-4 text-brand-lime" />
                       <span className="text-sm font-bold text-brand-lime">{selectedHotspot.label}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/72">
                       {selectedHotspot.description}. Click hotspots on the vehicle to open area-specific details.
                    </p>
                  </div>
               </motion.div>

               <div className="relative mb-8 overflow-hidden rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-5">
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-brand-blue/20 blur-2xl" />
                  <div className="relative z-10">
                    <div className="mb-2 flex items-center gap-2">
                       <CheckCircle2 className="h-4 w-4 text-brand-lime" />
                       <span className="text-sm font-bold text-white">360° Inspection Report</span>
                    </div>
                    <p className="text-xs font-medium leading-relaxed text-white/62">
                       This vehicle has passed our 140-point quality check. Inspect every detail with the interactive view adjacent.
                    </p>
                  </div>
               </div>

               <div className="mt-auto space-y-3">
                  <button className="w-full rounded-xl bg-brand-lime py-4 font-bold text-brand-black shadow-[0_0_32px_rgba(201,241,53,0.22)] transition-all hover:scale-[1.01] hover:bg-white active:scale-[0.99]">
                     Book Interactive Demo
                  </button>
                  <div className="flex gap-3">
                     <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 font-bold text-white/72 transition-colors hover:border-brand-lime/40 hover:bg-brand-lime/10 hover:text-brand-lime">
                        <Heart className="h-4 w-4" /> Save
                     </button>
                     <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 font-bold text-white/72 transition-colors hover:border-brand-blue/40 hover:bg-brand-blue/10 hover:text-brand-blue">
                        <Share2 className="h-4 w-4" /> Share
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeSixtyShowcase;