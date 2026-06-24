import { ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui-custom/GlowButton";

const FloatingDemo = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <GlowButton
        href="https://calendly.com/admin-urbanuplink/30min"
        external
        variant="filled"
        className="shadow-glow"
      >
        Request a Demo
      </GlowButton>
    </div>
  );
};

export default FloatingDemo;
