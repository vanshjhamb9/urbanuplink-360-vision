import { cn } from "@/lib/utils";
import logoIcon from "@/assets/logo-icon-cropped.png";
import logoWordmark from "@/assets/logo-wordmark-cropped.png";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: {
    icon: "h-9 w-9",
    wordmark: "h-7 w-[8.5rem]",
    gap: "gap-2",
  },
  md: {
    icon: "h-11 w-11",
    wordmark: "h-8 w-[9.75rem]",
    gap: "gap-2.5",
  },
  lg: {
    icon: "h-12 w-12",
    wordmark: "h-9 w-[11rem]",
    gap: "gap-3",
  },
};

export function Logo({ className, showTagline = false, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={cn("flex items-center", s.gap, className)}>
      <img
        src={logoIcon}
        alt=""
        className={cn(s.icon, "shrink-0 object-contain")}
        aria-hidden="true"
      />
      <img
        src={logoWordmark}
        alt="Urban Uplink"
        className={cn(
          s.wordmark,
          "shrink-0 object-contain object-left brightness-110 contrast-110",
        )}
      />
    </div>
  );
}
