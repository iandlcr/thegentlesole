import { useEffect } from "react";

export default function SEOHead() {
  useEffect(() => {
    // Add structured data for LocalBusiness
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "The Gentle Sole",
      "description": "Professional footcare nursing services providing in-home foot health care",
      "url": "https://thegentlesole.ca",
      "email": "thegentlesole22@gmail.com",
      "foundingDate": "2025-07-22",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Windsor",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "areaServed": [
        { "@type": "City", "name": "Windsor" },
        { "@type": "City", "name": "Essex" },
        { "@type": "City", "name": "Kingsville" },
        { "@type": "City", "name": "LaSalle" },
        { "@type": "City", "name": "Tecumseh" }
      ],
      "openingHours": "Mo-Fr 09:00-17:00",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "thegentlesole22@gmail.com"
      },
      "sameAs": [
        "https://www.instagram.com/thegentlesole",
        "https://www.facebook.com/thegentlesole"
      ],
      "medicalSpecialty": "Footcare Nursing",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Footcare Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Initial Footcare Assessment",
              "description": "Comprehensive 1-hour foot health assessment"
            },
            "price": "65",
            "priceCurrency": "CAD"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Routine Footcare Service",
              "description": "45-minute routine foot care maintenance"
            },
            "price": "55",
            "priceCurrency": "CAD"
          }
        ]
      }
    };

    // Add structured data script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
