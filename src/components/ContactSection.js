import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-100"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-purple-800 mb-6">Ponte en contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-pink-500" />
                <div>
                  <p className="text-gray-600 text-lg">Email:</p>
                  <a href="mailto:info@mimoestudio.com" className="text-purple-700 text-xl font-medium hover:underline">
                    info@mimoestudio.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-pink-500" />
                <div>
                  <p className="text-gray-600 text-lg">Teléfono:</p>
                  <a href="tel:+1234567890" className="text-purple-700 text-xl font-medium hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
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
          </motion.div>
          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps?q=22.1533577,-80.4244596&z=15&hl=es&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del estudio"
              className="w-full h-full"
            ></iframe>
            <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center pointer-events-none">
              <p className="text-white text-2xl font-bold">¡Visítanos!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;