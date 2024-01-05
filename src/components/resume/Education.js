import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
  title="Bac +3 informatique"
  subTitle="École supérieure en informatique 08 Mai 1945 -Sidi-Bel Abbes"
  result="en cours"
  des="2023 / 2024"   />
          <ResumeCard
  title="Bac +2 informatique"
  subTitle="École supérieure en informatique 08 Mai 1945 -Sidi-Bel Abbes"
  result="13.40"
  des="2022 / 2023"   />
         
          <ResumeCard
            title="Bac +1 informatique"
            subTitle="École supérieure en informatique 08 Mai 1945 -Sidi-Bel Abbes"
            result="13.58"
            des="2021 / 2022"   />
          <ResumeCard
            title="baccalauréat en mathématiques"
            subTitle="lyceé frantz fanon -Boumerdes "
            result="16.91"
             des="2020 / 2021"        
            
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
         
          <h2 className="text-3xl md:text-4xl font-bold">Skills Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
  title="Mobile Developer"
  subTitle="Java and Flutter"
  des="java (2022 / 2024) 
   flutter (2023 / 2024)"
/>

<ResumeCard
  title="Backend Developer"
  subTitle="MongoDb and MySql and Firebase "
  des="MongoDb (2023 / 2024) 
  MySql (2023 / 2024)
  Firebase (2022 / 2024)
  "
/>

<ResumeCard
  title="Node.js et  framework Express"
  des="
  (2023/2024)
  "
/>
         
        </div>
      </div>
    </motion.div>
  );
}

export default Education