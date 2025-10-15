import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image1 from "../assets/2 (1).png"
import Image2 from "../assets/2 (2).png"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
          
            <div className="w-[30%] h-[25%] rounded-lg flex items-center justify-center">
              <img className="w-[60%] ml-[5rem]" src={Image2} />
             <img className="mt-[4rem] -ml-[2rem]" src={Image1} />
            </div>
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex w-[100%] items-center gap-8">
            <a href="/" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Home
            </a>
            <a href="/features" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Features
            </a>
            <a href="/use-cases" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Use Cases
            </a>
            <a href="/pricing" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Pricing
            </a>
            <a href="/team" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Team
            </a>
          </nav>

          {/* CTA Buttons */}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
