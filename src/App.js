import React, { useState } from "react";
import { User } from "lucide-react";
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
              className="cursor-pointer text-gray-900 transition duration-300 ease-in-out hover:text-purple-700 hover:scale-110 inline-block select-none ml-1">
              Owen Puerta Sauto
            </span>
            {showInfo && (
              <div
                className="absolute bottom-full right-0 mb-2 bg-white border border-purple-700 rounded shadow-lg p-4w-64 z-50 text-sm text-gray-800"
              >
                <h4 className="font-semibold mb-4">Owen Puerta Sauto</h4>
                <p>Ingeniero en informática y desarrollador web.</p>
                <p>Email: owendev93@gmail.com</p>
                <p>LinkedIn: linkedin.com/in/owenpuerta</p>
                <button
                  onClick={() => setShowInfo(false)}
                  className="mt-3 px-3 py-1 bg-purple-700 text-white rounded hover:bg-purple-800"
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

