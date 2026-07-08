import { useState, useEffect, useRef } from "react";
import { Camera, Eraser, Image, Shield, Sparkles, Play, Pause, RotateCcw, Maximize2, Box, Calendar, Gauge, Fuel, MapPin, Heart, Share2, CheckCircle2 } from "lucide-react";

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
  { id: 1, angleIndices: [8, 12], x: 50, y: 52, label: "Front Grille", description: "Parametric grille design" },
  { id: 2, angleIndices: [8 , 12], x: 28, y: 48, label: "LED Headlights", description: "Projector LED headlamps" },
  { id: 3, angleIndices: [1, 2, 3, 4, 10, 11, 12], x: 42, y: 62, label: "Alloy Wheels", description: "17\" diamond-cut alloys" },
  { id: 4, angleIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], x: 50, y: 25, label: "Panoramic Sunroof", description: "Large panoramic sunroof" },
  { id: 5, angleIndices: [26 ,27, 28 ,29], x: 72, y: 42, label: "LED Tail Lamps", description: "Connected LED tail lamps" },
  { id: 6, angleIndices: [2, 3, 4, 5, 9,20], x: 55, y: 42, label: "Chrome Door Handles", description: "Body-colored with chrome accents" },
];

const ThreeSixtyShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(Date.now());

  // Smooth auto-rotate 360° view
  useEffect(() => {
    if (!isPlaying) return;
    
    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastTimeRef.current;
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
  }, [isPlaying]);

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

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            See how your vehicle listings stand out with professional 360° content
          </h2>
        </div>

        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: 360 Viewer */}
            <div className="relative p-0 min-h-[400px] lg:min-h-[600px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100 bg-white overflow-hidden">
              {/* Showroom Background */}
              <div className="absolute inset-0 z-0">
                <img src={carBg360} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-white/10" />
              </div>

              {/* Centered Logo on the background wall - Positioned higher to be visible */}
              <div className="absolute inset-x-0 top-20 flex items-center justify-center pointer-events-none z-0 opacity-50">
                <img src={logoImage} className="w-40 md:w-64 h-auto object-contain" alt="Urban Uplink" />
              </div>
              <div
                ref={containerRef}
                className="w-full h-full relative cursor-grab active:cursor-grabbing touch-none flex items-center justify-center perspective-1000"
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
                <div className="relative w-full aspect-[4/3] flex items-center justify-center mt-[4rem]">
                  {car360Images.map((img, index) => {
                    const isActive = index === currentImageIndex;
                    
                    return (
                      <img
                        key={index}
                        src={img}
                        alt={`Angle ${index * 11}`}
                        className={`absolute w-full h-full object-contain drop-shadow-2xl ${
                          isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      />
                    );
                  })}
                  
                  {/* Hotspots Overlay */}
                  {hotspots.map((spot) => (
                     spot.angleIndices.includes(currentImageIndex) && (
                      <div
                        key={spot.id}
                        className="absolute z-20 group cursor-pointer"
                        style={{
                          left: `${spot.x}%`,
                          top: `${spot.y}%`,
                        }}
                      >
                         <div className="relative">
                           <div className="w-6 h-6 rounded-full bg-green-500/30 animate-ping absolute inset-0" />
                           <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
                              <div className="w-2 h-2 rounded-full bg-white" />
                           </div>
                           {/* Tooltip */}
                           <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                             {spot.label}
                           </div>
                         </div>
                      </div>
                     )
                  ))}
                </div>


                {/* Controls Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-30 pointer-events-none">
                  {/* Rotation Indicator */}
                  <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm flex items-center gap-3 pointer-events-auto">
                     <RotateCcw className="w-4 h-4 text-slate-500" />
                     <div className="w-24 h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 transition-all duration-100"
                          style={{ width: `${(rotationAngle / 360) * 100}%` }}
                        />
                     </div>
                  </div>

                   {/* Play/Pause */}
                   <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 text-slate-700 transition-colors pointer-events-auto"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                  </button>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrevious}
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg items-center justify-center text-slate-600 hover:bg-white transition-all z-20 hover:scale-110 active:scale-95"
                >
                  ←
                </button>
                <button 
                  onClick={handleNext}
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg items-center justify-center text-slate-600 hover:bg-white transition-all z-20 hover:scale-110 active:scale-95"
                >
                  →
                </button>
              </div>
              
              {/* Thumbnails (Static for visual) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 bg-white/50 backdrop-blur-sm hidden lg:grid grid-cols-4 gap-2">
                {[0, 2, 8, 10].map((idx) => (
                  <div 
                    key={idx} 
                    className="aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-100 opacity-60 hover:opacity-100 transition-opacity cursor-pointer transform hover:scale-105"
                    onClick={() => {
                      setIsPlaying(false);
                      setCurrentImageIndex(idx);
                      setRotationAngle(idx * 30);
                    }}
                  >
                    <img src={car360Images[idx]} className="w-full h-full object-cover" alt="thumbnail" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 lg:p-10 flex flex-col h-full bg-white">
               <div className="flex items-start justify-between mb-2">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Featured Listing
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">₹18.5L</div>
                    <div className="text-xs text-slate-500 font-medium">On-road Mumbai</div>
                  </div>
               </div>

               <h3 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">Certified Mid-Size SUV</h3>
               <p className="text-slate-500 mb-8 font-medium">Automatic • Verified Listing</p>

               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-green-600 border border-slate-100">
                        <Calendar className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Year</div>
                        <div className="font-bold text-slate-800">2023</div>
                     </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-green-600 border border-slate-100">
                        <Gauge className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Mileage</div>
                        <div className="font-bold text-slate-800">12,500 km</div>
                     </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-green-600 border border-slate-100">
                        <Fuel className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Fuel</div>
                        <div className="font-bold text-slate-800">Petrol</div>
                     </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-green-600 border border-slate-100">
                        <MapPin className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Location</div>
                        <div className="font-bold text-slate-800">Mumbai, MH</div>
                     </div>
                  </div>
               </div>

               <div className="bg-green-50/50 border border-green-100 rounded-2xl p-5 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -mr-12 -mt-12 opacity-50" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       <span className="font-bold text-green-800 text-sm">360° Inspection Report</span>
                    </div>
                    <p className="text-xs text-green-700/80 leading-relaxed font-medium">
                       This vehicle has passed our 140-point quality check. Inspect every detail with the interactive view adjacent.
                    </p>
                  </div>
               </div>

               <div className="mt-auto space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all">
                     Contact Seller
                  </button>
                  <div className="flex gap-3">
                     <button className="flex-1 flex items-center justify-center gap-2 border border-green-500/30 text-green-700 font-bold py-3 rounded-xl hover:bg-green-50 transition-colors">
                        <Heart className="w-4 h-4" /> Save
                     </button>
                     <button className="flex-1 flex items-center justify-center gap-2 border border-green-500/30 text-green-700 font-bold py-3 rounded-xl hover:bg-green-50 transition-colors">
                        <Share2 className="w-4 h-4" /> Share
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