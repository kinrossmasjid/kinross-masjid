
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";

const Hero = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(true); // Start with animation already complete
  const slidesRef = useRef<HTMLDivElement>(null);

  // Define slides with desktop and mobile versions - first slide is preloaded
  const slides = [
    {
      desktop: "/lovable-uploads/33cb5969-a59d-4a08-a862-0a0fcd1d98e7.png",
      mobile: "/ExtEntrance2.0.jpg",
    },
    {
      desktop: "/lovable-uploads/69d77831-b317-419d-ac91-7e9c130902ec.png",
      mobile: "/IntCeiling2.0.png",
    },
    {
      desktop: "/lovable-uploads/94e0e701-8157-49e7-b9b5-29afadab6f3d.png",
      mobile: "/IntMasjid1-2.0.jpg",
    },
    {
      desktop: "/lovable-uploads/94e0e701-8157-49e7-b9b5-29afadab6f3d.png",
      mobile: "/ExtGarden2.0.jpg",
    },
    {
      desktop: "/lovable-uploads/94e0e701-8157-49e7-b9b5-29afadab6f3d.png",
      mobile: "/IntMasjid2-2.0.jpg",
    },
  ];

  // Improved slide preloading strategy
  useEffect(() => {
    // Check if images are already cached in browser
    const checkIfImagesLoaded = () => {
      const firstSlideImg = isMobile ? slides[0].mobile : slides[0].desktop;
      const img = new Image();
      img.src = firstSlideImg;
      
      // If first slide is already cached, we can consider images loaded
      if (img.complete) {
        setImagesLoaded(true);
        // Then lazily load the rest
        lazyLoadRemainingSlides();
      } else {
        img.onload = () => {
          setImagesLoaded(true);
          // Then lazily load the rest
          lazyLoadRemainingSlides();
        };
      }
    };
    
    const lazyLoadRemainingSlides = () => {
      // Lazily load remaining slides after first one is shown
      slides.slice(1).forEach(slide => {
        const preloadDesktop = new Image();
        preloadDesktop.src = slide.desktop;
        
        const preloadMobile = new Image();
        preloadMobile.src = slide.mobile;
      });
    };
    
    checkIfImagesLoaded();
  }, [isMobile]);

  // Automatic slide transition - only start after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length, imagesLoaded]);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative text-white overflow-hidden h-screen">
      {/* Logo in top left - high priority */}
      <div className="absolute top-4 left-4 z-20 w-16 h-16 md:w-20 md:h-20 opacity-90">
        <img 
          src="/lovable-uploads/d10b1870-6458-4094-af17-aae70a749ecd.png" 
          alt="Kinross Muslim Jamaat Logo" 
          className="w-full h-full object-contain"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      
      {/* Slides - optimized loading */}
      <div ref={slidesRef}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ willChange: "opacity" }}
          >
            <img 
              src={isMobile ? slide.mobile : slide.desktop}
              alt={`Kinross Jaamia Masjid Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content - Centered with immediate display - no animations */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg flex flex-col">
            <span>Kinross</span>
            <span>Jaamia Masjid</span>
          </h1>
          <div className="flex justify-center mt-4">
            <div className="w-3/4 h-0.5 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index 
                ? "bg-white w-4" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
};

export default Hero;
