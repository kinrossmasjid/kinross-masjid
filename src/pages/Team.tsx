
import { Card, CardContent } from "@/components/ui/card";
import { User, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Team = () => {
  const isMobile = useIsMobile();
  const boardMembers = [
    { name: "Yusuf Bhabha", role: "Chairman", phone: "083 786 5778" },
    { name: "Muhammed Cassim", role: "Vice Chairman", phone: "083 750 5786" },
    { name: "Aslam Carrim", role: "Treasurer", phone: "084 587 8617" },
    { name: "M.Yusuf Gani", role: "Secretary", phone: "" },
    { name: "Ebrahim Lambart", role: "Head of Maintenance", phone: "" },
    { name: "Faizel Patel", role: "Senior Advisor", phone: "" },
  ];

  const imaams = [
    { name: "Moulana Zaheer Ali", role: "Imam", phone: "" },
    { name: "Hafiz Basheer Evans", role: "Imam", phone: "" },
  ];

  const teachers = [
    { name: "Moulana Zaheer", role: "Teacher", phone: "" },
    { name: "Hafiz Basheer", role: "Teacher", phone: "" },
    { name: "Moulana Aslam", role: "Teacher", phone: "" },
    { name: "Apa Zaynab", role: "Teacher", phone: "" },
  ];

  // Place Apa Amaarah separately for center positioning
  const centerTeacher = { name: "Apa Amaarah", role: "Teacher", phone: "" };

  // Ahmed Coovadia placed separately for center positioning
  const seniorAdvisor = { name: "Ahmed Coovadia", role: "Senior Advisor", phone: "" };

  // Format phone number from +27 to 0
  const formatPhoneNumber = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/^\+27\s?/, "0").replace(/\s+/g, "");
  };

  // Format display phone number (keep spaces for display)
  const formatDisplayNumber = (phone: string) => {
    if (!phone) return "";
    
    // Convert +27 format to 0 format for display
    let formattedPhone = phone.replace(/^\+27\s?/, "0");
    
    // For mobile view, remove spaces between digits to save space
    if (isMobile) {
      return formattedPhone.replace(/\s+/g, "");
    }
    
    return formattedPhone;
  };

  // Render individual team member card
  const renderTeamMemberCard = (member: { name: string; role: string; phone: string }) => (
    <Card className="border-jamaat-darkGreen/20 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-2.5 md:p-4 text-center flex flex-col h-full justify-between">
        <div>
          <div className="w-8 h-8 md:w-12 md:h-12 bg-jamaat-darkGreen/10 rounded-full flex items-center justify-center mx-auto mb-1.5 md:mb-3">
            <User size={isMobile ? 16 : 20} className="text-jamaat-darkGreen" />
          </div>
          <h3 className="font-medium text-gray-800 text-xs md:text-base leading-tight">{member.name}</h3>
          <p className="text-gray-600 text-xs md:text-sm leading-tight mt-0.5">{member.role}</p>
        </div>
        {member.phone && (
          <a href={`tel:+27${formatPhoneNumber(member.phone)}`} className="flex items-center justify-center mt-1.5 text-jamaat-darkGreen hover:underline">
            <Phone size={isMobile ? 10 : 12} className="mr-1" />
            <span className="text-xs md:text-sm">{formatDisplayNumber(member.phone)}</span>
          </a>
        )}
      </CardContent>
    </Card>
  );

  return (
    <>
      <section className="relative bg-jamaat-darkGreen text-white pt-32 pb-16 md:py-32 overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-lg text-white/80">
              Meet the dedicated individuals who serve our community
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white pb-10">
        <div className="container mx-auto px-2 md:px-4">
          <div className="max-w-4xl mx-auto">
            {/* Board Members */}
            <div className="mb-6 md:mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-3 md:mb-6">Board Members</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mx-auto">
                {boardMembers.map((member, index) => (
                  <div key={index} className="h-full">
                    {renderTeamMemberCard(member)}
                  </div>
                ))}
              </div>
            </div>

            {/* Ahmed Coovadia - Centered */}
            <div className="mb-6 md:mb-10 flex justify-center">
              <div className="w-40 md:w-48">
                {renderTeamMemberCard(seniorAdvisor)}
              </div>
            </div>

            {/* Imaams */}
            <div className="mb-6 md:mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-3 md:mb-6">Imaams</h2>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-2 md:gap-4 w-full max-w-xs">
                  {imaams.map((imam, index) => (
                    <div key={index} className="h-full">
                      {renderTeamMemberCard(imam)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Teachers - all in one grid with consistent layout */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-3 md:mb-6">Teachers</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mx-auto">
                {teachers.map((teacher, index) => (
                  <div key={index} className="h-full">
                    {renderTeamMemberCard(teacher)}
                  </div>
                ))}
                {/* Apa Amaarah - shown as part of grid on desktop but centered on mobile */}
                <div className="h-full md:block hidden">
                  {renderTeamMemberCard(centerTeacher)}
                </div>
              </div>
              
              {/* Apa Amaarah - Centered on mobile only */}
              <div className="mt-2 md:mt-0 flex justify-center md:hidden">
                <div className="w-[calc(50%-4px)]">
                  {renderTeamMemberCard(centerTeacher)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
