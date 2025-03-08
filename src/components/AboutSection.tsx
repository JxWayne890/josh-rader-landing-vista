import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Building, CheckCircle, Briefcase } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="section bg-luxury-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-luxury-gold text-luxury-black mb-4 uppercase tracking-wider font-medium">About Josh Rader</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Licensed Commercial Real Estate Agent in Abilene, Texas</h2>
            <p className="text-lg mb-6 text-white/80 leading-relaxed">
              With over 10 years of experience in the Abilene commercial real estate market, Josh Rader has established himself as a trusted advisor to businesses, investors, and property owners throughout the region.
            </p>
            
            <div className="mb-6 text-white/80 space-y-4">
              <p className="leading-relaxed">
                As a multi-business owner, Josh brings firsthand experience in choosing and operating commercial spaces. From launching Bodegish, Firehouse Fitness, and multiple other businesses, he understands what it takes for businesses to thrive in the right location.
              </p>
              <p className="leading-relaxed">
                Josh specializes in commercial real estate, helping business owners find the right space and working with investors to identify smart commercial property opportunities. His deep understanding of business operations and market trends makes him a valuable resource for those looking to lease, buy, or invest.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-luxury-gold mr-2 mt-1 flex-shrink-0" />
                <span>Licensed Texas Real Estate Agent</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-luxury-gold mr-2 mt-1 flex-shrink-0" />
                <span>Commercial Property Specialist</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-luxury-gold mr-2 mt-1 flex-shrink-0" />
                <span>Investment Property Expert</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-luxury-gold mr-2 mt-1 flex-shrink-0" />
                <span>Abilene Market Knowledge</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-luxury-charcoal px-4 py-2 rounded-sm">
                <Award className="h-5 w-5 text-luxury-gold mr-2" />
                <span>Top Producer 2022</span>
              </div>
              <div className="flex items-center bg-luxury-charcoal px-4 py-2 rounded-sm">
                <Briefcase className="h-5 w-5 text-luxury-gold mr-2" />
                <span>Business Owner</span>
              </div>
              <div className="flex items-center bg-luxury-charcoal px-4 py-2 rounded-sm">
                <Building className="h-5 w-5 text-luxury-gold mr-2" />
                <span>100+ Transactions</span>
              </div>
            </div>
            
            <Button className="bg-luxury-gold hover:bg-luxury-khaki text-luxury-black border-none rounded-sm">
              Learn More About Josh
            </Button>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-luxury-gold rounded-md"></div>
              <img alt="Josh Rader, Commercial Real Estate Agent" className="w-full h-auto rounded-md relative z-10 shadow-xl" src="/lovable-uploads/74826a44-a772-484e-9817-643df8c6fe70.png" />
            </div>
            
            <div className="bg-luxury-dark p-6 rounded-md flex flex-col items-center border border-luxury-khaki/30">
              <p className="text-luxury-khaki font-medium mb-4 text-center">Proudly with</p>
              <img src="/lovable-uploads/9a513a12-c1b4-46c7-a49e-f3dd8e0857a8.png" alt="McCullar Properties Group" className="h-20 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;