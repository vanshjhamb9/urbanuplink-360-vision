import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">U</span>
            </div>
            <span className="text-xl font-bold">UrbanUplink</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Features
            </a>
            <a href="#technology" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Technology
            </a>
            <a href="#use-cases" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Use Cases
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Pricing
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="gradient">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
