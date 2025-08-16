import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Star } from 'lucide-react';

const ContactSection = () => {
  // Estado inicial para opiniones (ejemplo)
  const [opinions, setOpinions] = useState([
    { name: "Ana", comment: "¡Excelente atención y fotos hermosas!", rating: 5 },
    { name: "Luis", comment: "Muy profesionales y amables.", rating: 4 },
    { name: "María", comment: "Me encantó el resultado final.", rating: 5 },
  ]);

  // Calcular promedio de estrellas
  const average =
    opinions.length > 0
      ? (opinions.reduce((acc, op) => acc + op.rating, 0) / opinions.length).toFixed(1)
      : 0;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-7xl font-extrabold text-center text-purple-800 mb-12"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos <span className="text-pink-600">Ahora</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Datos de contacto y redes */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-100 flex flex-col"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-purple-800 mb-6">Ponte en contacto</h3>
            {/* ...datos de contacto y redes sociales... */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-pink-500" />
                <div>
                  <p className="text-gray-600 text-lg">Email:</p>
                  <a href="mailto:info@mimoestudio.com" className="text-purple-700 text-xl font-medium hover:underline">
                    info@mimoestudio.com
                  </a>
                </div>
              </div>
              {/* Teléfono */}
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-pink-500" />
                <div>
                  <p className="text-gray-600 text-lg">Teléfono:</p>
                  <a href="tel:+1234567890" className="text-purple-700 text-xl font-medium hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              {/* Dirección */}
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-pink-500" />
                <div>
                  <p className="text-gray-600 text-lg">Dirección:</p>
                  <p className="text-purple-700 text-xl font-medium">
                    Calle Falsa 123, Ciudad Imaginaria
                  </p>
                </div>
              </div>
            </div>
            {/* Redes sociales */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Síguenos en redes</h3>
              <div className="flex space-x-6">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-pink-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-10 h-10" />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-pink-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-10 h-10" />
                </motion.a>
              </div>
            </div>
            {/* Mapa debajo de los datos */}
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps?q=22.1533577,-80.4244596&z=15&hl=es&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del estudio"
                className="w-full h-64 rounded-2xl shadow-lg"
              ></iframe>
            </div>
          </motion.div>
          {/* Bloque de opiniones */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-100 flex flex-col"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-purple-800 mb-4">Opiniones de nuestros clientes</h3>
            {/* Promedio de estrellas */}
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold mr-2">Promedio:</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < Math.round(average) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill={i < Math.round(average) ? '#facc15' : 'none'}
                  />
                ))}
                <span className="ml-2 text-lg text-purple-700 font-bold">{average}</span>
              </div>
            </div>
            {/* Últimas 3 opiniones */}
            <div className="space-y-4 mb-6">
              {opinions.slice(-3).reverse().map((op, idx) => (
                <div key={idx} className="bg-purple-50 rounded-xl p-4 shadow flex flex-col">
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-purple-800 mr-2">{op.name}</span>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < op.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill={i < op.rating ? '#facc15' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700">{op.comment}</span>
                </div>
              ))}
            </div>
            {/* Formulario para nueva opinión (estructura básica) */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <textarea
                placeholder="Tu opinión"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                rows={3}
              />
              <div className="flex items-center gap-2">
                <span className="text-lg">Tu puntuación:</span>
                {/* Aquí irán las estrellas seleccionables */}
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 cursor-pointer text-gray-300 hover:text-yellow-400"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="bg-purple-700 text-white rounded px-4 py-2 font-semibold hover:bg-purple-800 transition"
              >
                Enviar opinión
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;