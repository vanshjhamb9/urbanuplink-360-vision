import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Image1 from "../assets/2 (1).png"
import Image2 from "../assets/2 (2).png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-[50%] h-[25%] rounded-lg flex flex-row items-center justify-center">
              <img className="w-[80%] ml-[5rem]" src={Image2} />
             <img className="mt-[3rem] -ml-[2rem]" src={Image1} />
            </div>
             
            </div>
            <p className="text-sm text-white/80">
              Transforming automotive sales with real 360° imaging solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-colors" data-testid="link-privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-colors" data-testid="link-terms-of-service">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-white/80 hover:text-white transition-colors" data-testid="link-refund-policy">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Top Banner */}
        <div className="mb-8 text-center">
          <p className="text-white/90 text-sm font-medium">
            No credit card required • Free trial available • Cancel anytime
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80">
            © 2025 UrbanUplink. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
