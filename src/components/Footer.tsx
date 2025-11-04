import { Link } from "react-router-dom";
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
              <Dumbbell className="w-6 h-6" />
              <span>SportConnect</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your ultimate platform to find partners, rent fields, join communities, and discover sports events.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/partners" className="hover:text-primary transition-smooth">Find Partner</Link></li>
              <li><Link to="/fields" className="hover:text-primary transition-smooth">Rent Field</Link></li>
              <li><Link to="/communities" className="hover:text-primary transition-smooth">Communities</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-smooth">Events</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-smooth">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-smooth">About Us</Link></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Become a Partner</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-primary transition-smooth">Help Center</Link></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SportConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
