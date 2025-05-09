
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Calendar, Heart, Building, Users, CirclePlus, Star, Home } from "lucide-react";

const services = [
  {
    title: "Madrasa/Islamic Education",
    description: "Comprehensive Islamic education for children and adults.",
    icon: <Book className="h-12 w-12 text-jamaat-darkGreen" />,
  },
  {
    title: "Lillah & Sadaqah",
    description: "Supporting charitable causes and those in need.",
    icon: <CirclePlus className="h-12 w-12 text-jamaat-darkGreen" />,
  },
  {
    title: "Daily Prayers",
    description: "Five daily prayers (Salah) and weekly Jumu'ah services.",
    icon: <Calendar className="h-12 w-12 text-jamaat-darkGreen" />,
  },
  {
    title: "Ramadhaan Programmes",
    description: "Special events and gatherings during the holy month.",
    icon: <Building className="h-12 w-12 text-jamaat-darkGreen" />,
  },
  {
    title: "Nikah Services",
    description: "Marriage services and ceremony arrangements.",
    icon: <Heart className="h-12 w-12 text-jamaat-darkGreen" />,
  },
  {
    title: "Janazah Support",
    description: "Assistance and guidance during times of loss.",
    icon: <Star className="h-12 w-12 text-jamaat-darkGreen" />,
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-jamaat-darkGreen text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Kinross Muslim Jamaat provides a range of services to support the
            spiritual and community needs of our members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="border-white/10 transition-all hover:shadow-lg bg-jamaat-darkGreen/80 text-white">
              <CardHeader className="pb-2 pt-6 text-center">
                <div className="mx-auto p-3 rounded-full bg-jamaat-silver">{service.icon}</div>
                <CardTitle className="mt-4 text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/80">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
