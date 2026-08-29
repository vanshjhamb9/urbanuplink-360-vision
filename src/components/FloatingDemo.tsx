import { useEffect, useState } from "react";
import { GlowButton } from "@/components/ui-custom/GlowButton";

/** Don't overlap hero / industry banners — show after user scrolls past the first viewport */
const SCROLL_REVEAL_VH = 1.05;

const FloatingDemo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > window.innerHeight * SCROLL_REVEAL_VH);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <GlowButton href="/contact" variant="filled" className="shadow-glow">
        Book a Demo
      </GlowButton>
    </div>
  );
};

export default FloatingDemo;
