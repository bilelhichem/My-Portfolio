import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
  // Destructure the text variable from the useTypewriter hook
  const [text] = useTypewriter({
    words: ['Computer Science .', 'Full Stack Developer.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // Use the 'text' variable in your component
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Welcome to My Portfolio</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">LAKHMI HICHEM BILLAL</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span> {/* Use the 'text' variable here */}
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am Lakhmi Hichem Bilel, a computer science student with a passion for software development. I specialize in mobile application development using Flutter and Java, and in backend development with Node.js and the Express framework. I have extensive experience with both relational (MySQL) and non-relational (Firebase, MongoDB) databases. Additionally, I am skilled in frontend development with Java and Flutter. </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
