import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaGithub } from 'react-icons/fa';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-black">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100016438029582" className="bannerIcon" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/bilel_hichem/" className="bannerIcon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/lakhmi-hichem-billal-a3b273255/" className="bannerIcon" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.tiktok.com/@bilelhichem1?lang=en" className="bannerIcon" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://github.com/bilelhichem" className="bannerIcon" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
           href='./cv.pdf'
           download="Hichem_Lakhmi_CV.pdf"
           className="flex items-center justify-center px-6 py-2 bg-designColor text-white font-medium rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
