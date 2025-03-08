
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Building, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-realestate-navy text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-realestate-accent text-white mb-4">About Josh Rader</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Licensed Commercial Real Estate Agent in Abilene, Texas</h2>
            <p className="text-lg mb-6 text-white/90">
              With over 10 years of experience in the Abilene commercial real estate market, Josh Rader has established himself as a trusted advisor to businesses, investors, and property owners throughout the region.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-realestate-accent mr-2 mt-1" />
                <span>Licensed Texas Real Estate Agent</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-realestate-accent mr-2 mt-1" />
                <span>Commercial Property Specialist</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-realestate-accent mr-2 mt-1" />
                <span>Investment Property Expert</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-realestate-accent mr-2 mt-1" />
                <span>Abilene Market Knowledge</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-md">
                <Award className="h-5 w-5 text-realestate-accent mr-2" />
                <span>Top Producer 2022</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-md">
                <GraduationCap className="h-5 w-5 text-realestate-accent mr-2" />
                <span>CCIM Member</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-md">
                <Building className="h-5 w-5 text-realestate-accent mr-2" />
                <span>100+ Transactions</span>
              </div>
            </div>
            
            <Button className="bg-realestate-accent hover:bg-realestate-accent/90 text-white">
              Learn More About Josh
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-realestate-accent rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Josh Rader, Commercial Real Estate Agent" 
              className="w-full h-auto rounded-lg relative z-10 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
