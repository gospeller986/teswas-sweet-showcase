import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
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

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Teswa's masterclass transformed my baking completely! The techniques I learned helped me start my own successful bakery business.",
      rating: 5,
      location: "Mumbai"
    },
    {
      name: "Rahul Mehta",
      text: "The attention to detail and artistic decoration methods are incredible. My family can't believe the beautiful cakes I create now!",
      rating: 5,
      location: "Delhi"
    },
    {
      name: "Ananya Patel",
      text: "From a complete beginner to creating wedding cakes - this course exceeded all my expectations. Teswa is an amazing teacher!",
      rating: 5,
      location: "Bangalore"
    }
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Student
            <span className="block text-primary font-bold">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our talented students who've transformed their passion into success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-2xl shadow-soft hover-lift ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-soft">
            <Star className="w-5 h-5 text-primary fill-current" />
            <span className="font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 200+ students</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;