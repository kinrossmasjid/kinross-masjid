
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const PrayerTimes = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <section className="relative bg-jamaat-darkGreen text-white pt-28 pb-16 md:py-24 overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Salah Times</h1>
            <p className="text-lg text-white/80">
              Daily salah times for Kinross Jaamia Masjid
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            
            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">MasjidBoard Live</h2>
              <div className="border rounded-lg shadow-md overflow-hidden">
                <iframe 
                  src="https://masjidboardlive.com/boards/?kinross-jaamia"
                  title="MasjidBoard Live for Kinross Muslim Jamaat"
                  className="w-full border-0"
                  style={{ height: isMobile ? '500px' : '1000px' }}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 flex justify-end">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => window.open("https://masjidboardlive.com/boards/?kinross-jaamia", "_blank")}
                >
                  Open in new tab <ExternalLink size={16} />
                </Button>
              </div>
            </div>

            <div className="space-y-6 mt-12">

              
              <div className="p-6 bg-jamaat-darkGreen/5 rounded-lg border border-jamaat-darkGreen/20 mt-8">
                <h3 className="font-semibold text-gray-800 mb-2">Please Note:</h3>
                <p className="text-gray-600">
                  Prayer times may change slightly throughout the year due to seasonal variations. 
                  Always check the latest times posted at the masjid or on this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrayerTimes;
