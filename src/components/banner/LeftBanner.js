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
        <h4 className="text-lg font-normal  text-black">Welcome to My Portfolio</h4>
        <h1 className="text-6xl font-bold text-black">
          Hi, I'm <span className="text-designColor capitalize">LAKHMI HICHEM BILLAL</span>
        </h1>
        <h2 className="text-4xl font-bold text-black">
          a <span>{text}</span> {/* Use the 'text' variable here */}
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide  text-black">
        I’m Lakhmi Hichem Bilel, a Computer Science student at the University of Paris-Saclay. I specialize in mobile development (Java/Android, Flutter), backend development (MySQL, Firebase, MongoDB), and have proficiency in languages like Java, JavaScript, TypeScript, Python, Pascal, and Dart. I’m also passionate about AI, with expertise in machine learning and data science using Python.
      </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
