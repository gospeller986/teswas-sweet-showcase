import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              TTD's Baking Academy
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Master the art of cake baking with professional techniques and artistic flair. 
              Transform your passion into perfection.
            </p>
            
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.instagram.com/ttd_cakes_cuttack/" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@teswatanaya" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-6 text-primary">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">teswatanayadash1@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">+91 7978280897</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">Cuttack, Odisha</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-6 text-primary">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about-section" className="block text-background/80 hover:text-primary transition-colors">
                About Teswa
              </a>
              <a href="#course-section" className="block text-background/80 hover:text-primary transition-colors">
                Course Details
              </a>
              <a href="#testimonials-section" className="block text-background/80 hover:text-primary transition-colors">
                Student Reviews
              </a>
              <a href="mailto:teswa.bakingacademy@gmail.com" className="block text-background/80 hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Teswa's Baking Academy. All rights reserved. | 
            <span className="text-primary"> Crafted with ❤️ for passionate bakers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;