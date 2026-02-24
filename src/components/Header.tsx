import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-gray-100/95 backdrop-blur-xl shadow-xl border-b border-primary/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-20 md:h-28 items-center justify-between">
            {/* Logo - Centered on Mobile */}
            <div className="flex-1 md:flex-none flex items-center md:items-start gap-4">
              <a href="/" className="relative group cursor-pointer block flex items-center gap-3">
                <img
                  className="w-14 h-14 md:w-32 md:h-32 -mt-[1rem] object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                  src={Image2}
                  alt="Urban Uplink Logo"
                  style={{
                    filter: "brightness(1.1) contrast(1.2)",
                  }}
                />
                <span className={`font-display -ml-[2rem] font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-slate-800" : "text-slate-800 drop-shadow-md"}`}>
                  Urban Uplink
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <a
                href="/"
                className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${isScrolled ? "text-foreground hover:text-primary" : "text-foreground/90 hover:text-primary"}`}
              >
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/features"
                className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${isScrolled ? "text-foreground hover:text-primary" : "text-foreground/90 hover:text-primary"}`}
              >
                <span className="relative z-10">Features</span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/use-cases"
                className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${isScrolled ? "text-foreground hover:text-primary" : "text-foreground/90 hover:text-primary"}`}
              >
                <span className="relative z-10">Use Cases</span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/pricing"
                className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${isScrolled ? "text-foreground hover:text-primary" : "text-foreground/90 hover:text-primary"}`}
              >
                <span className="relative z-10">Pricing</span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/learn-more"
                className={`px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm relative group ${isScrolled ? "text-foreground hover:text-primary" : "text-foreground/90 hover:text-primary"}`}
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/contact"
                className={`ml-4 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 ${isScrolled ? "shadow-md" : "shadow-lg"}`}
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-4">
              {/* Call to Action Button usually good to have visible on mobile too */}
              <a
                href="/contact"
                className="px-4 py-2 rounded-full font-bold text-xs bg-gradient-to-r from-primary to-accent text-white shadow-md"
              >
                Get Started
              </a>

              {/* Mobile Menu Button */}
              <button
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-foreground hover:bg-primary/10"
                    : "text-foreground hover:bg-primary/10"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Side Drawer Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background/95 backdrop-blur-xl z-50 shadow-2xl p-6 border-l border-primary/20 animate-in slide-in-from-right duration-300 md:hidden flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-3"
              >
                Home
              </a>
              <a
                href="/features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-3"
              >
                Features
              </a>
              <a
                href="/use-cases"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-3"
              >
                Use Cases
              </a>
              <a
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-3"
              >
                Pricing
              </a>
              <a
                href="/learn-more"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-3"
              >
                Learn More
              </a>
            </div>

            <div className="mt-auto pt-6 border-t border-border">
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-primary to-accent text-white shadow-lg"
              >
                Get Started
              </a>
              <p className="text-center text-xs text-muted-foreground mt-4">
                © 2025 UrbanUplink
              </p>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
