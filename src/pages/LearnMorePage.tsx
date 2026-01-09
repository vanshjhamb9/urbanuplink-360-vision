import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Smartphone, Zap, Cloud } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const LearnMorePage = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Revolutionizing Car Photography
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Discover how Urban Uplink combines AI technology with smartphone convenience to create professional 360° car spins.
          </p>
          <img 
            src={heroCar} 
            alt="Urban Uplink Technology" 
            className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full object-cover h-[400px]"
          />
        </div>
      </section>

      {/* About Technology */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">The Power of AI in Your Pocket</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Urban Uplink isn't just an app; it's a complete studio in your smartphone. 
                Our proprietary AI algorithms handle the complex tasks of image stitching, 
                stabilization, and background processing instantly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Smartphone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Smartphone First</h3>
                    <p className="text-muted-foreground">No expensive DSLR cameras or turntables needed. Just use the phone you already own.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Instant Processing</h3>
                    <p className="text-muted-foreground">Get results in seconds, not hours. Our cloud processing is optimized for speed.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Cloud className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Cloud Sync</h3>
                    <p className="text-muted-foreground">Automatically sync your spins to your dashboard and integrate with your website.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-bold mb-6">Why Choose Urban Uplink?</h3>
              <div className="space-y-4">
                {[
                  "Reduce photography costs by up to 90%",
                  "Increase vehicle detail page engagement",
                  "Faster time-to-market for inventory",
                  "Consistent, professional look across all listings",
                  "Easy API integration with existing websites"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border/50">
                <Button variant="gradient" className="w-full">
                    <a href="/pricing" className="w-full h-full flex items-center justify-center">
                    View Pricing Plans
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Reuse */}
      <Features />

      {/* Extended FAQ / Details */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about getting started.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl font-bold mb-3">Do I need a tripod?</h3>
              <p className="text-muted-foreground">
                While a tripod can help ensure perfect stability, our AI stabilization technology makes handheld capture surprisingly easy and effective.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl font-bold mb-3">How long does it take to process?</h3>
              <p className="text-muted-foreground">
                Most 360° spins are processed and ready to view within 1-2 minutes after upload, depending on your connection speed.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl font-bold mb-3">Can I change the background?</h3>
              <p className="text-muted-foreground">
                Yes! We offer a variety of virtual studio backgrounds, or you can upload your own custom branded background.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl font-bold mb-3">Is there an API available?</h3>
              <p className="text-muted-foreground">
                Absolutely. We provide robust API documentation to help you integrate the viewer directly into your existing inventory management system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default LearnMorePage;
