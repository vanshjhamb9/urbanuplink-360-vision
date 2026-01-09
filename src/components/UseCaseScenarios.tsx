import { useState } from "react";
import { MessageCircle, Globe, Instagram, Facebook, Smartphone, TrendingUp, Users, Eye } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const useCases = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp Status",
    description: "Share stunning car videos on WhatsApp Status for maximum reach",
    color: "from-green-500 to-green-600",
    mockup: "phone",
    stats: { reach: "3x", engagement: "85%" },
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Integration",
    description: "Embed interactive 360° viewers directly on your website",
    color: "from-blue-500 to-blue-600",
    mockup: "desktop",
    stats: { reach: "5x", engagement: "92%" },
  },
  {
    id: "instagram",
    icon: Instagram,
    title: "Instagram Content",
    description: "Create scroll-stopping reels and stories for Instagram",
    color: "from-pink-500 to-purple-600",
    mockup: "phone",
    stats: { reach: "4x", engagement: "78%" },
  },
  {
    id: "facebook",
    icon: Facebook,
    title: "Facebook Marketplace",
    description: "Stand out on Facebook Marketplace with professional imagery",
    color: "from-blue-600 to-blue-700",
    mockup: "desktop",
    stats: { reach: "2.5x", engagement: "68%" },
  },
];

const UseCaseScenarios = () => {
  const [activeCase, setActiveCase] = useState("whatsapp");

  const currentCase = useCases.find((uc) => uc.id === activeCase) || useCases[0];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm">
              Multi-Platform Power
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Share{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Everywhere
            </span>
            , Impress Everyone
          </h2>
          <p className="text-lg text-muted-foreground">
            Your 360° content works beautifully across all platforms and devices
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Controls - Horizontal scroll on mobile, Vertical list on desktop */}
          {/* Controls - Grid on mobile, Vertical list on desktop */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3 md:gap-4 order-2 lg:order-1 w-full">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveCase(useCase.id)}
                className={`text-left p-3 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 ${activeCase === useCase.id
                  ? "bg-card shadow-lg md:shadow-xl border-2 border-primary/30 scale-[1.02] md:scale-105"
                  : "bg-card/50 border border-border hover:bg-card hover:shadow-lg"
                  }`}
              >
                <div
                  className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center flex-shrink-0`}
                >
                  <useCase.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-bold text-xs md:text-lg leading-tight mb-0 md:mb-1">{useCase.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm hidden md:block">{useCase.description}</p>

                  {activeCase === useCase.id && (
                    <div className="hidden md:flex gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                          <strong className="text-primary">{useCase.stats.reach}</strong> more reach
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-sm">
                          <strong className="text-accent">{useCase.stats.engagement}</strong> engagement
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="relative w-full order-1 lg:order-2">
            {currentCase.mockup === "phone" ? (
              <div className="relative mx-auto w-72">
                <div className="bg-foreground rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-background rounded-[2.5rem] overflow-hidden">
                    <div className="h-8 bg-muted flex items-center justify-center">
                      <div className="w-20 h-5 bg-foreground rounded-full" />
                    </div>
                    <div className="aspect-[9/16] relative">
                      <img
                        src={heroImage}
                        alt="Mobile preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                      <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent" />
                        <div>
                          <div className="text-white text-sm font-semibold">AutoDealer Pro</div>
                          <div className="text-white/60 text-xs">Just now</div>
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-white" />
                            <span className="text-white text-sm">2.4k views</span>
                          </div>
                          <div className="text-white/60 text-xs">Swipe up for 360° view</div>
                        </div>
                        <div className="h-1 bg-white/30 rounded-full">
                          <div className="h-full w-1/3 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="h-6 bg-muted" />
                  </div>
                </div>

                <div
                  className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${currentCase.color} flex items-center justify-center shadow-xl`}
                >
                  <currentCase.icon className="w-8 h-8 text-white" />
                </div>
              </div>
            ) : (
              <div className="relative mx-auto max-w-lg">
                <div className="bg-foreground rounded-xl p-2 shadow-2xl">
                  <div className="bg-muted rounded-t-lg h-8 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-background rounded-full h-5 flex items-center px-3">
                        <span className="text-xs text-muted-foreground truncate">
                          www.yourdealership.com/inventory/360-view
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background rounded-b-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={heroImage}
                        alt="Desktop preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                            <Smartphone className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-lg rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-bold">360° Interactivess View</div>
                            <div className="text-white/70 text-sm">Drag to explore all angles</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">VR Ready</div>
                            <div className="px-3 py-1 bg-primary rounded-full text-white text-xs">HD</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${currentCase.color} flex items-center justify-center shadow-xl`}
                >
                  <currentCase.icon className="w-8 h-8 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseScenarios;
