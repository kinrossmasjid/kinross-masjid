
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Heart } from "lucide-react";

const NikahJanazah = () => {
  return (
    <ServicePageLayout
      title="Nikah & Janazah Support"
      description="Marriage services and funeral support for the community"
      icon={<Heart className="h-16 w-16" />}
      imageUrl="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&h=400"
      content={`
Kinross Muslim Jamaat provides essential religious services for life's most significant moments, including marriages (nikah) and funerals (janazah).

Our Nikah Services include:

- Pre-marriage counseling to help couples prepare for marriage in accordance with Islamic teachings
- Arrangement of the nikah ceremony in our masjid, with an imam to officiate
- Assistance with marriage documentation and compliance with both Islamic and legal requirements
- Guidance on marital rights and responsibilities according to Islam
- Beautiful space for the nikah ceremony with seating for family and guests
- Support for reverts who need additional assistance with Islamic marriage requirements

Our Janazah (Funeral) Services include:

- Guidance and support to grieving families
- Washing and shrouding of the deceased (ghusl and kafan)
- Funeral prayers (salat al-janazah)
- Coordination with local cemeteries for burial according to Islamic practices
- Support for bereaved families through condolence gatherings
- Assistance with Islamic inheritance guidance

All these services are provided with the utmost sensitivity, respect, and adherence to Islamic principles. Our imams and trained volunteers are available to assist community members during these significant life events.

For nikah services, we recommend contacting us well in advance to ensure proper preparation and scheduling. For janazah services, we understand the need for immediate assistance and have a team ready to respond promptly.

Please contact our office for more details about these services, including any associated costs and documentation requirements.
      `}
    />
  );
};

export default NikahJanazah;
