import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "sync" | "auto";
  onLoad?: () => void;
  /** Tailwind object-position classes applied to the img */
  objectPosition?: string;
  /** Breakpoint matching Tailwind md (768px) */
  mobileBreakpoint?: string;
}

export function ResponsiveImage({
  desktopSrc,
  mobileSrc,
  alt,
  className,
  imgClassName,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
  onLoad,
  objectPosition = "object-center",
  mobileBreakpoint = "(max-width: 767px)",
}: ResponsiveImageProps) {
  return (
    <picture className={cn("block h-full w-full", className)}>
      <source media={mobileBreakpoint} srcSet={mobileSrc} />
      <img
        src={desktopSrc}
        alt={alt}
        className={cn("h-full w-full object-cover", objectPosition, imgClassName)}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        onLoad={onLoad}
      />
    </picture>
  );
}
