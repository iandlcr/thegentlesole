import SEOHead from "@/components/seo-head";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PricingSection from "@/components/pricing-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
