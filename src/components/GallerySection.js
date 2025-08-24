import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const desktopImages = [
  '/image/image1.jpg',
  '/image/image2.jpg',
  '/image/image3.jpg',
  '/image/image4.jpg',
  '/image/image5.jpg',
  '/image/image6.jpg',
];

const mobileImages = [
  '/image/imgmob1.jpg',
  '/image/imgmob2.jpg',
  '/image/imgmob3.jpg',
  '/image/imgmob4.jpg',
  '/image/imgmob5.jpg',
  '/image/imgmob6.jpg',
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint md
    };

    handleResize(); // ejecutar al cargar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-10 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-purple-800 mb-6 md:mb-16 lg:mb-20"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Nuestra <span className="text-pink-600">Galería</span>
        </motion.h2>

        <div className="relative max-w-8xl mx-auto rounded-3xl overflow-hidden shadow-4xl bg-white border border-gray-100">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Galería ${currentIndex + 1}`}
              className="w-full h-74 sm:h-80 md:h-[40rem] lg:h-[50rem] object-cover"
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