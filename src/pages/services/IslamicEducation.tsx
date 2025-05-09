
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Users } from "lucide-react";

const IslamicEducation = () => {
  return (
    <ServicePageLayout
      title="Islamic Education"
      description="Madrassah classes for children and adults"
      icon={<Users className="h-16 w-16" />}
      imageUrl="https://images.unsplash.com/photo-1710367446064-0815d9a9f9c6?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      content={`
We consider Islamic education a fundamental part of nurturing the next generation of upright and knowledgeable Muslims. Our madrassah (Islamic school) offers structured Islamic learning.
Our curriculum is rooted in Qur’ān and Sunnah, and includes:

Qur’ān Recitation (Tajwīd): Teaching correct pronunciation and rules of recitation


Qur’ān Memorisation (Ḥifẓ): Guided memorisation for students at various levels



Islamic Studies: Instruction in ‘Aqīdah (beliefs), Fiqh (jurisprudence), Akhlaq (Islamic character)


These classes aim to instill in learners a firm understanding of Islām, love for the Qur’ān, and strong adab (manners and conduct).
Our teachers are qualified and dedicated, ensuring that learning takes place in a respectful, spiritually uplifting environment.
Madrassah registration is open throughout the year. Please contact the Education Coordinator for more details on enrolment.
      `}
    />
  );
};

export default IslamicEducation;
