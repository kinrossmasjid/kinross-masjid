
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryItems = [
  {
    id: 1,
    title: "Main Entrance of the masjid",
    src: "/ExtEntrance2.0.jpg",
    description: "The beautiful JAAMIA MASJID entrance with golden sunset lighting, featuring lush palm trees and flowers.",
  },
  {
    id: 2,
    title: "Exterior garden view",
    src: "/ExtGarden2.0.jpg",
    description: "A serene view of the masjid's exterior garden, showcasing the lush greenery and tranquil atmosphere.",
  },
  {
    id: 3,
    title: "Masjid Interior",
    src: "/IntMasjid1-2.0.jpg",
    description: "Our beautifully designed masjid featuring elegant wooden details, decorative ceiling with recessed lighting, and traditional Islamic calligraphy.",
  },
  {
    id: 4,
    title: "Masjid Interior",
    src: "/IntMasjid2-2.0.jpg",
    description: "Our beautifully designed masjid featuring elegant wooden details, decorative ceiling with recessed lighting, and traditional Islamic calligraphy.",
  },
  {
    id: 5,
    title: "Wudhu khana",
    src: "/IntWudhu2.0.jpg",
    description: "The wudhu khana (ablution area) of the masjid, designed for comfort and convenience.",
  },
  {
    id: 6,
    title: "Madressa",
    src: "/ExtMadressah2.0.jpg",
    description: "The madressa (Islamic school) building, designed to provide a conducive learning environment for students.",
  },
  {
    id: 7,
    title: "Hall",
    src: "/ExtHall2.0.jpg",
    description: "Our community hall, designed for community gatherings and events. Contact us for booking inquiries.",
  },
  {
    id: 8,
    title: "Beautiful masjid ceiling",
    src: "/IntCeiling2.0.png",
    description: "A close-up view of the masjid's beautifully designed ceiling, showcasing intricate patterns and details.",
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: number]: boolean}>({});

  // Preload images in batches to improve performance
  useEffect(() => {
    // Only load the first batch immediately
    const firstBatchCount = 3;
    const firstBatch = galleryItems.slice(0, firstBatchCount);
    
    // Create a map to track which images are loaded
    const loadTracker: {[key: number]: boolean} = {};
    
    // Load first batch immediately
    firstBatch.forEach(item => {
      const img = new Image();
      img.src = item.src;
      img.onload = () => {
        setImagesLoaded(prev => ({...prev, [item.id]: true}));
        loadTracker[item.id] = true;
      };
    });
    
    // If we have more images, load them after a delay
    if (galleryItems.length > firstBatchCount) {
      const secondBatch = galleryItems.slice(firstBatchCount);
      setTimeout(() => {
        secondBatch.forEach(item => {
          const img = new Image();
          img.src = item.src;
          img.onload = () => {
            setImagesLoaded(prev => ({...prev, [item.id]: true}));
            loadTracker[item.id] = true;
          };
        });
      }, 1000); // Wait 1 second before loading second batch
    }
  }, []);

  const openImage = (id: number) => {
    setSelectedImage(id);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const getSelectedImage = () => {
    return galleryItems.find(item => item.id === selectedImage);
  };

  return (
    <>
      <section className="relative bg-jamaat-darkGreen text-white pt-28 pb-16 md:py-24 overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-white/80">
              Images of our masjid and prayer facilities
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card 
                key={item.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border-jamaat-darkGreen/20 bg-white"
                onClick={() => openImage(item.id)}
              >
                <CardContent className="p-0 aspect-[3/4] relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading={item.id <= 3 ? "eager" : "lazy"}
                    decoding="async"
                    width="480"
                    height="270"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-medium text-sm">{item.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-white">
          {selectedImage !== null && (
            <div>
              <div className="relative aspect-video">
                <img
                  src={getSelectedImage()?.src}
                  alt={getSelectedImage()?.title}
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {getSelectedImage()?.title}
                </h2>
                <p className="text-gray-600">
                  {getSelectedImage()?.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
