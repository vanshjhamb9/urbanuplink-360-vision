import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-[1.65rem] lg:text-3xl">
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
