
import FundraiserCard, { FundraiserProps } from "./FundraiserCard";

// Sample fundraiser data
const fundraisers: FundraiserProps[] = [
  {
    id: "1",
    title: "Masjid Expansion Project",
    description: "Help us expand our masjid to accommodate our growing community. Funds will be used for construction materials and labor.",
    goalAmount: 500000,
    currentAmount: 320000,
    imageUrl: "https://islammessage.org/assets/defaults/default-center-image.jpeg",
    endDate: "2025-08-30",
  },
  {
    id: "2",
    title: "Ramadaan Food Drive",
    description: "Support our annual Ramadaan food distribution program for families in need in our community.",
    goalAmount: 75000,
    currentAmount: 45000,
    imageUrl: "https://muslimaid-2022.storage.googleapis.com/upload/img_cache/file-23804-e660b527cee4dd443d4f8983dbfe9d44.jpg",
    endDate: "2025-07-15",
  },
  {
    id: "3",
    title: "Islamic Education Scholarships",
    description: "Help fund scholarships for underprivileged children to receive Islamic education at our madrasa.",
    goalAmount: 100000,
    currentAmount: 35000,
    imageUrl: "https://miro.medium.com/v2/resize:fit:5432/1*cjvRWZD1TwTZ4wHTt9zMmw.jpeg",
    endDate: "2025-09-01",
  }
];

interface FundraiserSectionProps {
  title?: string;
  description?: string;
  limit?: number;
  showAll?: boolean;
}

const FundraiserSection = ({ 
  title = "Current Fundraising Campaigns", 
  description = "Support our ongoing community initiatives", 
  limit = 3,
  showAll = false
}: FundraiserSectionProps) => {
  // Limit the number of fundraisers shown unless showAll is true
  const displayedFundraisers = showAll ? fundraisers : fundraisers.slice(0, limit);
  
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedFundraisers.map((fundraiser) => (
          <FundraiserCard key={fundraiser.id} {...fundraiser} />
        ))}
      </div>
    </div>
  );
};

export default FundraiserSection;
