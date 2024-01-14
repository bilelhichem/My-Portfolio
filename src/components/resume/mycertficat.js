import React from 'react'
import CertCard from './certcard';
import { cert1, cert2, cert3 ,cert4} from "../../assets/index";

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
        
     
      </div>
    </section>
  );
}

export default Mycertficat