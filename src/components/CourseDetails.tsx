import { useEffect, useState } from "react";
import { Clock, Users, Star, Trophy } from "lucide-react";
import cakeDisplay from "@/assets/cake-display.jpg";

const CourseDetails = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('course-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const modules = [
    {
      title: "Foundation Techniques",
      lessons: ["Basic cake mixing", "Temperature control", "Ingredient science", "Equipment mastery"],
      duration: "Week 1-2"
    },
    {
      title: "Artistic Decoration",
      lessons: ["Buttercream techniques", "Fondant artistry", "Royal icing", "Sugar craft"],
      duration: "Week 3-4"
    },
    {
      title: "Advanced Creations",
      lessons: ["Multi-tier cakes", "Wedding cakes", "Themed designs", "Business tips"],
      duration: "Week 5-6"
    }
  ];

  return (
    <section id="course-section" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Master Class
            <span className="block bg-gradient-golden bg-clip-text text-transparent">
              Curriculum
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive 6-week journey from basic techniques to professional artistry
          </p>
        </div>

        {/* Course Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="text-center p-6 bg-card rounded-xl shadow-soft hover-lift">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">6 Weeks</div>
            <div className="text-sm text-muted-foreground">Duration</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-soft hover-lift">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">12 Max</div>
            <div className="text-sm text-muted-foreground">Class Size</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-soft hover-lift">
            <Star className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-soft hover-lift">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">Certificate</div>
            <div className="text-sm text-muted-foreground">Included</div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Modules */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-8 text-foreground">What You'll Learn</h3>
            
            <div className="space-y-6">
              {modules.map((module, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-foreground">{module.title}</h4>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {module.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <img 
                src={cakeDisplay} 
                alt="Beautiful decorated cakes and pastries"
                className="w-full rounded-2xl shadow-elegant hover-lift"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-sunset rounded-full shadow-golden animate-float"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full shadow-soft animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-golden rounded-xl shadow-golden">
              <h4 className="text-xl font-bold text-white mb-3">Course Investment</h4>
              <div className="text-3xl font-bold text-white mb-2">₹15,999</div>
              <p className="text-white/90">
                Includes all materials, recipes, and lifetime access to course resources
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;