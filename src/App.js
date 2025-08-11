import React, { useState } from "react";
import { User } from "lucide-react";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => setShowInfo(!showInfo);

  return (
    <div className="font-sans antialiased text-gray-900 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="w-full pb-6 relative">
        <div className="mx-auto my-6 border-t border-purple-700 w-5/6"></div>
        <div className="flex justify-center items-center gap-x-[80rem] py-2">
          <p>&copy; {new Date().getFullYear()} MiMO Estudio. Todos los derechos reservados.</p>
          <p className="relative flex items-center">
            <User className="inline w-5 h-5 mr-2" />
            <span>Desarrollado por: </span>
            <span
              onClick={toggleInfo}
              className="
                cursor-pointer
                text-gray-900
                transition
                duration-300
                ease-in-out
                hover:text-purple-700
                hover:scale-110
                inline-block
                select-none
                ml-1
              "
            >
              Owen Puerta Sauto
            </span>

            {showInfo && (
              <div
                className="
                  absolute
                  bottom-full
                  right-0
                  mb-2
                  bg-white
                  border
                  border-purple-700
                  rounded
                  shadow-lg
                  p-6
                  w-72
                  z-50
                  text-sm
                  text-gray-800
                  flex
                  flex-col
                  gap-3
                "
              >
                <h4 className="font-semibold mb-2 border-b border-purple-700 pb-1">Owen Puerta Sauto</h4>
                <p>Ingeniero en informática y desarrollador web.</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:owendev93@gmail.com" className="flex items-center gap-2 hover:text-purple-700">
                    <FiMail size={18} />
                    owendev93@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/owenpuerta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-700">
                    <FaLinkedin size={18} />
                    linkedin.com/in/owenpuerta
                  </a>
                  <a href="https://github.com/owenpuerta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-700">
                    <FaGithub size={18} />
                    github.com/owenpuerta
                  </a>
                </div>
                <button
                  onClick={() => setShowInfo(false)}
                  className="mt-4 px-3 py-1 bg-purple-700 text-white rounded hover:bg-purple-800 self-start"
                >
                  Cerrar
                </button>
              </div>
            )}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;


