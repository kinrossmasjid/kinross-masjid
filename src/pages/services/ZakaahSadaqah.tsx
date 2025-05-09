
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Gift } from "lucide-react";

const ZakaahSadaqah = () => {
  return (
    <ServicePageLayout
      title="Zakaah & Sadaqah"
      description="Collection and distribution of Zakaah and Sadaqah to those in need"
      icon={<Gift className="h-16 w-16" />}
      imageUrl="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=1200&h=400"
      content={`
Kinross Muslim Jamaat manages the collection and distribution of Zakaah (obligatory charity) and Sadaqah (voluntary charity) to fulfill the Islamic duty of supporting those in need within our community and beyond.

Our Charity Services include:

Zakaah Collection and Distribution: We collect Zakaah throughout the year and distribute it to eligible recipients according to Islamic guidelines. Eligible recipients include the poor, the needy, those in debt, travelers in need, and others specified in the Quran.

Sadaqah Programs: We facilitate various forms of voluntary charity, including:
- Food distributions for the hungry
- Emergency financial assistance for families facing hardship
- Medical assistance for those who cannot afford treatment
- Educational support for students in need
- Housing assistance for the homeless or inadequately housed
- Special Ramadaan food hampers and Eid gifts for the less fortunate

Zakaah Calculation Assistance: We provide guidance on calculating Zakaah amounts based on individual financial situations, ensuring compliance with Islamic requirements.

Transparency: We maintain full transparency in the collection and distribution of all charitable funds, providing regular reports to donors about how their contributions are being used.

Local and International Relief: While we prioritize addressing needs in our local community, we also participate in international relief efforts during crises and disasters in coordination with reputable relief organizations.

Sustainable Charity Initiatives: Beyond immediate relief, we invest in programs that help recipients become self-sufficient, such as vocational training, small business grants, and educational sponsorships.

Our charity committee carefully assesses all requests for assistance to ensure that funds are distributed to those truly in need. We maintain the dignity and privacy of recipients while ensuring that donors' intentions are honored.

To donate Zakaah or Sadaqah, you can:
- Make a direct deposit to our charity account
- Donate online through our website
- Bring cash or check donations to the masjid
- Set up recurring donations for consistent support

For questions about our charity programs or to apply for assistance, please contact our charity committee.

Remember: "Charity does not decrease wealth." – Prophet Muhammad (peace be upon him)
      `}
    />
  );
};

export default ZakaahSadaqah;
