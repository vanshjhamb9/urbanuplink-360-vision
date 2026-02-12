import img0 from "@/assets/output/processed_000.JPG";
import img1 from "@/assets/output/processed_001.JPG";
import img2 from "@/assets/output/processed_002.JPG";
import img3 from "@/assets/output/processed_003.JPG";
import img4 from "@/assets/output/processed_004.JPG";
import img5 from "@/assets/output/processed_005.JPG";
import img6 from "@/assets/output/processed_006.JPG";
import img7 from "@/assets/output/processed_007.JPG";

// Indian car showcase gallery with images, content, and tags
const carShowcase = [
  {
    image: img0,
    background: "from-blue-100 to-indigo-100",
    angle: "Front Profile",
    price: "₹26.9L",
    year: "2024",
    dark: false,
  },
  {
    image: img1,
    background: "from-slate-100 to-white",
    angle: "Front View",
    price: "₹24.5L",
    year: "2024",
    dark: false,
  },
  {
    image: img2,
    background: "from-red-100 to-orange-100",
    angle: "Front Quarter",
    price: "₹17.5L",
    year: "2024",
    dark: false,
  },
  {
    image: img3,
    background: "from-teal-100 to-cyan-100",
    angle: "Side Profile",
    price: "₹19.9L",
    year: "2024",
    dark: false,
  },
  {
    image: img4,
    background: "from-sky-100 to-blue-200",
    angle: "Front View",
    price: "₹20.1L",
    year: "2024",
    dark: false,
  },
  {
    image: img5,
    background: "from-emerald-100 to-green-100",
    angle: "Front Side",
    price: "Coming Soon",
    year: "2025",
    dark: false,
  },
  {
    image: img6,
    background: "from-gray-100 to-slate-200",
    angle: "Front View",
    price: "₹19.5L",
    year: "2024",
    dark: false,
  },
  {
    image: img7,
    background: "from-purple-100 to-pink-100",
    angle: "Front Profile",
    price: "₹18.9L",
    year: "2024",
    dark: false,
  },
];

const CarScrollBanner = () => {
  // Triple the array for smoother infinite scroll
  const duplicatedCars = [...carShowcase, ...carShowcase, ...carShowcase];

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm">
              Indian Automotive Excellence
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Driving{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              the Nation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the finest machines from India's leading automotive giants.
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className="flex animate-marquee hover:pause gap-4 md:gap-6"
          style={{ animationDuration: "20s" }} // Faster speed
        >
          {duplicatedCars.map((car, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-60 md:w-80 rounded-xl md:rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${car.background}`}
            >
              <div className="relative aspect-[4/3] group">
                <img
                  src={car.image}
                  alt={`${car.angle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-2 right-2 md:top-3 md:right-3 px-1.5 md:px-2 py-0.5 md:py-1 bg-white/90 backdrop-blur rounded-full text-[10px] md:text-xs font-semibold text-foreground shadow-sm">
                  {car.angle}
                </div>
              </div>
              <div className="p-3 md:p-4 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1"></div>
                  <div className="text-right ml-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-sm md:text-base">
                    {car.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative mt-4 md:mt-8">
        <div
          className="flex animate-marquee-reverse hover:pause gap-4 md:gap-6"
          style={{ animationDuration: "20s" }} // Faster speed
        >
          {[...duplicatedCars].reverse().map((car, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-60 md:w-80 rounded-xl md:rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${car.background}`}
            >
              <div className="relative aspect-[4/3] group">
                <img
                  src={car.image}
                  alt={`${car.angle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-2 right-2 md:top-3 md:right-3 px-1.5 md:px-2 py-0.5 md:py-1 bg-white/90 backdrop-blur rounded-full text-[10px] md:text-xs font-semibold text-foreground shadow-sm">
                  {car.angle}
                </div>
              </div>
              <div className="p-3 md:p-4 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1"></div>
                  <div className="text-right ml-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-sm md:text-base">
                    {car.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarScrollBanner;
