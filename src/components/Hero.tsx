
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-baking.jpg";

interface HeroProps {
  onEnrollClick: () => void;
}

const Hero = ({ onEnrollClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant cake baking setup with golden lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-8 h-8 bg-primary rounded-full shadow-golden"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-accent rounded-full shadow-soft"></div>
      </div>
      <div className="absolute top-1/3 right-24 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-primary rounded-full shadow-golden"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Master the Art of 
          <span className="block text-white font-bold">
              Baking  <span className=" text-primary font-bold" >Cakes</span> 
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
          with  <span className="font-bold">Teswa Tanaya Dash</span>
        </p>
        
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your passion into perfection with professional techniques, 
          artistic decoration skills, and the secrets of creating extraordinary cakes 
          that tell stories and create memories.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="enroll" 
            size="lg" 
            onClick={onEnrollClick}
            className="text-lg px-8 py-4 h-auto animate-scale-in"
          >
            Enroll Now
          </Button>
          
          <Button 
            variant="elegant" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto animate-scale-in bg-white/10 border-white/30 text-white hover:bg-white/20"
            style={{ animationDelay: '0.2s' }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
