import React from 'react'
import { BsGithub } from "react-icons/bs";


const ProjectsCard = ({ title, des, src ,href}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg border border-designColor shadow-shadowOne flex flex-col from-bodyColor to-[#202327] group hover:bg-designColor hover:from-gray-900 hover:gray-900 transition-colors duration-1000">

      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-black font-bold">

              {title}
            </h3>
            <div className="flex gap-2">
            <a href={href} className="bannerIcon bg-white" target="_blank" rel="noopener noreferrer">
            <span className="text-lg w-9 h-9 rounded-full  bg-black inline-flex justify-center items-center text-white-400 hover:text-white duration-300 cursor-pointer">
            <BsGithub className="text-white "  />

              </span>
          </a>
             
              
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard