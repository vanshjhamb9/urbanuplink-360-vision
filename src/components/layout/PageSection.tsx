import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bordered?: boolean;
  compact?: boolean;
  "aria-labelledby"?: string;
};

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(function PageSection(
  { children, className, id, bordered = false, compact = false, ...rest },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative z-20 overflow-hidden bg-brand-black",
        compact ? "section-compact" : "section-shell",
        bordered && "border-y border-white/8",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
});

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  width?: "narrow" | "default" | "wide" | "full";
};

export function PageContainer({
  children,
  className,
  width = "default",
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "page-container relative mx-auto w-full",
        width === "narrow" && "page-container-narrow",
        width === "wide" && "page-container-wide",
        width === "full" && "max-w-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
