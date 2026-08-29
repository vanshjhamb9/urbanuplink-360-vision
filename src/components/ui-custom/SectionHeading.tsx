import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "page";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  size = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        size === "page" ? "max-w-3xl" : "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading font-extrabold tracking-tight text-white",
          size === "page"
            ? "text-2xl sm:text-3xl md:text-[2.35rem] lg:text-4xl"
            : "text-xl sm:text-2xl md:text-[1.65rem] lg:text-3xl",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-brand sm:text-[0.9375rem] md:mt-4 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
