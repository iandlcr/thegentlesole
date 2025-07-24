import { Tag, Home, Heart, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About The Gentle Sole</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional footcare nursing services with compassion, precision, and holistic care
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Certified footcare nurse providing professional in-home care services" 
              className="rounded-xl shadow-lg w-full" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certified Footcare Nurse</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As a dedicated Footcare Nurse, I bring compassion, precision, and a love for holistic care 
              to every client I serve. From preventative care to specialized foot health support, 
              my mission is to keep you confidently and comfortably on your feet.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I offer professional footcare services to clients of all ages in the comfort of their own homes, 
              as well as in nursing homes, retirement homes, senior facilities, and hospitals throughout 
              the Windsor-Essex region.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Tag className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certified Professional</h4>
                  <p className="text-gray-600">Licensed footcare nurse</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Home className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">In-Home Service</h4>
                  <p className="text-gray-600">Convenient mobile care</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
                  <p className="text-gray-600">Patient-centered approach</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Users className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">All Ages Welcome</h4>
                  <p className="text-gray-600">From young to seniors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
