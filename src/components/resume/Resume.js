import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Mycertficat from './mycertficat';
import ExperienceProfessionnelle from "./experienceprof"


const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [certficat, setcertficat] = useState(false);
   const [exper, setexper] = useState(false);
  
 
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black ">
      <div className="flex justify-center items-center text-center">
        <Title  des="My Resume" />
      </div>
      <div className="flex justify-center items-center text-center">
     <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"  >

          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setcertficat(false)&
              setexper(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setcertficat(false)&
              setexper(true)
            }
            className={`${
              exper ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
          Professional experiences
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setcertficat(false)&
              setexper(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setcertficat(true)&
              setexper(false)
            }
            className={`${
              certficat ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            My certificates
          </li>
        
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setcertficat(false)&
              setexper(false)
            }
          >
           
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setcertficat(false)&
              setexper(false)
            }
            
          >
         
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {certficat && <Mycertficat />}
      {exper && <ExperienceProfessionnelle />}
    
 
    </section>
  );
}

export default Resume