
import FundraiserCard, { FundraiserProps } from "./FundraiserCard";

// Sample fundraiser data
const fundraisers: FundraiserProps[] = [
  {
    id: "1",
    title: "Ladies Jamaat Khana Project",
    description: "Help us raise money to establish a dedicated jamaat khana for the ladies in our community.",
    goalAmount: 500000,
    currentAmount: 0,
    imageUrl: "https://islammessage.org/assets/defaults/default-center-image.jpeg",
    endDate: "2025-08-30",
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
      
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {displayedFundraisers.map((fundraiser) => (
          <FundraiserCard key={fundraiser.id} {...fundraiser} />
        ))}
      </div>
    </div>
  );
};

export default FundraiserSection;
