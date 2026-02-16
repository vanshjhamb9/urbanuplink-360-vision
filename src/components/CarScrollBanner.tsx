import jeepImage from "@/assets/Jeep Grand Cherokee.png";
import harrierImage from "@/assets/tata_harrier.avif";
import logoIcon from "@/assets/2 (2).png";
import carBgImage from "@/assets/bgimage_car.webp";

// Indian car showcase gallery with images, content, and tags
const carShowcase = [
  {
    image: jeepImage,
    background: "from-slate-50 to-blue-50",
    angle: "Jeep Front Profile",
    name: "Jeep Grand Cherokee",
    price: "₹80.5L",
    year: "2024",
    dark: false,
  },
  {
    image: harrierImage,
    background: "from-blue-50 to-indigo-50",
    angle: "Harrier Side View",
    name: "Tata Harrier",
    price: "₹24.5L",
    year: "2024",
    dark: false,
  },
  {
    image: jeepImage,
    background: "from-slate-100 to-white",
    angle: "Jeep Low Angle",
    name: "Jeep Grand Cherokee",
    price: "₹78.9L",
    year: "2024",
    dark: false,
  },
  {
    image: harrierImage,
    background: "from-indigo-50 to-blue-100",
    angle: "Harrier Quarter View",
    name: "Tata Harrier",
    price: "₹26.2L",
    year: "2024",
    dark: false,
  },
  {
    image: jeepImage,
    background: "from-white to-slate-50",
    angle: "Jeep Dynamic View",
    name: "Jeep Grand Cherokee",
    price: "₹80.1L",
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
              className={`flex-shrink-0 w-60 md:w-80 rounded-xl md:rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white border border-slate-100`}
            >
              <div className="relative aspect-[4/3] group overflow-hidden">
                {/* Showroom Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white" />
                <img 
                  src={carBgImage} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80" 
                  alt="" 
                />
                
                {/* Centered Logo on the wall - Positioned higher to be visible */}
                <div className="absolute inset-x-0 top-6 flex items-center justify-center pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-0">
                  <img src={logoIcon} className="w-20 md:w-28 h-auto object-contain" alt="" />
                </div>

                {/* Car Image - With extra top padding to reveal logo */}
                <img
                  src={car.image}
                  alt={`${car.angle}`}
                  className="relative z-10 w-full h-full object-contain pt-10 pb-2 px-2 md:pt-12 md:pb-4 md:px-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-2 md:top-3 md:right-3 px-1.5 md:px-2 py-0.5 md:py-1 bg-white/90 backdrop-blur rounded-full text-[10px] md:text-xs font-semibold text-foreground shadow-sm z-20">
                  {car.angle}
                </div>
              </div>
              <div className="p-3 md:p-4 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-sm md:text-base text-slate-800 truncate">{car.name}</h4>
                    <p className="text-[10px] md:text-xs text-slate-500">{car.year} Model</p>
                  </div>
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
              className={`flex-shrink-0 w-60 md:w-80 rounded-xl md:rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white border border-slate-100`}
            >
              <div className="relative aspect-[4/3] group overflow-hidden">
                {/* Showroom Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white" />
                <img 
                  src={carBgImage} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80" 
                  alt="" 
                />
                
                {/* Centered Logo on the wall - Positioned higher to be visible */}
                <div className="absolute inset-x-0 top-6 flex items-center justify-center pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-0">
                  <img src={logoIcon} className="w-20 md:w-28 h-auto object-contain" alt="" />
                </div>

                {/* Car Image - With extra top padding to reveal logo */}
                <img
                  src={car.image}
                  alt={`${car.angle}`}
                  className="relative z-10 w-full h-full object-contain pt-10 pb-2 px-2 md:pt-12 md:pb-4 md:px-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-2 right-2 md:top-3 md:right-3 px-1.5 md:px-2 py-0.5 md:py-1 bg-white/90 backdrop-blur rounded-full text-[10px] md:text-xs font-semibold text-foreground shadow-sm z-20">
                  {car.angle}
                </div>
              </div>
              <div className="p-3 md:p-4 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-sm md:text-base text-slate-800 truncate">{car.name}</h4>
                    <p className="text-[10px] md:text-xs text-slate-500">{car.year} Model</p>
                  </div>
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
