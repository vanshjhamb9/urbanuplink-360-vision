import heroImage from "@/assets/hero-car.jpg";
import dealershipImage from "@/assets/dealership.jpg";

const carShowcase = [
  {
    image: heroImage,
    background: "from-slate-100 to-white",
    angle: "Front View",
    model: "Sports Coupe",
  },
  {
    image: dealershipImage,
    background: "from-blue-100 to-cyan-100",
    angle: "Side Profile",
    model: "Luxury Sedan",
  },
  {
    image: heroImage,
    background: "from-purple-100 to-pink-100",
    angle: "Rear Quarter",
    model: "Electric SUV",
  },
  {
    image: dealershipImage,
    background: "from-green-100 to-emerald-100",
    angle: "Interior",
    model: "Premium Hatchback",
  },
  {
    image: heroImage,
    background: "from-orange-100 to-yellow-100",
    angle: "Top View",
    model: "Convertible",
  },
  {
    image: dealershipImage,
    background: "from-slate-800 to-slate-900",
    angle: "Night Shot",
    model: "Sports Car",
    dark: true,
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
            Professional quality outputs with AI-powered background replacement
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
                  className="w-full h-full object-cover"
                  style={{
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
                  }}
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-foreground">
                  {car.angle}
                </div>
              </div>
              <div className={`p-4 ${car.dark ? "text-white" : "text-foreground"}`}>
                <h3 className="font-bold text-lg">{car.model}</h3>
                <p className={`text-sm ${car.dark ? "text-white/70" : "text-muted-foreground"}`}>
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
                  className="w-full h-full object-cover"
                  style={{
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
                  }}
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-foreground">
                  {car.angle}
                </div>
              </div>
              <div className={`p-4 ${car.dark ? "text-white" : "text-foreground"}`}>
                <h3 className="font-bold text-lg">{car.model}</h3>
                <p className={`text-sm ${car.dark ? "text-white/70" : "text-muted-foreground"}`}>
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
