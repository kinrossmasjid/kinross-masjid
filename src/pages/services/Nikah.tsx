
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Heart } from "lucide-react";

const Nikah = () => {
  return (
    <ServicePageLayout
      title="Nikah Services"
      description="Marriage services and ceremony arrangements"
      icon={<Heart className="h-16 w-16" />}
      imageUrl="https://images.unsplash.com/photo-1550368566-f9cc32d7392d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      content={`

For nikahs, we recommend contacting us well in advance to ensure proper preparation and scheduling.

Please contact us for more details, including any associated costs and documentation requirements.
      `}
    />
  );
};

export default Nikah;
