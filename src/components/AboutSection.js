import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-5xl font-extrabold text-center text-purple-800 mb-12"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Sobre <span className="text-pink-600">Nosotros</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sección del Estudio */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-100"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <Camera className="w-12 h-12 text-pink-500" />
              <h3 className="text-3xl font-bold text-purple-800">MiMO Estudio</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              En MiMO Estudio, creemos que cada momento es una obra de arte esperando ser capturada.
              Somos un espacio dedicado a la fotografía con pasión, creatividad y un toque personal.
              Desde retratos íntimos hasta eventos vibrantes, nuestro objetivo es inmortalizar tus
              recuerdos más preciados con una estética única y emotiva.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Utilizamos la última tecnología y técnicas innovadoras para asegurar que cada imagen
              no solo sea de alta calidad, sino que también cuente una historia. Nos encanta jugar
              con la luz, el color y la composición para crear fotografías que realmente resuenen.
            </p>
          </motion.div>

          {/* Sección de la Fotógrafa */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-100"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <User className="w-12 h-12 text-purple-500" />
              <h3 className="text-3xl font-bold text-pink-800">La Fotógrafa: [Tu Nombre]</h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <img
                src="https://via.placeholder.com/150/FCE7F3/9C27B0?text=Tu+Foto"
                alt="Fotógrafa del estudio"
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-pink-200"
              />
              <p className="text-gray-700 text-lg leading-relaxed">
                Hola, soy [Tu Nombre], la mente y el corazón detrás de MiMO Estudio. Mi pasión por la fotografía
                nació de la necesidad de capturar la belleza efímera de la vida. Cada clic es una oportunidad
                para congelar un sentimiento, una sonrisa, una mirada.
              </p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Con años de experiencia y un ojo entrenado para el detalle, me especializo en crear imágenes
              que no solo son visualmente atractivas, sino que también evocan emociones profundas. Me encanta
              conectar con mis clientes y entender sus historias para poder contarlas a través de mis lentes.
              ¡Espero poder capturar tu próximo gran momento!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;