import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  orientation?: "horizontal" | "vertical";
  aspectClass?: string;
  className?: string;
  variant?: "default" | "hero";
  objectPosition?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  orientation = "horizontal",
  aspectClass = "aspect-video",
  className,
  variant = "default",
  objectPosition = "center",
}: BeforeAfterSliderProps) {
  const isHero = variant === "hero";
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const reducedMotion = useReducedMotion();
  const position = useMotionValue(50);
  const springPosition = useSpring(position, {
    stiffness: 400,
    damping: 40,
    mass: 0.5,
  });

  const clipPath = useTransform(springPosition, (value) =>
    orientation === "horizontal"
      ? `inset(0 ${100 - value}% 0 0)`
      : `inset(0 0 ${100 - value}% 0)`,
  );

  const handlePosition = useTransform(springPosition, (value) =>
    orientation === "horizontal" ? `${value}%` : undefined,
  );

  const handlePositionVertical = useTransform(springPosition, (value) =>
    orientation === "vertical" ? `${value}%` : undefined,
  );

  const updatePosition = useCallback(
    (clientX: number, clientY: number) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const value =
        orientation === "horizontal"
          ? ((clientX - rect.left) / rect.width) * 100
          : ((clientY - rect.top) / rect.height) * 100;

      position.set(Math.max(4, Math.min(96, value)));
    },
    [orientation, position],
  );

  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e: MouseEvent) => updatePosition(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updatePosition(touch.clientX, touch.clientY);
    };
    const onEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isDragging, updatePosition]);

  const HandleIcon =
    orientation === "horizontal" ? (
      <>
        <ChevronLeft className="h-4 w-4" />
        <ChevronRight className="h-4 w-4" />
      </>
    ) : (
      <ChevronsUpDown className="h-5 w-5" />
    );

  const imageClass = cn(
    "absolute inset-0 h-full w-full object-cover",
    objectPosition === "center"
      ? "object-center"
      : objectPosition === "right"
        ? "object-[70%_center] md:object-[75%_center]"
        : objectPosition,
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative select-none overflow-visible",
        isHero
          ? "h-full w-full"
          : cn("rounded-2xl border border-white/10 shadow-card", aspectClass),
        className,
      )}
      role="img"
      aria-label={`${beforeLabel} and ${afterLabel} comparison slider`}
    >
      <img
        src={afterSrc}
        alt={afterLabel}
        className={imageClass}
        draggable={false}
        loading="eager"
      />

      <motion.div className="absolute inset-0 overflow-hidden" style={{ clipPath }}>
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className={imageClass}
          draggable={false}
          loading="eager"
        />
      </motion.div>

      <div
        className={cn(
          "pointer-events-none absolute z-20 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-black",
          isHero ? "right-6 top-6 md:right-10 md:top-10" : "left-3 top-3 sm:left-4 sm:top-4",
        )}
      >
        {beforeLabel}
      </div>
      <div
        className={cn(
          "pointer-events-none absolute z-20 rounded-full bg-brand-lime px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-black",
          isHero ? "bottom-6 right-6 md:bottom-10 md:right-10" : "bottom-4 right-4",
        )}
      >
        {afterLabel}
      </div>

      {orientation === "horizontal" ? (
        <motion.div
          className="absolute inset-y-0 z-30 w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          style={{ left: handlePosition }}
        />
      ) : (
        <motion.div
          className="absolute inset-x-0 z-30 h-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          style={{ top: handlePositionVertical }}
        />
      )}

      <motion.button
        type="button"
        aria-label="Drag to compare before and after"
        className={cn(
          "absolute z-40 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-black/80 text-white shadow-glow backdrop-blur-sm transition-transform",
          "h-10 w-10 sm:h-12 sm:w-12",
          orientation === "horizontal" ? "cursor-ew-resize" : "cursor-ns-resize",
          isDragging && "scale-110",
        )}
        style={
          orientation === "horizontal"
            ? { left: handlePosition, top: "50%" }
            : { top: handlePositionVertical, left: "50%" }
        }
        onMouseDown={() => !reducedMotion && setIsDragging(true)}
        onTouchStart={() => !reducedMotion && setIsDragging(true)}
        onKeyDown={(e) => {
          const step = e.shiftKey ? 10 : 2;
          const current = position.get();
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            position.set(Math.max(4, current - step));
          }
          if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            position.set(Math.min(96, current + step));
          }
        }}
      >
        {HandleIcon}
      </motion.button>
    </div>
  );
}
