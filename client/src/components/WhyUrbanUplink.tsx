import { Zap, Target, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get 360° views in under 10 minutes. Our AI-powered processing is 10x faster than traditional methods.",
    stat: "10 min",
    label: "Average Processing Time",
  },
  {
    icon: Target,
    title: "Pixel-Perfect Accuracy",
    description: "Real photography captures every detail authentically. No approximations, no 3D modeling guesswork.",
    stat: "100%",
    label: "Real Photography",
  },
  {
    icon: Users,
    title: "Easy to Use",
    description: "No training required. If you can use a smartphone camera, you can use UrbanUplink.",
    stat: "15 min",
    label: "Setup Time",
  },
  {
    icon: Award,
    title: "Industry Leading",
    description: "Trusted by 500+ dealerships worldwide. Award-winning technology that delivers results.",
    stat: "500+",
    label: "Happy Customers",
  },
];

const WhyUrbanUplink = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
            <span className="text-primary-foreground font-semibold text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why UrbanUplink?
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            The most advanced, easiest-to-use 360° vehicle imaging platform on the market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-background/5 backdrop-blur border border-primary-foreground/10 hover:bg-background/10 hover:border-primary-foreground/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  {reason.stat}
                </div>
                <div className="text-xs text-secondary-foreground/60 uppercase tracking-wider">
                  {reason.label}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-secondary-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUrbanUplink;
