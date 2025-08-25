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
          <Camera className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-purple-800">Mi'MO Estudio</h1>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <motion.a
                href="#home"
                className="text-purple-700 hover:text-purple-900 text-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Inicio
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#gallery"
                className="text-purple-700 hover:text-purple-900 text-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Galería
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#about"
                className="text-purple-700 hover:text-purple-900 text-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Sobre Nosotros
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#contact"
                className="text-purple-700 hover:text-purple-900 text-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contacto
              </motion.a>
            </li>
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