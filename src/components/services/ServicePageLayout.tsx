
import { Link } from "react-router-dom";
import { Book, Calendar, Heart, Building, Star, CirclePlus, Home } from "lucide-react";

type ServicePageProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  content: string;
  imageUrl: string;
  children?: React.ReactNode; // Added children as an optional prop
};

const ServicePageLayout = ({
  title,
  description,
  icon,
  content,
  imageUrl,
  children, // Added children to destructuring
}: ServicePageProps) => {
  return (
    <div className="pt-32 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden h-64 mb-12">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">{icon}</div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="mt-2 max-w-2xl mx-auto">{description}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
              <div className="text-gray-600 space-y-4">
                {content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            {/* Render children after the content */}
            {children}
          </div>
          
          <div className="bg-jamaat-darkGreen/10 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Other Services</h3>
            <div className="space-y-3">
              <Link to="/services/daily-prayers" className="flex items-center p-3 hover:bg-jamaat-darkGreen hover:text-white rounded-lg transition-colors">
                <div className="p-1 rounded-full bg-jamaat-silver mr-2">
                  <Calendar size={18} className="text-jamaat-darkGreen" />
                </div>
                <span>Daily Salah</span>
              </Link>
              <Link to="/services/islamic-education" className="flex items-center p-3 hover:bg-jamaat-darkGreen hover:text-white rounded-lg transition-colors">
                <div className="p-1 rounded-full bg-jamaat-silver mr-2">
                  <Book size={18} className="text-jamaat-darkGreen" />
                </div>
                <span>Madrasa/Islamic Education</span>
              </Link>
              <Link to="/services/lillah-sadaqah" className="flex items-center p-3 hover:bg-jamaat-darkGreen hover:text-white rounded-lg transition-colors">
                <div className="p-1 rounded-full bg-jamaat-silver mr-2">
                  <CirclePlus size={18} className="text-jamaat-darkGreen" />
                </div>
                <span>Lillah & Sadaqah</span>
              </Link>
              <Link to="/services/ramadaan-programs" className="flex items-center p-3 hover:bg-jamaat-darkGreen hover:text-white rounded-lg transition-colors">
                <div className="p-1 rounded-full bg-jamaat-silver mr-2">
                  <Building size={18} className="text-jamaat-darkGreen" />
                </div>
                <span>Ramadhaan Programmes</span>
              </Link>
              <Link to="/services/nikah" className="flex items-center p-3 hover:bg-jamaat-darkGreen hover:text-white rounded-lg transition-colors">
                <div className="p-1 rounded-full bg-jamaat-silver mr-2">
                  <Heart size={18} className="text-jamaat-darkGreen" />
                </div>
                <span>Nikah Services</span>
              </Link>
              <Link to="/services/janazah" className="flex items-center p-3 hover:bg-jamaat-darkGreen hover:text-white rounded-lg transition-colors">
                <div className="p-1 rounded-full bg-jamaat-silver mr-2">
                  <Star size={18} className="text-jamaat-darkGreen" />
                </div>
                <span>Janazah Support</span>
              </Link>
              <Link to="/services/venue-hiring" className="flex items-center p-3 hover:bg-jamaat-darkGreen hover:text-white rounded-lg transition-colors">
                <div className="p-1 rounded-full bg-jamaat-silver mr-2">
                  <Home size={18} className="text-jamaat-darkGreen" />
                </div>
                <span>Venue Hiring</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageLayout;
