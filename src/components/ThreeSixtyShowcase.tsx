import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  Pause,
  Play,
  RotateCcw,
  Share2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { threeSixtyCopy } from "@/lib/homepageContent";
import { assets } from "@/lib/assets";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import {
  angleToFrame,
  frameToAngle,
  getHotspotsForFrame,
  hotspotFeatures,
  TOTAL_FRAMES,
} from "@/lib/threeSixtyHotspots";
import {
  HotspotCalibrator,
  useCalibratorEnabled,
} from "@/components/three-sixty/HotspotCalibrator";

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

const showroomBackground = assets.showroom.background1;

/** Balanced crop of white studio Background 1 — floor line under the vehicle */
const SPIN_BACKDROP_POSITION = "center 55%";

/** Fixed stage aspect — hotspot % coords map to this box 1:1 with car images */
const VEHICLE_STAGE_ASPECT = "1120 / 425";

/** Zoom into car cutouts — source frames have transparent padding around the vehicle */
const VEHICLE_CONTENT_SCALE = 1.15;

const listingSpecs = [
  { icon: Calendar, label: "Year", value: "2023" },
  { icon: Gauge, label: "Mileage", value: "12,500 km" },
  { icon: Fuel, label: "Fuel", value: "Petrol" },
  { icon: MapPin, label: "Location", value: "Mumbai, MH" },
] as const;

const ThreeSixtyShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number>(hotspotFeatures[0].numericId);
  const [framesReady, setFramesReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const vehicleStageRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(Date.now());
  const calibratorEnabled = useCalibratorEnabled();

  useEffect(() => {
    let cancelled = false;

    const preloadFrames = async () => {
      // Eagerly preload first frame for LCP; batch the rest
      const first = new Promise<void>((resolve) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = car360Images[0];
      });
      await first;
      if (!cancelled) setFramesReady(true);

      await Promise.all(
        car360Images.slice(1).map(
          (src) =>
            new Promise<void>((resolve) => {
              const image = new Image();
              image.onload = () => resolve();
              image.onerror = () => resolve();
              image.src = src;
            }),
        ),
      );
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
        const newIndex = angleToFrame(newAngle);
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
    const exactIndex = (normalizedAngle / 360) * TOTAL_FRAMES;
    const newIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(exactIndex));
    
    // Update both angle and image index immediately
    setRotationAngle(normalizedAngle);
    setCurrentImageIndex(newIndex);
    setDragStartX(e.clientX);
    
    // Calculate velocity for momentum
    setVelocity(angleChange);
  };

  const snapToFrame = (index: number) => {
    const clamped = ((index % TOTAL_FRAMES) + TOTAL_FRAMES) % TOTAL_FRAMES;
    setCurrentImageIndex(clamped);
    setRotationAngle(frameToAngle(clamped));
  };

  const applyMomentum = () => {
    if (Math.abs(velocity) > 0.5) {
      const momentumAngle = (rotationAngle + velocity * 2) % 360;
      const normalized = momentumAngle < 0 ? momentumAngle + 360 : momentumAngle;
      snapToFrame(angleToFrame(normalized));
    } else {
      snapToFrame(angleToFrame(rotationAngle));
    }
    setVelocity(0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    applyMomentum();
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
    const exactIndex = (normalizedAngle / 360) * TOTAL_FRAMES;
    const newIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(exactIndex));
    
    // Update both angle and image index immediately
    setRotationAngle(normalizedAngle);
    setCurrentImageIndex(newIndex);
    setDragStartX(e.touches[0].clientX);
    setVelocity(angleChange);
  };

  const stepFrame = (direction: -1 | 1) => {
    setIsPlaying(false);
    setCurrentImageIndex((prev) => {
      const newIndex = (prev + direction + TOTAL_FRAMES) % TOTAL_FRAMES;
      setRotationAngle(frameToAngle(newIndex));
      return newIndex;
    });
  };

  const handlePrevious = () => stepFrame(-1);
  const handleNext = () => stepFrame(1);

  const visibleHotspots = useMemo(
    () => getHotspotsForFrame(currentImageIndex),
    [currentImageIndex],
  );

  useEffect(() => {
    setActiveHotspot((prev) => {
      const visible = visibleHotspots.map((track) => track.numericId);
      if (visible.includes(prev)) return prev;
      return visible[0] ?? prev;
    });
  }, [currentImageIndex, visibleHotspots]);

  const selectedHotspot =
    hotspotFeatures.find((spot) => spot.numericId === activeHotspot) ||
    visibleHotspots[0] ||
    hotspotFeatures[0];

  return (
    <section
      id="360-experience"
      className="relative z-20 overflow-hidden bg-brand-black py-10 md:py-12 lg:py-8 lg:pt-[4.25rem]"
    >
      <div className="pointer-events-none absolute inset-0 section-glow opacity-40" />
      <div className="page-container-wide px-4 sm:px-6 lg:pb-3">
        <div>
          <SectionHeading
            eyebrow={threeSixtyCopy.eyebrow}
            title={
              <>
                {threeSixtyCopy.title}{" "}
                <span className="text-brand-lime">{threeSixtyCopy.titleAccent}</span>
              </>
            }
            description={threeSixtyCopy.description}
            className="max-w-2xl md:mx-auto md:text-center"
          />
          <p className="mx-auto mt-2 max-w-xl text-center text-sm font-semibold text-brand-lime/90 md:mt-3 md:text-base">
            {threeSixtyCopy.tagline}
          </p>
          <p className="mx-auto mt-1 max-w-xl text-center text-xs text-white/45">
            {threeSixtyCopy.footnote}
          </p>
        </div>

        {/* Studio height matches listing on desktop (stretch) — no aspect on grid item */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c0e] shadow-card md:mt-5 lg:mt-3 lg:rounded-[1.25rem]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch">
            {/* Grid track: min-w-0 only — height comes from row stretch on lg */}
            <div className="min-w-0 border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4] lg:aspect-auto lg:h-full lg:min-h-[28rem]">
              <div className="absolute inset-0 z-0 overflow-hidden bg-white">
                <img
                  src={showroomBackground}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: SPIN_BACKDROP_POSITION }}
                  alt=""
                />
              </div>

              <div
                ref={containerRef}
                className="perspective-1000 absolute inset-0 z-10 min-w-0 cursor-grab touch-none active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => {
                  setIsDragging(false);
                  applyMomentum();
                }}
              >
                {/* Stage clipped inside studio so scale(1.15) cannot paint into listing */}
                <div className="absolute inset-x-0 top-0 bottom-[4.5rem] z-10 flex items-end justify-center overflow-hidden pb-1 lg:bottom-[5rem]">
                  <div
                    ref={vehicleStageRef}
                    className={`relative w-[90%] max-w-full ${
                      calibratorEnabled ? "border border-yellow-400/30" : ""
                    }`}
                    style={{
                      aspectRatio: VEHICLE_STAGE_ASPECT,
                      transform: `scale(${VEHICLE_CONTENT_SCALE})`,
                      transformOrigin: "50% 100%",
                    }}
                  >
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
                        alt={`Angle ${Math.round(frameToAngle(index))}°`}
                        className={`absolute inset-0 h-full w-full brightness-110 contrast-105 drop-shadow-[0_18px_36px_rgba(0,0,0,0.22)] ${
                          isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
                        }`}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    );
                  })}

                  {/* Hotspots Overlay */}
                  {!calibratorEnabled &&
                    visibleHotspots.map((spot) => {
                      // Stage is overflow-clipped + scaled; prefer the side with room.
                      const placeLeft = spot.position.x >= 40;
                      const placeAbove = spot.position.y >= 72;
                      const placeBelow = spot.position.y <= 22;

                      const tooltipPlacement = placeAbove
                        ? "bottom-full left-1/2 mb-2.5 -translate-x-1/2"
                        : placeBelow
                          ? "top-full left-1/2 mt-2.5 -translate-x-1/2"
                          : placeLeft
                            ? "right-full top-1/2 mr-2.5 -translate-y-1/2"
                            : "left-full top-1/2 ml-2.5 -translate-y-1/2";

                      return (
                        <button
                          key={spot.id}
                          type="button"
                          className={`group absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-[left,top,opacity] duration-150 ${
                            activeHotspot === spot.numericId ? "opacity-100" : "opacity-90"
                          }`}
                          style={{
                            left: `${spot.position.x}%`,
                            top: `${spot.position.y}%`,
                          }}
                          onClick={(event) => {
                            event.stopPropagation();
                            setActiveHotspot(spot.numericId);
                            setIsPlaying(false);
                          }}
                          aria-label={`Open ${spot.label} hotspot`}
                          aria-current={activeHotspot === spot.numericId}
                        >
                          <div className="relative">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white/90 text-brand-black shadow-md transition-transform group-hover:scale-110 sm:h-6 sm:w-6 ${
                                activeHotspot === spot.numericId
                                  ? "scale-110 border-brand-lime"
                                  : "border-white/90"
                              }`}
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-brand-black/70" />
                            </div>
                            <div
                              className={`pointer-events-none absolute z-30 w-max max-w-[11rem] rounded-xl border border-white/10 bg-brand-black/90 px-3 py-2 text-left text-xs font-bold leading-snug text-white opacity-0 shadow-card backdrop-blur transition-opacity group-hover:opacity-100 sm:max-w-[12.5rem] ${tooltipPlacement}`}
                            >
                              <span className="text-white">{spot.label}</span>
                              <span className="mt-0.5 block font-medium text-white/55">
                                {spot.description}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}

                  {calibratorEnabled && (
                    <HotspotCalibrator
                      currentFrame={currentImageIndex}
                      onFrameChange={(frame) => {
                        setIsPlaying(false);
                        setCurrentImageIndex(frame);
                        setRotationAngle(frameToAngle(frame));
                      }}
                      stageRef={vehicleStageRef}
                    />
                  )}
                  </div>
                </div>

                {/* Controls Overlay */}
                <div className="pointer-events-none absolute bottom-3 left-4 right-4 z-30 flex items-center justify-between lg:bottom-[5.25rem]">
                  <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-black/10 bg-white/85 px-3 py-1.5 text-brand-black shadow-sm backdrop-blur-xl sm:px-4 sm:py-2">
                     <RotateCcw className="h-4 w-4 text-brand-black/55" />
                     <div className="h-1.5 w-24 overflow-hidden rounded-full bg-black/10 sm:w-28">
                        <div 
                          className="h-full rounded-full bg-brand-black/75 transition-all duration-100"
                          style={{ width: `${(rotationAngle / 360) * 100}%` }}
                        />
                     </div>
                     <span className="hidden text-xs font-semibold text-brand-black/55 sm:inline">
                       {Math.round(frameToAngle(currentImageIndex))}°
                     </span>
                  </div>

                   <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-brand-black shadow-sm transition-transform hover:scale-105 sm:h-11 sm:w-11"
                    aria-label={isPlaying ? "Pause 360 rotation" : "Play 360 rotation"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="ml-1 h-5 w-5" />}
                  </button>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-brand-black shadow-sm backdrop-blur transition-all hover:scale-110 hover:border-brand-lime/50 hover:text-brand-lime active:scale-95 md:flex"
                  aria-label="Previous 360 angle"
                >
                  ←
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-brand-black shadow-sm backdrop-blur transition-all hover:scale-110 hover:border-brand-lime/50 hover:text-brand-lime active:scale-95 md:flex"
                  aria-label="Next 360 angle"
                >
                  →
                </button>
              </div>
              
              {/* Thumbnails */}
              <div className="absolute bottom-0 left-0 right-0 hidden grid-cols-4 gap-2 border-t border-black/8 bg-white/88 p-2.5 backdrop-blur-xl lg:grid">
                {[0, 2, 8, 10].map((idx) => (
                  <div 
                    key={idx} 
                    className="aspect-[16/9] cursor-pointer overflow-hidden rounded-lg border border-black/8 bg-[#f4f4f4] opacity-80 transition-all hover:scale-105 hover:border-brand-lime/50 hover:opacity-100"
                    onClick={() => {
                      setIsPlaying(false);
                      setCurrentImageIndex(idx);
                      setRotationAngle(frameToAngle(idx));
                    }}
                  >
                    <img src={car360Images[idx]} className="h-full w-full object-cover" alt="360 angle thumbnail" />
                  </div>
                ))}
              </div>
              </div>
            </div>

            <div className="flex min-h-0 min-w-0 flex-col justify-between gap-3 bg-[#0a0c0e] p-4 sm:p-5 lg:overflow-y-auto lg:p-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-brand-lime/25 bg-brand-lime/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-lime">
                    Featured
                  </span>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-extrabold text-brand-lime sm:text-3xl">
                      ₹18.5L
                    </p>
                    <p className="text-xs text-white/45">On-road · Mumbai</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-extrabold tracking-tight text-white sm:text-xl">
                    Certified Mid-Size SUV
                  </h3>
                  <p className="mt-0.5 text-sm text-white/50">
                    Automatic · Verified · 360° enabled
                  </p>
                </div>

                <dl className="grid grid-cols-2 gap-x-3 gap-y-2 border-y border-white/8 py-2.5">
                  {listingSpecs.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 shrink-0 text-brand-lime/80" strokeWidth={1.75} />
                      <div className="min-w-0">
                        <dt className="text-[10px] font-medium uppercase tracking-wide text-white/35">
                          {label}
                        </dt>
                        <dd className="truncate text-sm font-semibold text-white">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <motion.div
                  key={selectedHotspot.numericId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                >
                  <p className="text-sm font-bold text-white">{selectedHotspot.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {selectedHotspot.description}
                  </p>
                  <p className="mt-1.5 text-xs text-white/40">
                    Tap a hotspot on the vehicle to explore details.
                  </p>
                </motion.div>

                <div className="flex items-start gap-2.5 rounded-xl border border-brand-lime/15 bg-brand-lime/[0.06] px-3 py-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                  <p className="text-xs leading-relaxed text-white/55">
                    Passed our 140-point inspection. Every angle verified in the
                    interactive view.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <GlowButton href="/contact" variant="filled" className="w-full justify-center">
                  Book a Demo
                </GlowButton>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2 text-sm font-semibold text-white/70 transition-colors hover:border-white/20 hover:text-white"
                  >
                    <Heart className="h-4 w-4" />
                    Save
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2 text-sm font-semibold text-white/70 transition-colors hover:border-white/20 hover:text-white"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
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