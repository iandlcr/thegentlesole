import { Button } from "@/components/ui/button";
import { CalendarCheck, Info } from "lucide-react";
import logoImage from "@assets/footcare_expert_windsor_1753386475777.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold brand-dark-blue leading-tight mb-6">
              Professional <span className="brand-coral">Footcare</span>{" "}
              <span className="brand-soft-green">Nursing</span> Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Compassionate, certified footcare nursing bringing professional foot health services 
              directly to your home. From preventative care to specialized treatments, 
              your feet deserve gentle, expert attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-white px-8 py-4 text-lg h-auto"
              >
                <CalendarCheck className="mr-2" size={20} />
                Book Appointment
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline" 
                className="border-2 border-brand-coral text-brand-coral hover:bg-brand-coral hover:text-white px-8 py-4 text-lg h-auto"
              >
                <Info className="mr-2" size={20} />
                Learn More
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img 
              src={logoImage} 
              alt="The Gentle Sole Logo" 
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
