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
    icon: "h-8 w-8",
    wordmark: "h-8 w-[9rem]",
  },
  md: {
    icon: "h-9 w-9",
    wordmark: "h-9 w-[10.25rem]",
  },
  lg: {
    icon: "h-10 w-10",
    wordmark: "h-10 w-[11.25rem]",
  },
};

export function Logo({ className, showTagline = true, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img
        src={logoIcon}
        alt=""
        className={cn(s.icon, "shrink-0 object-contain")}
        aria-hidden="true"
      />
      <img
        src={logoWordmark}
        alt={showTagline ? "Urban Uplink - Smarter tools, greater impact" : "Urban Uplink"}
        className={cn(s.wordmark, "shrink-0 object-contain object-left")}
      />
    </div>
  );
}
