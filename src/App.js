import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection'; // Importar la nueva sección
import ContactSection from './components/ContactSection';
import { User } from 'lucide-react'; // Agrega esta línea arriba

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <main >
        <HeroSection />
        <GallerySection />
        <AboutSection /> {/* Añadir la nueva sección aquí */}
        <ContactSection />
      </main>
      <footer className="bg-purple-900 text-white py-8 text-center flex justify-center items-center gap-x-[80rem]">
        <p>&copy; {new Date().getFullYear()} MiMO Estudio. Todos los derechos reservados.</p>
        <p>
        <User className="inline w-5 h-5 mr-2" />
        Desarrollado por: Owen Puerta Sauto.
        </p>
      </footer>
    </div>
  );
};

export default App;