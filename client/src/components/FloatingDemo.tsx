import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FloatingDemo = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <Button
        size="lg"
        className="bg-gradient-to-r from-primary via-accent to-primary-glow shadow-2xl hover:shadow-glow animate-pulse hover:animate-none group"
      >
        Request a Demo
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default FloatingDemo;
