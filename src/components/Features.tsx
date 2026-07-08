import { Camera, Zap, TrendingUp, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Real 360° Photography",
    description:
      "Interactive vehicle experiences without expensive cameras or 3D modelling.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Go from capture to live listing in minutes.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Proven Sales Growth",
    description:
      "Increase listing engagement, buyer confidence and enquiry quality.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Brand Customization",
    description:
      "Create a consistent premium experience across every customer touchpoint.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm">
            <span className="text-accent font-semibold text-xs md:text-sm tracking-wide uppercase">
              Complete Solution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Market Vehicles Better.
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            One platform for capturing, enhancing, showcasing and publishing
            professional automotive inventory.
          </p>
        </div>

        {/* Features Grid - Perfectly Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group h-full flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border/50 hover:border-accent/50 bg-card/90 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl group-hover:scale-150 group-hover:opacity-75 transition-all duration-700 opacity-30`} />

              <CardContent className="p-6 md:p-8 flex flex-col h-full relative z-10" style={{ overflow: 'visible' }}>
                {/* Icon Container */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1"
                  style={{ 
                    lineHeight: '1.7',
                    paddingBottom: '0.5rem',
                    overflow: 'visible'
                  }}
                >
                  {feature.description}
                </p>

                {/* Decorative bottom accent */}
                <div className={`mt-4 md:mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
