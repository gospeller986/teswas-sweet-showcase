import { useEffect, useState } from "react";
import teswaPortrait from "@/assets/teswa-potrait2.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src={teswaPortrait} 
                alt="Teswa Tanaya Dash - Professional Baker"
                className="w-full rounded-2xl shadow-elegant hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-golden rounded-full shadow-golden animate-float"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full shadow-soft animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* Content */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Your
              <span className="block text-primary font-bold">
                Master Chef
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">Teswa Tanaya Dash</strong> is a renowned cake artisan 
              with over 10 years of experience creating extraordinary confections. Her journey began as 
              a home baker, where her passion for baking blossomed into a professional career.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Now, she brings her expertise directly to you, sharing professional techniques, 
              artistic decoration methods, and the passion that transforms simple ingredients 
              into edible masterpieces.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-xl shadow-soft hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="text-center p-4 bg-card rounded-xl shadow-soft hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              
              <div className="text-center p-4 bg-card rounded-xl shadow-soft hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Cake Varieties</div>
              </div>
              
              <div className="text-center p-4 bg-card rounded-xl shadow-soft hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;