import tataHarrier from "@/assets/cretakingdriversideside.avif";
import sierraExterior from "@/assets/sierra-exterior.jpg";
import sierraInterior from "@/assets/sierra-interior.jpg";
import bgRemoved from "@/assets/bg-removed.png";
import car360_1 from "@/assets/1r.png";
import car360_2 from "@/assets/2r.png";
import car360_3 from "@/assets/3r.png";
import car360_4 from "@/assets/4r.png";
import car360_5 from "@/assets/5r.png";
import car360_6 from "@/assets/6r.png";

// Indian car showcase gallery with images, content, and tags
const carShowcase = [
  {
    image: tataHarrier,
    background: "from-slate-100 to-white",
    angle: "Front View",
    model: "Tata Harrier",
    brand: "Tata",
    tags: ["SUV", "Premium", "Mumbai"],
    price: "₹24.5L",
    year: "2024",
    description: "Dark Edition with Adventure Plus AWD",
  },
  {
    image: sierraExterior,
    background: "from-blue-100 to-cyan-100",
    angle: "Side Profile",
    model: "Tata Sierra",
    brand: "Tata",
    tags: ["SUV", "Electric", "Delhi"],
    price: "₹19.9L",
    year: "2024",
    description: "Premium electric SUV with advanced features",
  },
  {
    image: bgRemoved,
    background: "from-purple-100 to-pink-100",
    angle: "360° View",
    model: "Tata Harrier",
    brand: "Tata",
    tags: ["360°", "Interactive", "AI-Enhanced"],
    price: "₹24.5L",
    year: "2024",
    description: "Background removed with perfect edge detection",
  },
  {
    image: sierraInterior,
    background: "from-green-100 to-emerald-100",
    angle: "Interior",
    model: "Tata Sierra",
    brand: "Tata",
    tags: ["Interior", "Premium", "Luxury"],
    price: "₹19.9L",
    year: "2024",
    description: "Spacious cabin with modern technology",
  },
  {
    image: car360_1,
    background: "from-orange-100 to-yellow-100",
    angle: "0° View",
    model: "Tata Harrier",
    brand: "Tata",
    tags: ["360°", "Front", "Professional"],
    price: "₹24.5L",
    year: "2024",
    description: "360° rotation starting point",
  },
  {
    image: car360_3,
    background: "from-indigo-100 to-purple-100",
    angle: "60° View",
    model: "Tata Harrier",
    brand: "Tata",
    tags: ["360°", "Side", "AI-Enhanced"],
    price: "₹24.5L",
    year: "2024",
    description: "Perfect side angle capture",
  },
  {
    image: car360_6,
    background: "from-teal-100 to-cyan-100",
    angle: "150° View",
    model: "Tata Harrier",
    brand: "Tata",
    tags: ["360°", "Rear", "Premium"],
    price: "₹24.5L",
    year: "2024",
    description: "Rear three-quarter view",
  },
  {
    image: car360_4,
    background: "from-rose-100 to-pink-100",
    angle: "90° View",
    model: "Tata Harrier",
    brand: "Tata",
    tags: ["360°", "Side", "Professional"],
    price: "₹24.5L",
    year: "2024",
    description: "Perfect side profile shot",
  },
  {
    image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/193017/sierra-exterior-right-front-three-quarter-60.jpeg?isig=0&q=40",
    background: "from-amber-100 to-yellow-100",
    angle: "Three-Quarter",
    model: "Tata Sierra",
    brand: "Tata",
    tags: ["Exterior", "Premium", "Electric"],
    price: "₹19.9L",
    year: "2024",
    description: "Right front three-quarter view",
  },
  {
    image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/193017/sierra-interior-dashboard-29.jpeg?isig=0&q=40",
    background: "from-violet-100 to-purple-100",
    angle: "Dashboard",
    model: "Tata Sierra",
    brand: "Tata",
    tags: ["Interior", "Dashboard", "Technology"],
    price: "₹19.9L",
    year: "2024",
    description: "Modern dashboard with digital displays",
  },
  {
    image: car360_2,
    background: "from-emerald-100 to-green-100",
    angle: "30° View",
    model: "Tata Harrier",
    brand: "Tata",
    tags: ["360°", "Front-Side", "AI-Enhanced"],
    price: "₹24.5L",
    year: "2024",
    description: "Front-side angle with perfect lighting",
  },
  {
    image: car360_5,
    background: "from-sky-100 to-blue-100",
    angle: "120° View",
    model: "Tata Harrier",
    brand: "Tata",
    tags: ["360°", "Side-Rear", "Professional"],
    price: "₹24.5L",
    year: "2024",
    description: "Side-rear transition angle",
  },
];

const CarScrollBanner = () => {
  const duplicatedCars = [...carShowcase, ...carShowcase];

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm">
              Showcase Gallery
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Stunning Results,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Angle
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our gallery of Indian cars - Tata, Mahindra, Maruti and more. Professional quality with AI-powered 360° imaging
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
              <div className="relative aspect-[4/3]">
                <img
                  src={car.image}
                  alt={`${car.model} - ${car.angle}`}
                  className="w-full h-full object-contain bg-muted/20"
                  style={{
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
                  }}
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-foreground">
                  {car.angle}
                </div>
                {/* Tags overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                  {car.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`p-4 ${car.dark ? "text-white" : "text-foreground"}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">{car.brand}</div>
                    <h3 className="font-bold text-lg">{car.model}</h3>
                    <p className="text-xs text-muted-foreground">{car.year} • {car.description}</p>
                  </div>
                  <div className="text-right ml-2">
                    <div className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {car.price}
                    </div>
                  </div>
                </div>
                <p className={`text-xs mt-2 ${car.dark ? "text-white/70" : "text-muted-foreground"}`}>
                  AI-Enhanced • Professional Grade
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative mt-8">
        <div className="flex animate-marquee-reverse hover:pause gap-6">
          {[...duplicatedCars].reverse().map((car, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${car.background}`}
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={car.image}
                  alt={`${car.model} - ${car.angle}`}
                  className="w-full h-full object-contain bg-muted/20"
                  style={{
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
                  }}
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-foreground">
                  {car.angle}
                </div>
                {/* Tags overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                  {car.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`p-4 ${car.dark ? "text-white" : "text-foreground"}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">{car.brand}</div>
                    <h3 className="font-bold text-lg">{car.model}</h3>
                    <p className="text-xs text-muted-foreground">{car.year} • {car.description}</p>
                  </div>
                  <div className="text-right ml-2">
                    <div className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {car.price}
                    </div>
                  </div>
                </div>
                <p className={`text-xs mt-2 ${car.dark ? "text-white/70" : "text-muted-foreground"}`}>
                  AI-Enhanced • Professional Grade
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
