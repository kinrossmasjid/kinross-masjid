
import { Headphones, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const ListenLive = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <section className="relative bg-jamaat-darkGreen text-white pt-28 pb-16 md:py-24 overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Listen Live</h1>
            <p className="text-lg text-white/80">
              Stream live broadcasts from Kinross Muslim Jamaat Masjid
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white py-12">
        <div className="container mx-auto px-0 sm:px-4"> {/* Removed padding on mobile */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="bg-jamaat-silver/20 p-4 rounded-full">
                  <Headphones size={36} className="text-jamaat-brown" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Live Radio</h2>
              </div>
              
              {/* LiveMasjid embed - full width implementation */}
              <div className="w-full mb-6">
                <iframe 
                  src="https://www.livemasjid.com/kinross"
                  title="LiveMasjid for Kinross Muslim Jamaat"
                  className="w-full border-0 shadow-lg"
                  style={{ 
                    height: isMobile ? '650px' : '720px',
                    width: '100%',
                    display: 'block'
                  }}
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="px-4">
                <Button 
                  variant="outline" 
                  className="flex items-center mx-auto gap-2"
                  onClick={() => window.open("https://www.livemasjid.com/kinross", "_blank")}
                >
                  Open LiveMasjid in new tab <ExternalLink size={16} />
                </Button>
              </div>
            </div>
            
            <div className="p-6 bg-jamaat-silver/5 rounded-lg border border-jamaat-silver/20 mt-8 mx-4">
              <h3 className="font-semibold text-gray-800 mb-2">About Our Live Broadcasts</h3>
              <p className="text-gray-600">
                Listen to live prayers, khutbahs (sermons), and special events from Kinross Muslim Jamaat. 
                Our broadcasts are available during prayer times and special occasions through our partnership with LiveMasjid.
              </p>
            </div>
            
            <div className="mt-8 text-center px-4">
              <p className="text-sm text-gray-500">
                If you experience any issues with the live stream, please refresh the page or contact us for assistance.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Powered by <a href="https://www.livemasjid.com" target="_blank" rel="noopener noreferrer" className="text-jamaat-brown hover:underline">LiveMasjid</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListenLive;
