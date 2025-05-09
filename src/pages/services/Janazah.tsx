
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Janazah = () => {
  const content = `
For janazah services, we understand the need for immediate assistance.

Please contact one of our coordinators below:
`;

  return (
    <ServicePageLayout
      title="Janazah Support"
      description="Funeral support for the community"
      icon={<Star className="h-16 w-16" />}
      imageUrl="https://images.unsplash.com/photo-1589135716303-d04b9f3ab4b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      content={content}
    >
      <div className="flex flex-col space-y-4 mt-6">
        <div className="flex items-center space-x-4">
          <Button 
            asChild
            className="bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white"
          >
            <a href="tel:+27825519083">
              <Phone size={16} className="mr-2" />
              Abie Patel: +27 82 551 9083
            </a>
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            asChild
            className="bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white"
          >
            <a href="tel:+27723805624">
              <Phone size={16} className="mr-2" />
              Yunus Bhaba: +27 72 380 5624
            </a>
          </Button>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default Janazah;
