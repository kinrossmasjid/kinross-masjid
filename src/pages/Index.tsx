import { Link } from "react-router-dom";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import { Button } from "@/components/ui/button";
import FundraiserSection from "@/components/fundraiser/FundraiserSection";

const Index = () => {
  return (
    <>
      <Hero />
      
      <section className="section-padding bg-jamaat-darkGreen/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/d10b1870-6458-4094-af17-aae70a749ecd.png" 
              alt="Kinross Jaamia Masjid Logo" 
              className="h-32 mx-auto"
              loading="eager"
              width="128"
              height="128"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Kinross Jaamia Masjid</h2>
              <p className="text-gray-600 mb-4">
                Established in 1985, Kinross Jaamia Masjid has been serving the Muslim community
                in Mpumalanga for over 35 years. Our mission is to uphold the principles of Islam
                through the maintenance of the masjid, education of our youth, charitable outreach,
                and the spiritual upliftment of our community.
              </p>
              <div className="mb-6 p-4 bg-jamaat-darkGreen/10 rounded-md border-l-4 border-jamaat-darkGreen">
                <p className="text-gray-700 italic">
                  "Charity does not decrease wealth." – Prophet Muhammad ﷺ
                </p>
              </div>
              <Button asChild className="bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/be5d0550-9946-4c7b-b0c9-1d8733f78124.png" 
                alt="Kinross Jaamia Masjid" 
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
                width="600" 
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-jamaat-darkGreen backdrop-blur-3xl border-y border-white/10 shadow-inner ring-1 ring-white/10">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Support Our Masjid</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Every contribution, no matter how small, helps us maintain our masjid, 
            support community projects, and expand our outreach initiatives.
          </p>
          <Button
            size="lg"
            className="bg-black hover:bg-white/20 text-white font-bold"
            onClick={() => window.open("https://pay.yoco.com/kinross-muslim-jamaat", "_blank")}
          >
            Donate Now
          </Button>
        </div>
      </section> 

      <section className="section-padding bg-jamaat-darkGreen/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Beautiful Masjid</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A place of worship, learning, and community gathering. Our masjid serves as the heart of our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img 
                src="/lovable-uploads/aa56aa83-0095-4e2e-b17c-66d24bae4a51.png" 
                alt="Masjid View 1" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="400" 
                height="256"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img 
                src="/lovable-uploads/5c2f0786-9561-417a-a056-62352fd51094.png" 
                alt="Masjid View 2" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="400" 
                height="256"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img 
                src="/lovable-uploads/5d6e39b7-99ed-44d8-95ea-42e88bf3d6d8.png" 
                alt="Masjid View 3" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="400" 
                height="256"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fundraiser Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <FundraiserSection 
            title="Support Our Ongoing Initiatives" 
            description="Your contributions help us make a difference in our community"
            limit={3}
          />
          <div className="mt-8 text-center">
            <Button asChild className="bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white">
              <Link to="/donate">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
