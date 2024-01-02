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
        <h4 className="text-lg font-normal">WELCOME People</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">LAKHMI HICHEM BILLAL</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span> {/* Use the 'text' variable here */}
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Je m'appelle Lakhmi Hichem Bilel, étudiant en informatique passionné par le développement logiciel. Fort d'une expertise en Flutter et Java pour les applications mobiles, ainsi que Node.js et le framework Express pour les serveurs. J'ai également une expérience approfondie dans le développement backend, notamment avec Firebase, MongoDB, et MySQL
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
