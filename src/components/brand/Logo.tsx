import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: "h-8 w-8", text: "text-base", tagline: "text-[10px]" },
  md: { icon: "h-10 w-10", text: "text-lg", tagline: "text-[11px]" },
  lg: { icon: "h-12 w-12", text: "text-xl", tagline: "text-xs" },
};

export function Logo({ className, showTagline = true, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(s.icon, "shrink-0")}
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="24" fill="#C9F135" />
        <path
          d="M24 12C18 12 14 16 14 22C14 28 18 32 24 32C30 32 34 28 34 22"
          stroke="#3B9AE1"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M24 32V36M20 36H28"
          stroke="#0A0A0A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="22" r="3" fill="#0A0A0A" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={cn("font-heading font-extrabold tracking-tight", s.text)}>
          <span className="text-brand-blue">urban</span>{" "}
          <span className="text-brand-lime">uplink</span>
        </span>
        {showTagline && (
          <span className={cn("mt-1 text-brand-blue/80 font-medium", s.tagline)}>
            Smarter tools, greater impact
          </span>
        )}
      </div>
    </div>
  );
}
