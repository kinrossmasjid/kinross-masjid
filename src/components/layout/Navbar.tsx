
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Salah Times", path: "/prayer-times" },
    { name: "Listen Live", path: "/listen-live" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-transparent fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-end">
          {/* Menu button moved to the right - using plain div for better control over size */}
          <div className="cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={48} className="text-white" strokeWidth={2} />
            ) : (
              <div className="text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="36" 
                  height="36" 
                  viewBox="0 0 50 50"
                  className="text-black fill-current"
                >
                  <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Menu - shows when menu is open */}
      {isMenuOpen && (
        <div className="bg-white/20 backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl py-2 px-4 mb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 text-sm rounded-md hover:bg-jamaat-darkGreen hover:text-white transition-colors duration-200 text-gray-800 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <Button
              asChild
              className="mt-2 bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
