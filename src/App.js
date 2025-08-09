import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection'; // Importar la nueva sección
import ContactSection from './components/ContactSection';

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
      <footer className="bg-purple-900 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} MiMO Estudio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;