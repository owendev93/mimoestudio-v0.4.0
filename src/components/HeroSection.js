import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Fondo con formas animadas y degradados */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 1, type: "spring" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 1, type: "spring" }}
        ></motion.div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center p-20 bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl max-w-5xl mx-auto border border-white/80">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-purple-900 mb-4 leading-tight drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Capturando tus momentos más <span className="text-pink-600">dulces...</span>
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-8 font-light"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          En MiMO Estudio, transformamos instantes en recuerdos eternos.
        </motion.p>
        <motion.a
          href="#gallery"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
          whileHover={{ y: -8, transition: { yoyo: Infinity, duration: 0.1 } }}
        >
          <Sparkles className="w-6 h-6 mr-2" />
          Ver Galería
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;