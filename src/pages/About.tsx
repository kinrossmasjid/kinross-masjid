
import { Card, CardContent } from "@/components/ui/card";
import { Book, Calendar, CirclePlus, Heart, Building, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Daily Salah",
    description: "Five daily prayers led by our experienced Imams and weekly Jumu'ah sermons.",
    icon: <Calendar size={32} className="text-jamaat-darkGreen" />,
    path: "/services/daily-prayers"
  },
  {
    title: "Madrasa/Islamic Education",
    description: "Comprehensive Islamic education for children and adults.",
    icon: <Book size={32} className="text-jamaat-darkGreen" />,
    path: "/services/islamic-education"
  },
  {
    title: "Sadaqah/Lillah",
    description: "Supporting charitable causes and those in need.",
    icon: <CirclePlus size={32} className="text-jamaat-darkGreen" />,
    path: "/services/lillah-sadaqah"
  },
  {
    title: "Ramadhaan Programmes",
    description: "Special events and gatherings during the holy month.",
    icon: <Building size={32} className="text-jamaat-darkGreen" />,
    path: "/services/ramadaan-programs"
  },
  {
    title: "Nikah Bookings",
    description: "Marriage services and ceremony arrangements.",
    icon: <Heart size={32} className="text-jamaat-darkGreen" />,
    path: "/services/nikah"
  },
  {
    title: "Burial/Janaazah Support",
    description: "Assistance and guidance during times of loss.",
    icon: <Users size={32} className="text-jamaat-darkGreen" />,
    path: "/services/janazah"
  },
  {
    title: "Venue Hiring",
    description: "Hall, crockery, and equipment rental services.",
    icon: <Home size={32} className="text-jamaat-darkGreen" />,
    path: "/services/venue-hiring"
  },
];

const About = () => {
  return (
    <>
      <section className="relative bg-jamaat-darkGreen text-white pt-32 pb-16 md:py-32 overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-white/80">
              Serving the Muslim community of Kinross since 1985
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <img 
                src="/lovable-uploads/d10b1870-6458-4094-af17-aae70a749ecd.png" 
                alt="Kinross Muslim Jamaat Logo" 
                className="h-32 mx-auto mb-4"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our History</h2>
            <p className="text-gray-600 mb-4">
              Established in 1985, Kinross Muslim Jamaat has been a cornerstone of the Muslim community
              in Mpumalanga for over 35 years. What began as a small prayer space has grown into a
              vibrant masjid and community center that serves Muslims throughout the region.
            </p>
            <p className="text-gray-600 mb-4">
              Throughout our history, we have remained committed to our founding principles of
              providing Islamic guidance, education, and charitable services to the local population.
              Our masjid has been expanded and renovated over the years to accommodate our growing
              community, but our mission has remained the same.
            </p>

            <div className="my-10 p-6 bg-jamaat-darkGreen text-white rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="italic text-white/90">
                "To uphold the principles of Islam through the maintenance of the masjid, education of our youth,
                charitable outreach, and the spiritual upliftment of our community."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-jamaat-darkGreen/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Kinross Muslim Jamaat offers a range of services and programs to meet the spiritual
              and community needs of Muslims in our area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link to={service.path} key={idx} className="block hover:scale-105 transition-transform">
                <Card className="border-jamaat-darkGreen/20 hover:shadow-lg transition-all bg-white h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 rounded-full bg-jamaat-silver mt-1">{service.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
