import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="relative w-full flex items-start gap-6 group">
      {/* Timeline Dot */}
      <div className="relative">
        <div className="w-[12px] h-[12px] bg-black rounded-full group-hover:bg-designColor transition-all duration-300"></div>
        <div className="w-[3px] h-full bg-gray-300 absolute left-[50%] top-3 translate-x-[-50%]"></div>
      </div>

      {/* Card Content */}
      <div className="w-full bg-gray-900 bg-opacity-25 hover:bg-opacity-40 transition-all duration-300 rounded-lg p-6 shadow-lg">
        {/* Title & Subtitle */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-designColor transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm mt-1 text-gray-400 group-hover:text-gray-300 transition-all duration-300">
              {subTitle}
            </p>
          </div>
          {/* Result */}
          <div className="mt-2 lg:mt-0">
            <p className="px-4 py-2 text-white bg-designColor rounded-md text-sm font-medium shadow-md">
              {result}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 transition-all duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
