import tataHarrier from "@/assets/cretakingdriversideside.avif";
import sierraExterior from "@/assets/sierra-exterior.jpg";
import mahindraXuv700 from "@/assets/mahindra-xuv700.png";
import mahindraThar from "@/assets/mahindra-thar.png";
import tataNexon from "@/assets/tata-nexon.png";
import marutiGrandVitara from "@/assets/maruti-grand-vitara.png";
import hyundaiCreta from "@/assets/2025_creta_a9fcc943fb.jpg";

// Indian car showcase gallery with images, content, and tags
const carShowcase = [
  {
    image: mahindraXuv700,
    background: "from-blue-100 to-indigo-100",
    angle: "Front Profile",
    model: "Mahindra XUV700",
    brand: "Mahindra",
    tags: ["SUV", "Tech", "Premium"],
    price: "₹26.9L",
    year: "2024",
    description: "Adrenox intelligence with luxury features",
    dark: false,
  },
  {
    image: tataHarrier,
    background: "from-slate-100 to-white",
    angle: "Front View",
    model: "Tata Harrier",
    brand: "Tata",
    tags: ["SUV", "Safety", "Bold"],
    price: "₹24.5L",
    year: "2024",
    description: "Dark Edition with enhanced road presence",
    dark: false,
  },
  {
    image: mahindraThar,
    background: "from-red-100 to-orange-100",
    angle: "Off-Road Action",
    model: "Mahindra Thar",
    brand: "Mahindra",
    tags: ["4x4", "Off-Road", "Iconic"],
    price: "₹17.5L",
    year: "2024",
    description: "The ultimate off-road legend",
    dark: false,
  },
  {
    image: tataNexon,
    background: "from-teal-100 to-cyan-100",
    angle: "Side Profile",
    model: "Tata Nexon.ev",
    brand: "Tata",
    tags: ["EV", "Electric", "Future"],
    price: "₹19.9L",
    year: "2024",
    description: "India's #1 Electric SUV",
    dark: false,
  },
  {
    image: marutiGrandVitara,
    background: "from-sky-100 to-blue-200",
    angle: "Front Quarter",
    model: "Grand Vitara",
    brand: "Maruti Suzuki",
    tags: ["Hybrid", "Efficient", "Nexa"],
    price: "₹20.1L",
    year: "2024",
    description: "Intelligent Electric Hybrid technology",
    dark: false,
  },
  {
    image: sierraExterior,
    background: "from-emerald-100 to-green-100",
    angle: "Concept",
    model: "Tata Sierra",
    brand: "Tata",
    tags: ["Concept", "Electric", "Legacy"],
    price: "Coming Soon",
    year: "2025",
    description: "The return of a legend in electric avatar",
    dark: false,
  },
  {
    image: hyundaiCreta,
    background: "from-gray-100 to-slate-200",
    angle: "Front View",
    model: "Hyundai Creta",
    brand: "Hyundai",
    tags: ["SUV", "Popular", "Tech"],
    price: "₹19.5L",
    year: "2024",
    description: "The undisputed SUV king of India",
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
            Explore the finest machines from India's leading automotive giants. From rugged 4x4s to futuristic EVs.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee hover:pause gap-6">
          {duplicatedCars.map((car, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${car.background}`}
            >
              <div className="relative aspect-[4/3] group">
                <img
                  src={car.image}
                  alt={`${car.model} - ${car.angle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-foreground shadow-sm">
                  {car.angle}
                </div>
                {/* Tags overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                  {car.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-white/50 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">{car.brand}</div>
                    <h3 className="font-bold text-lg leading-tight">{car.model}</h3>
                  </div>
                  <div className="text-right ml-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                    {car.price}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {car.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative mt-8">
        <div className="flex animate-marquee-reverse hover:pause gap-6">
          {[...duplicatedCars].reverse().map((car, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${car.background}`}
            >
              <div className="relative aspect-[4/3] group">
                <img
                  src={car.image}
                  alt={`${car.model} - ${car.angle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-foreground shadow-sm">
                  {car.angle}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                  {car.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-white/50 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">{car.brand}</div>
                    <h3 className="font-bold text-lg leading-tight">{car.model}</h3>
                  </div>
                  <div className="text-right ml-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                    {car.price}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {car.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarScrollBanner;
