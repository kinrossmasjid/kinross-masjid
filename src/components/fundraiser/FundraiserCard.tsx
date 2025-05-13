
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export type FundraiserProps = {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  currentAmount: number;
  imageUrl?: string;
  endDate?: string;
};

const FundraiserCard = ({
  title,
  description,
  goalAmount,
  currentAmount,
  imageUrl,
  endDate,
}: FundraiserProps) => {
  // Calculate percentage raised
  const percentageRaised = Math.min(Math.round((currentAmount / goalAmount) * 100), 100);
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="overflow-hidden border-jamaat-darkGreen/20 shadow-lg flex flex-col h-full max-w-md md:mx-auto w-full">
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover transition-all hover:scale-105 duration-300" 
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-jamaat-darkGreen">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-gray-600 mb-4 text-sm flex-grow">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">
              {formatCurrency(currentAmount)} raised
            </span>
            <span className="text-gray-500">
              Goal: {formatCurrency(goalAmount)}
            </span>
          </div>
          <Progress value={percentageRaised} className="h-2 bg-gray-200" />
          <div className="text-right text-xs text-gray-500">
            {percentageRaised}% of goal
          </div>
        </div>
        
        <Button 
          className="w-full bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white" 
          onClick={() => window.open("https://pay.yoco.com/kinross-muslim-jamaat", "_blank")}
        >
          Donate Now
        </Button>
      </CardContent>
    </Card>
  );
};

/*
        {endDate && (
          <CardDescription>
            <span className="text-sm text-red-600 font-medium">
              Ends on {new Date(endDate).toLocaleDateString()}
            </span>
          </CardDescription>
        )}
*/

export default FundraiserCard;