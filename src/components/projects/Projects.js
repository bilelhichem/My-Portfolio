import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projectfour} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="hospital management"
          des="For a multidisciplinary hospital management project as the culmination of my studies in computer science preparatory class, my role is to develop the backend for the website using Firebase"
          src={projectOne}
          href={"https://github.com/bilelhichem7/Cliniqueweb"}
        />
           <ProjectsCard
          title="Books app"
          des="With this application, you can read and download books in PDF format."
          src={projectTwo}
          href={"https://github.com/bilelhichem/Book-app"}
        />
           <ProjectsCard
          title="Fodei"
          des="Restaurant Booking App"
          src={projectThree}
          href={"https://github.com/bilelhichem/FoodEcommerce"}
        />
           <ProjectsCard
          title="Api Chat Gpt"
          des="You can use ChatGPT in its formal app"
          src={projectfour}
          href={"https://github.com/bilelhichem/ApiChatGpt"}
        />
       
     
      </div>
    </section>
  );
}

export default Projects