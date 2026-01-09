import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image1 from "../assets/2 (1).png";
import Image2 from "../assets/2 (2).png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-primary/20"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-24 items-center justify-between">
          {/* Logo - Icon only with better visibility */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <img 
                className="w-20 h-20 md:w-28 md:h-28 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" 
                src={Image2} 
                alt="Urban Uplink Logo" 
                style={{
                  filter: 'brightness(1.1) contrast(1.2)',
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation - Enhanced with better visibility */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="/"
              className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/features"
              className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              <span className="relative z-10">Features</span>
              <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/use-cases"
              className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              <span className="relative z-10">Use Cases</span>
              <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/pricing"
              className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              <span className="relative z-10">Pricing</span>
              <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/team"
              className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              <span className="relative z-10">Team</span>
              <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/learn-more"
              className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            {/* CTA Button */}
            <a
              href="#contact"
              className={`ml-4 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 ${
                isScrolled ? "shadow-md" : "shadow-lg"
              }`}
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-3 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-primary/10"
                : "text-foreground hover:bg-primary/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 pb-6 flex flex-col gap-1 bg-white/98 backdrop-blur-xl border-b border-primary/20 shadow-2xl">
            <a 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 text-foreground hover:text-primary hover:bg-primary/10 transition-all font-semibold border-b border-border/50"
            >
              Home
            </a>
            <a 
              href="/features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 text-foreground hover:text-primary hover:bg-primary/10 transition-all font-semibold border-b border-border/50"
            >
              Features
            </a>
            <a 
              href="/use-cases" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 text-foreground hover:text-primary hover:bg-primary/10 transition-all font-semibold border-b border-border/50"
            >
              Use Cases
            </a>
            <a 
              href="/pricing" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 text-foreground hover:text-primary hover:bg-primary/10 transition-all font-semibold border-b border-border/50"
            >
              Pricing
            </a>
            <a 
              href="/team" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 text-foreground hover:text-primary hover:bg-primary/10 transition-all font-semibold border-b border-border/50"
            >
              Team
            </a>
            <a 
              href="/learn-more" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 text-foreground hover:text-primary hover:bg-primary/10 transition-all font-semibold border-b border-border/50"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mx-6 mt-4 px-6 py-3 text-center rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all"
            >
              Get Started
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
