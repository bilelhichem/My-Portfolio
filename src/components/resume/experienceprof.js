import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const ExperienceProfessionnelle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col items-center justify-center min-h-screen px-6"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
      Professional experiences
      </h2>

      {/* Grid Layout */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 border-l-4 border-gray-700 pl-6">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
        
          <ResumeCard
            title="Stagiaire en Informatique."
            subTitle="la Direction Générale d'Algérie Poste"
            result="Algérie"
            des="01 September 2024"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10">
        <ResumeCard
            title="Développeur Full-stack"
            subTitle="Sila Marketing"
            result="Algérie"
            des="01 janvier 2024 ----> 01 juillet 2024"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceProfessionnelle;
