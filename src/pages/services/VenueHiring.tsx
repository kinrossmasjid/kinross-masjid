
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const VenueHiring = () => {
  const content = `
We offer a hall facility for hire to the community for various functions and events.

Our venue hiring services include:

- Hall Hire
- Crockery
- Braai Stands
- Scaffolding
- Long Step Ladder

For bookings and inquiries about our venue hiring services, please contact:
`;

  return (
    <ServicePageLayout
      title="Venue Hiring"
      description="Hall, crockery, and equipment rental services"
      icon={<Home size={48} className="text-white" />}
      content={content}
      imageUrl="https://images.unsplash.com/photo-1591899916510-d8eea9eb7b25?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <div className="flex flex-col space-y-4 mt-6">
        <div className="flex items-center space-x-4">
          <Button 
            asChild
            className="bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white"
          >
            <a href="tel:+27742928606">
              <Phone size={16} className="mr-2" />
              Zainab Bhabha: +27 74 292 8606
            </a>
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            asChild
            className="bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white"
          >
            <a href="tel:+27727868126">
              <Phone size={16} className="mr-2" />
              Faheema Cassim: +27 72 786 8126
            </a>
          </Button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default VenueHiring;
