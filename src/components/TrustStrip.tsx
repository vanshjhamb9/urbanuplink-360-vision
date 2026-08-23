import { trustStrip } from "@/lib/homepageContent";

const TrustStrip = () => {
  return (
    <section
      className="relative z-20 border-b border-white/8 bg-brand-black py-5"
      aria-label="Trust indicators"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
            {trustStrip.label}
          </p>
          <span className="hidden h-4 w-px bg-white/15 sm:inline-block" aria-hidden="true" />
          <p className="text-sm font-medium text-white/70">{trustStrip.placeholder}</p>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
