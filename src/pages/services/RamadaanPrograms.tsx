
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Building } from "lucide-react";

const RamadaanPrograms = () => {
  return (
    <ServicePageLayout
      title="Ramadaan Programs"
      description="Special programs during Ramadaan including Iftar gatherings and Taraweeh prayers"
      icon={<Building className="h-16 w-16" />}
      imageUrl="https://images.pexels.com/photos/318451/pexels-photo-318451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      content={`
Ramadaan is the holiest month in the Islamic calendar. We organize special programs to help our community maximize the spiritual benefits of this blessed month.

Our Ramadaan services and programs include:

Taraweeh Prayers: Each night during Ramadaan, Taraweeh is helf after the Isha. Our Huffaz lead these prayers.

Daily Reminders: Short, inspirational talks are given before or after prayers to remind the community of the virtues and lessons of Ramadaan, helping everyone to maintain focus on spiritual growth.

Qiyam ul-Lail (Night Prayers): During the last ten nights of Ramadaan, which include the Night of Power (Laylat al-Qadr), we organize special night prayers and programs to maximize worship during these especially blessed nights.

Zakat al-Fitr Collection: We facilitate the collection and distribution of Zakat al-Fitr, the obligatory charity that must be given before the end of Ramadaan.

Eid Salaah

We encourage those who are new to Islam or who may be experiencing Ramadaan for the first time to join us and learn more about this special month.

For the upcoming Ramadaan's schedule and program details, please check our announcements or contact us directly.
      `}
    />
  );
};

export default RamadaanPrograms;
