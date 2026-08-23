import type { ReactNode } from "react";
import {
  defaultStudioPlacement,
  showroomBackdrop,
  SHOWROOM_POSITION,
  type StudioPlacement,
} from "@/lib/studioVehicle";

type StudioVehicleFrameProps = {
  vehicleSrc: string;
  alt: string;
  className?: string;
  placement?: StudioPlacement;
  overlay?: ReactNode;
  backdropSrc?: string;
};

/**
 * Floor-anchored vehicle on showroom backdrop.
 * Uses a fixed 16:10 stage aligned to the bottom of the cell so the floor line
 * stays consistent regardless of outer aspect ratio.
 */
export function StudioVehicleFrame({
  vehicleSrc,
  alt,
  className = "",
  placement = defaultStudioPlacement,
  overlay,
  backdropSrc = showroomBackdrop,
}: StudioVehicleFrameProps) {
  const scale = placement.scale ?? 1;
  const offsetX = placement.offsetX ?? "0%";

  return (
    <div className={`relative overflow-hidden bg-[#0c0e10] ${className}`}>
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="relative aspect-[16/10] w-[118%] max-w-none shrink-0">
          <img
            src={backdropSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-105"
            style={{ objectPosition: SHOWROOM_POSITION }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-brand-black/20" />

          <div
            className="absolute inset-x-0 z-10 flex items-end justify-center"
            style={{
              bottom: placement.bottom,
              height: placement.height,
            }}
          >
            <img
              src={vehicleSrc}
              alt={alt}
              className="max-h-full object-contain object-bottom brightness-125 contrast-110 drop-shadow-[0_16px_32px_rgba(0,0,0,0.42)]"
              style={{
                width: placement.width,
                objectPosition: "50% 103%",
                transform: `translateX(${offsetX}) scale(${scale})`,
                transformOrigin: "center bottom",
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
      {overlay}
    </div>
  );
}
