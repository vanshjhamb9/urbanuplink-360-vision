import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-bold">UrbanUplink</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Transforming automotive sales with real 360° imaging solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/80">
            © 2025 UrbanUplink. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
