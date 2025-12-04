import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your Automotive Sales?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Join the 360° revolution. Get started with UrbanUplink today and see results within weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="secondary"
              size="xl"
              className="group bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href="/uplai.apk" download>
                <Download className="mr-2 w-5 h-5" />
                Get Started Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="mailto:sales@urbanuplink.com">
                Contact Sales
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 (555) 360-VIEW</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">sales@urbanuplink.com</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/70">
            No credit card required • Free trial available • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
