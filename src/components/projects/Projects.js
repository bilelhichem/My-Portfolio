import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projectfour,png3, hadj,sec,housing,llms} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <div className="flex justify-center items-center text-center ">
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

<ProjectsCard
          title="VERKET"
          des="Application for Biological Products"
          src={png3}
          href={"https://github.com/bilelhichem/VERKET"}
        />
       <ProjectsCard
          title="Hajj in Algeria"
          des="Backend for Managing Hajj in Algeria from Point A to Point Z

Includes functionalities such as lottery drawing, reservation, and payment for all Hajj-related operations.

Technologies used: Node.js, MySQL, TypeScript, Express"
          src={hadj}
          href={"https://github.com/1CS-Project/Backend"}
        />


<ProjectsCard
          title="Hill Cipher Application"
          des="Java Application for Encryption and Decryption Using Hill Cipher with Modulo 256"
          src={sec}
          href={"https://github.com/bilelhichem/HillCipherApp"}
        />


<ProjectsCard
          title="Housing Prices Competition"
          des="The housing price competition is when various market players, such as developers and buyers, compete to offer properties at competitive prices, influenced by factors like demand, supply, and interest rates"
          src={housing}
          href={"https://github.com/tayeb-sid/Housing-prices-competition"}
        />
       
       <ProjectsCard
          title="Génération de Contenus Pédagogiques Adaptés"
          des="Ce projet explore l'utilisation des grands modèles de langage (LLMs) pour améliorer l'apprentissage des élèves en générant des contenus pédagogiques personnalisés. L'idée est de mieux adapter les ressources éducatives aux connaissances préexistantes et aux représentations mentales des élèves, afin de favoriser une meilleure compréhension. En tenant compte des prérequis de chaque élève, ce projet permet de générer des contenus plus pertinents et adaptés, contribuant ainsi à rendre l'apprentissage plus efficace et accessible à tous."
          src={llms}
          href={"https://github.com/bilelhichem/LLms.git"}
        />
     
      
     
      </div>

      





    </section>
  );
}

export default Projects