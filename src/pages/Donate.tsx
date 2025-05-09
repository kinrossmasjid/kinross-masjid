
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FundraiserSection from "@/components/fundraiser/FundraiserSection";

const Donate = () => {
  return (
    <>
      <section className="relative bg-jamaat-darkGreen text-gray-800 pt-32 pb-16 md:py-32 overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Support Our Masjid</h1>
            <p className="text-lg text-white/90">
              Your generosity helps us maintain our masjid and serve the community
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Donate?</h2>
            <p className="text-gray-600">
              Every contribution, no matter how small, helps us maintain our masjid,
              support community projects, and expand our outreach initiatives. Donations 
              go directly towards daily operations, maintenance, and the development of
              community facilities.
            </p>
            <div className="mt-6 p-4 bg-jamaat-silver/10 rounded-md border-l-4 border-jamaat-brown inline-block">
              <p className="text-gray-700 italic text-lg">
                "Charity does not decrease wealth." – Prophet Muhammad ﷺ
              </p>
            </div>
          </div>

          <div className="max-w-md mx-auto text-center mb-16">
            <Card className="border-jamaat-silver/20 shadow-lg bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-800 text-2xl">Make a Donation</CardTitle>
                <CardDescription className="text-lg">
                  Support our community with your contribution
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 pb-8">
                <Button 
                  size="lg"
                  className="bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white text-lg h-14 px-8"
                  onClick={() => window.open("https://pay.yoco.com/kinross-muslim-jamaat", "_blank")}
                >
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Fundraiser Section */}
          <div className="mt-12">
            <FundraiserSection showAll={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
