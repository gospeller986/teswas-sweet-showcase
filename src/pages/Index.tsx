import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CourseDetails from "@/components/CourseDetails";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import EnrollmentForm from "@/components/EnrollmentForm";
import useConfetti from "@/hooks/useConfetti";

const Index = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  
  // Trigger confetti on page load
  useConfetti();

  return (
    <div className="min-h-screen">
      <Hero onEnrollClick={() => setShowEnrollmentForm(true)} />
      <About />
      <CourseDetails />
      <Testimonials />
      <Footer />
      
      <EnrollmentForm 
        isOpen={showEnrollmentForm}
        onClose={() => setShowEnrollmentForm(false)}
      />
    </div>
  );
};

export default Index;
