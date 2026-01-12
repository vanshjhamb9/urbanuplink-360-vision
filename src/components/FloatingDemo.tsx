import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FloatingDemo = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <Button
        size="lg"
        className="bg-gradient-to-r from-primary via-accent to-primary-glow shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-300 group text-white"
        asChild
      >
        <a href="https://calendly.com/admin-urbanuplink/30min" target="_blank" rel="noopener noreferrer">
          Request a Demo
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingDemo;
