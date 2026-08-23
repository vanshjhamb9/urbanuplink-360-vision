import carBgImage1 from "@/assets/bg-removed/Output/processed_001.png";
import carBgImage2 from "@/assets/bg-removed/Output/processed_002.png";
import carBgImage3 from "@/assets/bg-removed/Output/processed_003.png";
import carBgImage4 from "@/assets/bg-removed/Output/processed_004.png";
import carBgImage5 from "@/assets/bg-removed/Output/processed_005.png";
import carBgImage6 from "@/assets/bg-removed/Output/processed_007.png";
import harrierImage from "@/assets/bg-removed/Output/processed_010.png";
import { assets } from "@/lib/assets";

/** Matches 360 viewer — keeps studio floor line consistent across cards */
const SHOWROOM_BACKDROP_POSITION = "center 44%";

type CarPlacement = {
  bottom: string;
  height: string;
  width: string;
  offsetX?: string;
  offsetY?: string;
};

type CarShowcaseItem = {
  image: string;
  angle: string;
  name: string;
  price: string;
  placement: CarPlacement;
};

/** Smaller cars with more backdrop visible — floor-anchored */
const defaultPlacement: CarPlacement = {
  bottom: "7%",
  height: "64%",
  width: "76%",
  offsetY: "1%",
};

const carShowcase: CarShowcaseItem[] = [
  {
    image: carBgImage6,
    angle: "Studio Front",
    name: "Flagship SUV",
    price: "₹78.9L",
    placement: { ...defaultPlacement, width: "80%", height: "66%" },
  },
  {
    image: carBgImage1,
    angle: "Quarter View",
    name: "Luxury SUV",
    price: "₹12.7L",
    placement: { ...defaultPlacement, width: "78%", offsetX: "1%" },
  },
  {
    image: carBgImage2,
    angle: "Front View",
    name: "Compact Hatchback",
    price: "₹6.4L",
    placement: { ...defaultPlacement, width: "72%", height: "62%", offsetX: "2.5%" },
  },
  {
    image: harrierImage,
    angle: "Front Quarter",
    name: "Crossover",
    price: "₹33.9L",
    placement: { ...defaultPlacement, width: "76%", offsetX: "2%" },
  },
  {
    image: carBgImage3,
    angle: "Side View",
    name: "Urban Hatchback",
    price: "₹6.8L",
    placement: { ...defaultPlacement, width: "70%", height: "60%", offsetX: "1%" },
  },
  {
    image: carBgImage4,
    angle: "Front View",
    name: "Mid-Size SUV",
    price: "₹11.0L",
    placement: { ...defaultPlacement, width: "74%" },
  },
  {
    image: carBgImage5,
    angle: "Front View",
    name: "Electric SUV",
    price: "₹44.9L",
    placement: { ...defaultPlacement, width: "80%", height: "66%" },
  },
];

const buildMarqueeTransform = (placement: CarPlacement) => {
  const x = placement.offsetX ?? "0";
  const y = placement.offsetY ?? "0";
  if (x === "0" && y === "0") return undefined;
  return `translate(${x}, ${y})`;
};

const CarScrollBanner = () => {
  /** Two identical sequences for a seamless infinite loop (-50% translate) */
  const marqueeTrack = [...carShowcase, ...carShowcase];
  const reverseSource = [...carShowcase].reverse();
  const reverseTrack = [...reverseSource, ...reverseSource];

  const renderCard = (car: CarShowcaseItem, index: number) => (
    <div
      key={`${car.name}-${car.angle}-${index}`}
      className="w-60 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-card transition-transform duration-300 hover:scale-[1.02] md:w-80 md:rounded-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#141210]">
        <img
          src={assets.showroom.background2}
          className="absolute inset-0 h-full w-full object-cover brightness-105"
          style={{ objectPosition: SHOWROOM_BACKDROP_POSITION }}
          alt=""
        />
        <div
          className="absolute inset-x-0 z-10 flex items-end justify-center"
          style={{
            bottom: car.placement.bottom,
            height: car.placement.height,
          }}
        >
          <img
            src={car.image}
            alt={`${car.name} — ${car.angle}`}
            className="max-h-full object-contain object-bottom drop-shadow-[0_14px_28px_rgba(0,0,0,0.38)] [object-position:50%_103%]"
            style={{
              width: car.placement.width,
              transform: buildMarqueeTransform(car.placement),
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="absolute right-2 top-2 z-20 rounded-full border border-white/15 bg-brand-black/70 px-2 py-0.5 text-[10px] font-semibold text-white/80 backdrop-blur md:text-xs">
          {car.angle}
        </div>
      </div>
      <div className="border-t border-white/10 p-3 md:p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h4 className="truncate text-sm font-bold text-white md:text-base">{car.name}</h4>
          </div>
          <div className="shrink-0 text-sm font-extrabold text-brand-lime md:text-base">
            {car.price}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="relative z-20 overflow-hidden bg-brand-black py-14 md:py-20"
      aria-labelledby="social-output-heading"
    >
      <div className="container mx-auto mb-10 px-4 md:mb-12 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
            Marketing-ready output
          </p>
          <h2
            id="social-output-heading"
            className="font-heading text-3xl font-extrabold text-white md:text-4xl"
          >
            Repurpose listings across{" "}
            <span className="text-brand-lime">every channel.</span>
          </h2>
          <p className="mt-4 text-base text-white/60 md:text-lg">
            Show how Urban Uplink visuals work for social, marketplaces, and dealer campaigns —
            consistent presentation wherever buyers discover inventory.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] md:gap-6">
          {marqueeTrack.map((car, index) => renderCard(car, index))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-black to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-black to-transparent md:w-24" />
      </div>

      <div className="relative mt-6 overflow-hidden md:mt-8">
        <div className="flex w-max animate-marquee-reverse gap-4 hover:[animation-play-state:paused] md:gap-6">
          {reverseTrack.map((car, index) => renderCard(car, index))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-black to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-black to-transparent md:w-24" />
      </div>
    </section>
  );
};

export default CarScrollBanner;
