
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { GalleryHorizontal } from "lucide-react";

const CommunityGatherings = () => {
  return (
    <ServicePageLayout
      title="Community Gatherings"
      description="Weekly gatherings for spiritual enhancement and community bonding"
      icon={<GalleryHorizontal className="h-16 w-16" />}
      imageUrl="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1200&h=400"
      content={`
Kinross Muslim Jamaat organizes regular community gatherings to foster brotherhood and sisterhood among community members and to enhance spiritual growth collectively.

Our community gatherings include:

Weekly Halaqahs (Study Circles): These are informal gatherings where community members come together to learn about Islamic topics, discuss religious matters, and seek knowledge in a comfortable setting. Halaqahs are typically led by knowledgeable members of our community or invited scholars.

Monthly Family Programs: We organize monthly events for families to come together, share meals, and participate in fun activities while building stronger bonds within the community. These events often include educational components for children and adults alike.

Eid Celebrations: We celebrate both Eid al-Fitr and Eid al-Adha with special prayers and community festivities. These joyous occasions bring the entire community together to share in the blessings and happiness of these important Islamic holidays.

Milad un-Nabi: We commemorate the birth of Prophet Muhammad (peace be upon him) with special programs that highlight his life, teachings, and the example he set for all Muslims.

Interfaith Dialogues: We participate in and host interfaith events to build bridges with other religious communities, promoting understanding, respect, and peaceful coexistence.

Community Service Projects: We organize volunteer opportunities for community members to give back to the wider society, embodying the Islamic principles of charity and service to humanity.

These gatherings are essential for maintaining a vibrant, connected, and spiritually active community. All events are open to everyone, and we especially encourage new community members to attend and become involved.

Check our announcements and calendar for upcoming community gatherings and events.
      `}
    />
  );
};

export default CommunityGatherings;
