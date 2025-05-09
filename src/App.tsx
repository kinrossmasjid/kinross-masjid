
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import PrayerTimes from "./pages/PrayerTimes";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import ListenLive from "./pages/ListenLive";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

// Service pages
import DailyPrayers from "./pages/services/DailyPrayers";
import IslamicEducation from "./pages/services/IslamicEducation";
import RamadaanPrograms from "./pages/services/RamadaanPrograms";
import Nikah from "./pages/services/Nikah";
import Janazah from "./pages/services/Janazah";
import LillahSadaqah from "./pages/services/LillahSadaqah";
import VenueHiring from "./pages/services/VenueHiring";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/prayer-times" element={<PrayerTimes />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/listen-live" element={<ListenLive />} />
              <Route path="/team" element={<Team />} />
              
              {/* Service routes */}
              <Route path="/services/daily-prayers" element={<DailyPrayers />} />
              <Route path="/services/islamic-education" element={<IslamicEducation />} />
              <Route path="/services/lillah-sadaqah" element={<LillahSadaqah />} />
              <Route path="/services/ramadaan-programs" element={<RamadaanPrograms />} />
              <Route path="/services/nikah" element={<Nikah />} />
              <Route path="/services/janazah" element={<Janazah />} />
              <Route path="/services/venue-hiring" element={<VenueHiring />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
