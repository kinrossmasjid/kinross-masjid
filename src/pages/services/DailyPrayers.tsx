
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Calendar } from "lucide-react";

const DailyPrayers = () => {
  return (
    <ServicePageLayout
      title="Daily Salah"
      description="Five daily prayers (Salah) and weekly Jumu'ah services"
      icon={<Calendar className="h-16 w-16" />}
      imageUrl="https://images.unsplash.com/photo-1733063166870-f51cf735ca67?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      content={`
We facilitate the performance of the five daily Salah (prayers) in congregation, as well as the Jumu'ah (Friday) prayer. All ṣalāh are led by our Imāms, in an environment that is peaceful, respectful, and rooted in the spirit of brotherhood and devotion.

Our masjid remains open for all prescribed prayer times, ensuring the community has access to a sacred and clean space for fulfilling this central pillar of Islām.

Five Daily Salaah:

Fajr (dawn)

Dhuhr (midday)

'Asr (afternoon)

Maghrib (sunset)

'Ishā (night)

On Fridays, the Jumu'ah gathering includes a khuṭbah (sermon) that addresses relevant topics through the lens of Qur'ān and Sunnah, followed by congregational prayer.

We encourage all adult males to attend the prayers in jamā'ah (congregation), which carries greater reward than praying individually, as taught in authentic aḥādīth.

Prayer times adjust throughout the year. Please consult our Prayer Times page for the latest live schedule.
      `}
    />
  );
};

export default DailyPrayers;
