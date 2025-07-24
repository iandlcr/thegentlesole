import { Tag, Home, Heart, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hi, Hello!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet Mary Rose Dula, your certified footcare nursing professional
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mary Rose Dula - Certified Footcare Nurse</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              "Hi There! my name is Mary Rose Dula, and I'm a Certified Foot Care Nurse. I specialize in providing preventive and therapeutic foot care, especially for individuals with diabetes, circulation issues, or other chronic conditions. My goal is to help you maintain healthy feet, prevent complications, and improve your overall well-being to all ages."
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              "I'm here to support you with compassionate, expert care—please don't hesitate to ask any questions."
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-brand-grey-blue p-3 rounded-lg mr-4">
                  <Tag className="brand-dark-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold brand-dark-blue">Certified Professional</h4>
                  <p className="text-gray-600">Licensed footcare nurse</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-soft-green p-3 rounded-lg mr-4">
                  <Home className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold brand-dark-blue">In-Home Service</h4>
                  <p className="text-gray-600">Convenient mobile care</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-peach p-3 rounded-lg mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold brand-dark-blue">Compassionate Care</h4>
                  <p className="text-gray-600">Patient-centered approach</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-coral p-3 rounded-lg mr-4">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold brand-dark-blue">All Ages Welcome</h4>
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
