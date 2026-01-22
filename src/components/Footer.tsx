import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Great<span className="opacity-70">Signs</span>
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Premium signage solutions for businesses. We create stunning visual
              identities that make your brand stand out.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+27123456789"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone size={18} />
                <span>+27 12 345 6789</span>
              </a>
              <a
                href="mailto:info@greatsigns.co.za"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={18} />
                <span>info@greatsigns.co.za</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Business Street, Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Great Signs. All rights reserved.</p>
          <p className="mt-2">
            Built by{" "}
            <a
              href="https://www.lunexweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
            >
              Lunexweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
