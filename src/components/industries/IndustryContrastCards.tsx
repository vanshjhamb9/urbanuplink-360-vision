import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ContrastImage = {
  desktop: string;
  mobile: string;
  alt: string;
  objectPosition?: string;
};

interface IndustryContrastCardsProps {
  problemTitle: string;
  problem: string;
  problemImage: ContrastImage;
  solutionTitle: string;
  solution: string;
  solutionImage: ContrastImage;
  visible: boolean;
}

function ContrastCard({
  eyebrow,
  title,
  body,
  image,
  variant,
  delay,
  visible,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: ContrastImage;
  variant: "problem" | "solution";
  delay: number;
  visible: boolean;
}) {
  const isSolution = variant === "solution";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={cn(
        "flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border bg-[#080a0c]",
        isSolution
          ? "border-brand-lime/30 shadow-[0_0_40px_-12px_rgba(201,241,53,0.35)]"
          : "border-white/12",
      )}
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#0a0c0e]">
        <picture>
          <source media="(max-width: 767px)" srcSet={image.mobile} />
          <img
            src={image.desktop}
            alt={image.alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: image.objectPosition ?? "center center" }}
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent",
            isSolution ? "from-brand-black/40 via-transparent" : "from-black/50 via-transparent",
          )}
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p
          className={cn(
            "mb-2 text-[10px] font-bold uppercase tracking-[0.18em]",
            isSolution ? "text-brand-lime" : "text-white/45",
          )}
        >
          {eyebrow}
        </p>
        <h3 className="font-heading text-xl font-extrabold text-white md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
          {body}
        </p>
      </div>
    </motion.article>
  );
}

export function IndustryContrastCards({
  problemTitle,
  problem,
  problemImage,
  solutionTitle,
  solution,
  solutionImage,
  visible,
}: IndustryContrastCardsProps) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
      <ContrastCard
        eyebrow="Problem"
        title={problemTitle}
        body={problem}
        image={problemImage}
        variant="problem"
        delay={0.05}
        visible={visible}
      />
      <ContrastCard
        eyebrow="Solution"
        title={solutionTitle}
        body={solution}
        image={solutionImage}
        variant="solution"
        delay={0.1}
        visible={visible}
      />
    </div>
  );
}
