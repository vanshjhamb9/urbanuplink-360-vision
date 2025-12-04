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
          ? "bg-background/90 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <img className="w-12 h-auto" src={Image2} alt="Urban Uplink Logo" />
              <img className="w-24 h-auto -ml-2" src={Image1} alt="Urban Uplink" />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-foreground/90 hover:text-foreground"
              }`}
            >
              Home
            </a>
            <a
              href="/features"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-foreground/90 hover:text-foreground"
              }`}
            >
              Features
            </a>
            <a
              href="/use-cases"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-foreground/90 hover:text-foreground"
              }`}
            >
              Use Cases
            </a>
            <a
              href="/pricing"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-foreground/90 hover:text-foreground"
              }`}
            >
              Pricing
            </a>
            <a
              href="/team"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-foreground/90 hover:text-foreground"
              }`}
            >
              Team
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 pb-6 flex flex-col gap-2 bg-background/98 backdrop-blur-lg border-b border-border shadow-lg">
            <a 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="/features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
            >
              Features
            </a>
            <a 
              href="/use-cases" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
            >
              Use Cases
            </a>
            <a 
              href="/pricing" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
            >
              Pricing
            </a>
            <a 
              href="/team" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
            >
              Team
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
