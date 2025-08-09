import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://via.placeholder.com/800x600/FCE7F3/9C27B0?text=Retratos+Profesionales',
  'https://via.placeholder.com/800x600/EADFF8/673AB7?text=Eventos+Especiales',
  'https://via.placeholder.com/800x600/FCE7F3/9C27B0?text=Fotografía+de+Producto',
  'https://via.placeholder.com/800x600/EADFF8/673AB7?text=Sesiones+Familiares',
  'https://via.placeholder.com/800x600/FCE7F3/9C27B0?text=Paisajes+Artísticos',
  'https://via.placeholder.com/800x600/EADFF8/673AB7?text=Moda+y+Estilo',
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-extrabold text-center text-purple-800 mb-12"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Nuestra <span className="text-pink-600">Galería</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Galería ${currentIndex + 1}`}
              className="w-full h-96 object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <motion.button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg text-purple-600 hover:bg-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-lg text-purple-600 hover:bg-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                } transition-colors duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;