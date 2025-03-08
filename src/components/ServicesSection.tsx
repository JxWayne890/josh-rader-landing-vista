
import { 
  Building, 
  Store, 
  Warehouse, 
  Building2, 
  BarChart4, 
  Handshake 
} from "lucide-react";
import { useRef, useEffect, useState } from 'react';

const services = [
  {
    icon: <Store className="h-12 w-12 text-luxury-gold" />,
    title: "Retail Leasing",
    description: "Discover prime retail leasing spaces in Abilene's busiest commercial districts with high foot traffic and excellent visibility."
  },
  {
    icon: <Building className="h-12 w-12 text-luxury-gold" />,
    title: "Office Leasing",
    description: "Premium office spaces available for lease in Abilene to fit diverse business needs and budgets in desirable locations."
  },
  {
    icon: <Warehouse className="h-12 w-12 text-luxury-gold" />,
    title: "Industrial Properties",
    description: "High-quality warehouses and industrial properties for lease or sale in Abilene with strategic access to major transportation routes."
  },
  {
    icon: <Building2 className="h-12 w-12 text-luxury-gold" />,
    title: "Property Investment",
    description: "Strategic commercial real estate investment opportunities in Abilene's growing market with potential for strong returns."
  },
  {
    icon: <BarChart4 className="h-12 w-12 text-luxury-gold" />,
    title: "Market Analysis",
    description: "Comprehensive commercial real estate market analyses tailored specifically for Abilene investors and property owners."
  },
  {
    icon: <Handshake className="h-12 w-12 text-luxury-gold" />,
    title: "Buyer/Seller Representation",
    description: "Experienced guidance for buying and selling commercial real estate properties in Abilene with expert negotiation services."
  }
];

const ServicesSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section bg-luxury-dark relative overflow-hidden">
      {/* Subtle Parallax Background Elements */}
      <div className="absolute top-40 left-0 w-64 h-64 rounded-full bg-luxury-gold/5 -translate-x-1/2 parallax-layer"
        style={{ transform: `translateX(${scrollY * 0.05}px) translateY(${scrollY * 0.02}px)` }}>
      </div>
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-luxury-gold/5 translate-x-1/2 parallax-layer"
        style={{ transform: `translateX(${-scrollY * 0.04}px) translateY(${-scrollY * 0.01}px)` }}>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-white">Premium Real Estate Services</h2>
          <p className="section-subtitle text-luxury-khaki">
            Comprehensive services to meet all your commercial property needs in Abilene and surrounding areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-luxury-charcoal p-8 rounded-md shadow-md hover:shadow-lg transition-all duration-500 border border-luxury-khaki/10 hover:border-luxury-gold/30 hover:bg-luxury-charcoal/80 hover:-translate-y-2"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: `translateY(${Math.min(15, Math.max(-15, (scrollY - 800) * 0.02 * (index % 3 - 1)))}px)`
              }}
            >
              <div className="mb-4 transform transition-transform duration-500 hover:scale-110 hover:text-luxury-gold">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white hover:text-luxury-gold transition-colors">{service.title}</h3>
              <p className="text-luxury-khaki/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
