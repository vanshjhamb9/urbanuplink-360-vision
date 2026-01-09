import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Image2 from "../assets/2 (2).png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-8 md:py-12 relative overflow-hidden font-sans">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 mb-8">

          {/* Brand - Full width on mobile, centered */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={Image2}
              alt="Urban Uplink"
              className="h-10 md:h-14 w-auto mb-3 object-contain brightness-110 contrast-125 drop-shadow-lg"
            />
            <p className="text-xs text-white/70 max-w-xs mx-auto md:mx-0">
              Transforming automotive sales with real 360° imaging solutions.
            </p>
          </div>

          {/* Product - Compact List */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-3 text-white text-sm md:text-base tracking-wide">Product</h4>
            <ul className="space-y-2 text-xs md:text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Use Cases</a></li>
            </ul>
          </div>

          {/* Company - Compact List */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-3 text-white text-sm md:text-base tracking-wide">Company</h4>
            <ul className="space-y-2 text-xs md:text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal - Stacks nicely on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-3 text-white text-sm md:text-base tracking-wide">Legal</h4>
            <div className="flex flex-row md:flex-col gap-4 md:gap-2 text-xs md:text-sm text-white/70 justify-center">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Reduced height & cleaner */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© 2025 UrbanUplink. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors hover:scale-110"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors hover:scale-110"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors hover:scale-110"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors hover:scale-110"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
