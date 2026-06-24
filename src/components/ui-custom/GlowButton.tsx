import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "filled";
  external?: boolean;
}

export function GlowButton({
  href,
  children,
  className,
  variant = "outline",
  external = false,
}: GlowButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300",
    variant === "outline" &&
      "border border-brand-lime bg-transparent text-white hover:bg-brand-lime hover:text-brand-black hover:shadow-glow",
    variant === "filled" &&
      "border border-brand-lime bg-brand-lime text-brand-black hover:brightness-110 hover:shadow-glow",
    className,
  );

  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {content}
    </Link>
  );
}
