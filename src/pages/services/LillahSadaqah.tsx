
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Gift } from "lucide-react";

const LillahSadaqah = () => {
  return (
    <ServicePageLayout
      title="Lillah & Sadaqah"
      description="Collection and distribution of charity to those in need"
      icon={<Gift className="h-16 w-16" />}
      imageUrl="https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      content={`
We manage the collection and distribution of Lillah (voluntary charity for religious purposes) and Sadaqah (general voluntary charity) to fulfill the Islamic duty of supporting those in need within our community and beyond.


Lillah & Sadaqah Collection and Distribution: We collect donations throughout the year and distribute them to eligible recipients according to Islamic guidelines.


For questions about our charity programs or to apply for assistance, please contact us.

Remember: "Charity does not decrease wealth." – Prophet Muhammad (peace be upon him)
      `}
    />
  );
};

export default LillahSadaqah;
