import { Button } from "@/components/ui/button";
import { CalendarCheck, Info } from "lucide-react";

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
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional <span className="text-primary">Footcare</span>{" "}
              <span className="text-accent">Nursing</span> Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Compassionate, certified footcare nursing bringing professional foot health services 
              directly to your home. From preventative care to specialized treatments, 
              your feet deserve gentle, expert attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg h-auto"
              >
                <CalendarCheck className="mr-2" size={20} />
                Book Appointment
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg h-auto"
              >
                <Info className="mr-2" size={20} />
                Learn More
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional healthcare worker providing gentle foot care services" 
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
