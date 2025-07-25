import { Card, CardContent } from "./ui/card";
import { Check, Shield } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fair, straightforward pricing for professional footcare services. Insurance accepted.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-brand-grey-blue border-2 border-brand-dark-blue">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold brand-dark-blue mb-2">Initial Assessment</h3>
                <div className="text-5xl font-bold brand-dark-blue mb-2">$65</div>
                <p className="brand-dark-blue mb-6">1 hour comprehensive assessment</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="brand-coral mr-3" size={20} />
                    Complete foot health evaluation
                  </li>
                  <li className="flex items-center">
                    <Check className="brand-coral mr-3" size={20} />
                    Assessment from knee to foot
                  </li>
                  <li className="flex items-center">
                    <Check className="brand-coral mr-3" size={20} />
                    Personalized care plan
                  </li>
                  <li className="flex items-center">
                    <Check className="brand-coral mr-3" size={20} />
                    Health recommendations
                  </li>
                </ul>
        
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-brand-peach border-2 border-brand-soft-green">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold brand-dark-blue mb-2">Routine Care</h3>
                <div className="text-5xl font-bold brand-dark-blue mb-2">$55</div>
                <p className="brand-dark-blue mb-6">45 minute maintenance visit</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="brand-soft-green mr-3" size={20} />
                    Nail trimming and filing
                  </li>
                  <li className="flex items-center">
                    <Check className="brand-soft-green mr-3" size={20} />
                    Corn and callus care
                  </li>
                  <li className="flex items-center">
                    <Check className="brand-soft-green mr-3" size={20} />
                    Moisturizing treatment
                  </li>
                  <li className="flex items-center">
                    <Check className="brand-soft-green mr-3" size={20} />
                    Health monitoring
                  </li>
                </ul>
          
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-brand-cream rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold brand-dark-blue mb-4">Follow-up Schedule</h4>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold brand-coral">4</div>
                  <div className="text-sm text-gray-600">weeks</div>
                </div>
              </div>
              <div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold brand-coral">6</div>
                  <div className="text-sm text-gray-600">weeks</div>
                </div>
              </div>
              <div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold brand-coral">8</div>
                  <div className="text-sm text-gray-600">weeks</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Recommended follow-up intervals for optimal foot health
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
