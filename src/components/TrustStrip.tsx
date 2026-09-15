import { trustStrip } from "@/lib/homepageContent";

const TrustStrip = () => {
  return (
    <section
      className="relative z-20 border-b border-white/8 bg-brand-black py-7 md:py-8"
      aria-label="Trusted partners"
    >
      <div className="page-container">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
          {trustStrip.label}
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10 md:gap-x-12">
          {trustStrip.partners.map((name) => (
            <li
              key={name}
              className="font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-white/35 sm:text-sm"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStrip;
