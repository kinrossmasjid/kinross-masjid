
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

type Prayer = {
  name: string;
  time: string;
};

const PrayerTimesCard = () => {
  // Note: These are placeholder times that would typically come from an API
  const prayers: Prayer[] = [
    { name: "Fajr", time: "05:15 AM" },
    { name: "Dhuhr", time: "12:30 PM" },
    { name: "Asr", time: "15:45 PM" },
    { name: "Maghrib", time: "19:00 PM" },
    { name: "Isha", time: "20:30 PM" },
    { name: "Jumu'ah", time: "13:15 PM" },
  ];

  const currentDate = new Date().toLocaleDateString("en-ZA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden border-jamaat-silver/20">
      <CardHeader className="bg-jamaat-silver text-white py-4">
        <CardTitle className="text-center flex items-center justify-center gap-2 text-gray-800">
          <Clock size={20} />
          Prayer Times for Today
        </CardTitle>
        <p className="text-center text-sm text-gray-600">{currentDate}</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-2 divide-x divide-y">
          {prayers.map((prayer, index) => (
            <div
              key={prayer.name}
              className={`p-4 ${
                index === 5 ? "col-span-2 bg-jamaat-silver/10" : ""
              }`}
            >
              <p className="font-medium text-gray-800">{prayer.name}</p>
              <p className="text-lg">{prayer.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PrayerTimesCard;
