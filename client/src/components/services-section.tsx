import { Card, CardContent } from "./ui/card";
import { Scissors, Hand, Heart, Sparkles, BriefcaseMedical, Stethoscope, Info, Footprints } from "lucide-react";

const services = [
  {
    icon: Footprints,
    title: "Routine Footcare",
    description: "Keep your feet happy and healthy with regular check-ups, cleaning, and preventative care to address minor issues before they become major problems.",
    bgColor: "bg-brand-peach",
    iconColor: "text-white"
  },
  {
    icon: Scissors,
    title: "Nail Trimming & Filing",
    description: "Precise and safe trimming and filing of toenails, ensuring proper length and shape to prevent discomfort and ingrown nails.",
    bgColor: "bg-brand-soft-green",
    iconColor: "text-white"
  },
  {
    icon: Sparkles,
    title: "Corn & Callus Reduction",
    description: "Gentle and effective removal of painful corns and calluses, restoring comfort and smoothing your skin.",
    bgColor: "bg-brand-coral",
    iconColor: "text-white"
  },
  {
    icon: Heart,
    title: "Diabetic Foot Care",
    description: "Specialized and meticulous foot care for diabetic patients, focusing on preventing complications, monitoring foot health, and providing essential education.",
    bgColor: "bg-brand-peach",
    iconColor: "text-white"
  },
  {
    icon: BriefcaseMedical,
    title: "Fungal Nail Management",
    description: "Assessment and care for fungal nail conditions, including advice on management and hygiene to improve nail health.", // New description
    bgColor: "bg-brand-soft-green",
    iconColor: "text-white"
  },
  {
    icon: Stethoscope,
    title: "Health Teaching & Referrals",
    description: "Empowering you with knowledge about proper foot health practices and providing professional referrals to specialists when advanced medical intervention is needed.",
    bgColor: "bg-brand-coral",
    iconColor: "text-white"
  }
];

const serviceLocations = ["Windsor", "Essex", "Kingsville", "LaSalle", "Tecumseh", "Amherstburg"];

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
          <div className="bg-brand-grey-blue rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold brand-dark-blue mb-4">Service Locations</h3>
            <p className="text-lg text-gray-700 mb-6">
              We provide in-home footcare services throughout the Windsor-Essex region
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceLocations.map((location) => (
                <span key={location} className="bg-white px-4 py-2 rounded-lg brand-dark-blue font-medium">
                  {location}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700 mt-4 flex items-center justify-center">
              <Info className="mr-2 brand-coral" size={16} />
              Additional $5 travel fee applies for in-home visits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
