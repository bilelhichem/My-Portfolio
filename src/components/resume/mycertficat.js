import React from 'react'
import CertCard from './certcard';
import { cert1, cert2, cert3 ,cert4,cert5,cert6,cert7} from "../../assets/index";

const Mycertficat = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <CertCard
          
          des=" SQL certification from Surendra Varma Pericherla, providing evidence of the data skills required for an entry-level role in Programming with SQL and the DBeaver software"
          src={cert1}
        />

<CertCard
          
          des="certificate for building apps with Flutter"
          src={cert2}
        />

<CertCard
          
          des="certificate for completing the Postman API Testing course by Parul Dang .

          This course provides essential knowledge for working with APIs, covering fundamentals and terminology."
          src={cert3}
        />
        
        <CertCard
          
          des="mon certificat pour avoir suivi le cours JavaScript Essentials 1 de la Cisco Networking Academy"
          src={cert4}
        />

<CertCard
          
          des="My certificate for participating in the ESI Showcase event organized by the Ingeniums Scientific Club to present our interdisciplinary project alongside other students"
          src={cert5}
        />
        

<CertCard
          
          des="my certificate of completing the Node.js course .
          
          The course contains information on building RESTful APIs with Node.js based on efficient professional architecture patterns.

          "
          src={cert6}
        />

<CertCard
          
          des="Ma première certification pour l'introduction au domaine de la science des données et de l'intelligence artificielle."
          src={cert7}
        />
     
      </div>
    </section>
  );
}

export default Mycertficat