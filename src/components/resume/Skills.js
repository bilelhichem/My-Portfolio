import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "Java", level: 70 },
  { name: "JavaScript", level: 60 },
  { name: "Python", level: 50 },
  { name: "Flutter", level: 70 },
  { name: "Node.js", level: 60 },
  { name: "TypeScript", level: 60 },
  { name: "MongoDB", level: 50 },
  { name: "MySQL", level: 60 },
  { name: "Firebase", level: 60 },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col items-center justify-center min-h-screen px-6"
    >
      {/* Title */}
      <div className="py-12 font-titleFont flex flex-col gap-4 text-center">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
      </div>

      {/* Skills Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="overflow-hidden">
            <p className="text-sm uppercase font-medium">{skill.name}</p>
            <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-6 right-0 text-black text-sm font-bold">
                  {skill.level}%
                </span>
              </motion.span>
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
