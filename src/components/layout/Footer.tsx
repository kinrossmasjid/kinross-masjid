
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const serviceLinks = [
    { name: "Daily Prayers", path: "/services/daily-prayers" },
    { name: "Madrasa/Islamic Education", path: "/services/islamic-education" },
    { name: "Sadaqah/Lillah", path: "/services/zakaah-sadaqah" },
    { name: "Ramadhaan Programmes", path: "/services/ramadaan-programs" },
    { name: "Nikah Bookings", path: "/services/nikah-janazah" },
    { name: "Burial/Janaazah Support", path: "/services/nikah-janazah" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Salah Times", path: "/prayer-times" },
    { name: "Listen Live", path: "/listen-live" },
    { name: "Gallery", path: "/gallery" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
    { name: "Our Team", path: "/team" },
    { name: "Services", path: "/services" },
  ];
  
  const socialLinks = [
    { icon: <Facebook size={18} />, path: "#", label: "Facebook" },
    { icon: <Twitter size={18} />, path: "#", label: "Twitter" },
    { icon: <Instagram size={18} />, path: "#", label: "Instagram" },
    { icon: <Youtube size={18} />, path: "#", label: "YouTube" },
  ];

  const committeeMembers = [
    { name: "Yusuf Bhaba", role: "Chairman" },
    { name: "Aslam Carrim", role: "Head Of Finance" },
    { name: "Ebrahim Lambart", role: "Head of Maintenance" },
  ];

  // Function to handle link clicks and scroll to top
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-jamaat-darkGreen/20 backdrop-blur-md text-white border-t border-white/10 shadow-inner ring-1 ring-white/10 mt-8">
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Jamaat Information - More compact and better aligned */}
          <div className="flex flex-col items-center md:items-center">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="/lovable-uploads/d10b1870-6458-4094-af17-aae70a749ecd.png" 
                alt="Kinross Muslim Jamaat Logo" 
                className="h-14"
              />
              <h3 className="text-xl font-naskh text-jamaat-darkGreen">Kinross Muslim Jamaat</h3>
            </div>
            <p className="text-sm text-jamaat-darkGreen text-center md:text-center max-w-xs">
              Serving the Muslim community since 1985, providing Islamic guidance, 
              education, and charitable services.
            </p>
          </div>

          {/* Contact Info - Centered on mobile & on desktop */}
          <div className="flex flex-col items-center md:center">
            <h4 className="text-lg mb-4 font-naskh text-center md:text-center text-jamaat-darkGreen">Contact Info</h4>
            <div className="space-y-2 text-sm text-jamaat-darkGreen">
              <a href="tel:+27837865778" 
                 className="flex items-center hover:text-jamaat-black transition-colors md:justify-center justify-center">
                <Phone size={16} className="mr-2 flex-shrink-0 text-jamaat-darkGreen" />
                <span>083 786 5778 (Yusuf Bhabha - Chairman)</span>
              </a>
              <a href="https://maps.app.goo.gl/XK6vLZA8ZMNu1CWF9" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center hover:text-jamaat-black transition-colors md:justify-center justify-center">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0 text-jamaat-darkGreen" />
                <span>Magnolia St, Evander, 2270, South Africa</span>
              </a>
              <a href="mailto:kinrossmuslimjamaat@gmail.com" 
                 className="flex items-center hover:text-jamaat-black transition-colors md:justify-center justify-center">
                <Mail size={16} className="mr-2 flex-shrink-0 text-jamaat-darkGreen" />
                <span>kinrossmuslimjamaat@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Horizontal Quick Links - Modified to scroll to top on click */}
        <div className="py-4 mt-4">
          <Separator className="mb-5 bg-jamaat-darkGreen/10" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="hover:text-jamaat-darkGreen text-sm transition-colors text-black/90"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-jamaat-darkGreen/30 mt-4 pt-4 text-center">
          <p className="text-sm text-black mb-2">
            © {currentYear} Kinross Muslim Jamaat. All rights reserved.
          </p>
          <p className="text-black">Powered By <span className="text-green-600 font-bold">ScaleUp</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
