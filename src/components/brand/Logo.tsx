import logoIcon from "@/assets/logo-icon-cropped.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Kept for API compatibility — tagline is never rendered in chrome */
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: {
    icon: "h-9 w-9",
    word: "text-[1.05rem] leading-none tracking-tight",
    gap: "gap-2.5",
  },
  md: {
    icon: "h-10 w-10 sm:h-11 sm:w-11",
    word: "text-[1.2rem] leading-none tracking-tight sm:text-[1.35rem]",
    gap: "gap-2.5 sm:gap-3",
  },
  lg: {
    icon: "h-12 w-12",
    word: "text-[1.5rem] leading-none tracking-tight",
    gap: "gap-3",
  },
};

/**
 * Text wordmark: white "urban" + lime "uplink" for dark-bg contrast.
 * Icon sized to match wordmark height; tagline omitted at chrome scale.
 */
export function Logo({ className, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={cn("flex items-center", s.gap, className)}>
      <img
        src={logoIcon}
        alt=""
        className={cn(s.icon, "shrink-0 object-contain")}
        aria-hidden="true"
        draggable={false}
      />
      <span
        className={cn("font-heading font-extrabold italic lowercase", s.word)}
        aria-label="Urban Uplink"
      >
        <span className="text-white">urban</span>
        <span className="text-brand-lime"> uplink</span>
      </span>
    </div>
  );
}
