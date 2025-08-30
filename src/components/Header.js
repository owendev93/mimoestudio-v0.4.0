import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Menu } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-100 to-purple-100 p-6 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Camera className="w-11 h-11 text-purple-600" />
          <h1 className="text-5xl font-epunda text-purple-800">Mi'MO Estudio</h1>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-kaushan">
            {[
              { href: "#home", label: "Inicio" },
              { href: "#gallery", label: "Galería" },
              { href: "#about", label: "Sobre Nosotros" },
              { href: "#contact", label: "Contacto" },
            ].map(({ href, label }) => (
              <li key={href} className="relative">
                <motion.a
                  href={href}
                  className="relative text-purple-700 hover:text-purple-900 text-3xl font-medium transition-colors duration-300 inline-block"
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <span>{label}</span>
                  <motion.div
                    variants={{
                      initial: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-700 origin-left rounded"
                    style={{ scaleX: 0 }}
                  />
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden text-purple-700">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;