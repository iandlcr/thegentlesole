import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Hand, Heart, Sparkles, Search, UserCheck, Info } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Nail Trimming & Filing",
    description: "Professional nail care including precise trimming and filing to maintain healthy nail growth and prevent issues.",
    bgColor: "bg-blue-100",
    iconColor: "text-primary"
  },
  {
    icon: Hand,
    title: "Corn & Callus Reduction",
    description: "Safe removal and reduction of corns and calluses to relieve discomfort and prevent complications.",
    bgColor: "bg-green-100",
    iconColor: "text-accent"
  },
  {
    icon: Heart,
    title: "Diabetic Foot Care",
    description: "Specialized care for diabetic patients focusing on prevention and early detection of foot complications.",
    bgColor: "bg-red-100",
    iconColor: "text-red-600"
  },
  {
    icon: Sparkles,
    title: "Moisturizing & Gentle Massage",
    description: "Therapeutic moisturizing treatments and gentle massage to improve circulation and skin health.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: Search,
    title: "Full Assessment",
    description: "Comprehensive assessment from below the knee to the foot, identifying potential issues and health concerns.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: UserCheck,
    title: "Referrals & Temporary Ingrown Removal",
    description: "Professional referrals to podiatrists when needed and temporary ingrown toenail relief services.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

const serviceLocations = ["Windsor", "Essex", "Kingsville", "LaSalle", "Tecumseh"];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Footcare Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive foot health services tailored to your individual needs and delivered with expertise and care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={service.iconColor} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Locations</h3>
            <p className="text-lg text-gray-600 mb-6">
              We provide mobile footcare services throughout the Windsor-Essex region
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceLocations.map((location) => (
                <span key={location} className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium">
                  {location}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4 flex items-center justify-center">
              <Info className="mr-2" size={16} />
              Additional $5 travel fee applies for in-home visits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
