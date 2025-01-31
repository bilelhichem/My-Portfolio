import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col items-center justify-center min-h-screen px-6"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Education Quality
      </h2>

      {/* Grid Layout */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 border-l-4 border-gray-700 pl-6">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          <ResumeCard
            title="Bac +1 Informatique"
            subTitle="École supérieure en informatique 08 Mai 1945 - Sidi-Bel-Abbès"
            result="13.58"
            des="2021 / 2022"
          />
          <ResumeCard
            title="Baccalauréat en Mathématiques"
            subTitle="Lycée Frantz Fanon - Boumerdes"
            result="16.91"
            des="2020 / 2021"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10">
          <ResumeCard
            title="Master 1 en Informatique et Réseaux"
            subTitle="Université d'Évry-Val-d'Essonne (Université Paris-Saclay)"
            result="En cours"
            des="2024 / 2025"
          />
          <ResumeCard
            title="Bac +3 Informatique"
            subTitle="École supérieure en informatique 08 Mai 1945 - Sidi-Bel-Abbès"
            result="11"
            des="2023 / 2024"
          />
          <ResumeCard
            title="Bac +2 Informatique"
            subTitle="École supérieure en informatique 08 Mai 1945 - Sidi-Bel-Abbès"
            result="13.40"
            des="2022 / 2023"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
