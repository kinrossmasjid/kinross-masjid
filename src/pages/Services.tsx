
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Book, 
  Gift, 
  Building, 
  Heart, 
  Home,
  Star 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Daily Salah",
      description: "Five daily prayers (Salah) and weekly Jumu'ah services",
      icon: <Calendar size={48} className="text-white" />,
      path: "/services/daily-prayers",
      bgColor: "bg-jamaat-darkGreen",
    },
    {
      title: "Islamic Education",
      description: "Madrassah classes for children and adults",
      icon: <Book size={48} className="text-white" />,
      path: "/services/islamic-education",
      bgColor: "bg-jamaat-darkGreen",
    },
    {
      title: "Lillah & Sadaqah",
      description: "Collection and distribution of charity to those in need",
      icon: <Gift size={48} className="text-white" />,
      path: "/services/lillah-sadaqah",
      bgColor: "bg-jamaat-darkGreen",
    },
    {
      title: "Ramadaan Programs",
      description: "Special programs during Ramadaan including Iftar gatherings and Taraweeh prayers",
      icon: <Building size={48} className="text-white" />,
      path: "/services/ramadaan-programs",
      bgColor: "bg-jamaat-darkGreen",
    },
    {
      title: "Nikah Services",
      description: "Marriage services and ceremony arrangements",
      icon: <Heart size={48} className="text-white" />,
      path: "/services/nikah",
      bgColor: "bg-jamaat-darkGreen",
    },
    {
      title: "Janazah Support",
      description: "Funeral support for the community",
      icon: <Star size={48} className="text-white" />,
      path: "/services/janazah",
      bgColor: "bg-jamaat-darkGreen",
    },
    {
      title: "Venue Hiring",
      description: "Hall, crockery, and equipment rental services",
      icon: <Home size={48} className="text-white" />,
      path: "/services/venue-hiring",
      bgColor: "bg-jamaat-darkGreen",
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kinross Muslim Jamaat offers a variety of services to support our community's spiritual, educational, and social needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="group block overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`${service.bgColor} p-6 flex justify-center items-center h-40`}>
                <div className="transition-transform duration-300 transform group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
