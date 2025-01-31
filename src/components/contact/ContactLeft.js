import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaGithub,FaTiktok } from "react-icons/fa";
import {  f } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={f}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Lakhmi Hichem Billal</h3>
        <p className="text-lg font-normal text-gray-400">
        Full-stack developer && AI
        </p>
       
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+33751399945</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">lakhmibilel12@gmail.com || lakhmibilelhichem@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
        </div>
      </div>
    </div>
  );
}

export default ContactLeft