
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Star } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { supabase } from '../supabaseClient';

const ContactSection = () => {
  const [opinions, setOpinions] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const loadOpinions = async () => {
    try {
      const { data, error } = await supabase
        .from('comentarios')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      if (error) throw error;
      setOpinions(data);
    } catch (err) {
      console.error('Error al cargar opiniones:', err.message);
    }
  };

  useEffect(() => {
    loadOpinions();
  }, []);

  const average =
    opinions.length > 0
      ? (opinions.reduce((acc, op) => acc + op.puntuacion, 0) / opinions.length).toFixed(1)
      : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) return;

    const newOpinion = {
      nombre: name.trim(),
      descripcion: comment.trim(),
      puntuacion: rating,
    };

    try {
      const { error } = await supabase.from('comentarios').insert([newOpinion]);
      if (error) throw error;

      setName('');
      setComment('');
      setRating(0);
      setHoverRating(0);
      await loadOpinions();
    } catch (err) {
      console.error('Error al enviar opinión:', err.message);
      alert('No se pudo enviar la opinión. Intenta nuevamente.');
    }
  };

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
          <div className="flex flex-col h-full">
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-100 flex flex-col"
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
                    <a className="text-purple-700 text-xl font-medium hover:underline">
                      +53 5 8525259
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <SiWhatsapp className="w-8 h-8 text-pink-500" />
                  <div>
                    <p className="text-gray-600 text-lg">Whatsapp:</p>
                    <a href="https://wa.me/+5358525259" className="text-purple-700 text-xl font-medium hover:underline">
                      +53 5 8525259
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
                    href="https://www.instagram.com/mimo_estudiofotografico/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-pink-500 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-10 h-10" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=61551011192876"
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
            <div className="mt-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">Ubicación</h3>
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
          </div>

          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-100 flex flex-col h-full"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-purple-800 mb-4">Opiniones de nuestros clientes</h3>
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
            <div className="space-y-4 mb-6">
              {opinions.slice(0, 4).map((op, idx) => (
                <div key={idx} className="bg-purple-50 rounded-xl p-4 shadow flex flex-col">
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-purple-800 mr-2">{op.nombre}</span>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < op.puntuacion ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill={i < op.puntuacion ? '#facc15' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700">{op.descripcion}</span>
                </div>
              ))}
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Tu nombre"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <textarea
                placeholder="Tu opinión"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                rows={3}
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
              <div className="flex items-center gap-2">
                <span className="text-lg">Tu puntuación:</span>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 cursor-pointer transition-colors duration-150 ${
                      (hoverRating || rating) > i ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill={(hoverRating || rating) > i ? '#facc15' : 'none'}
                    onMouseEnter={() => setHoverRating(i + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="bg-purple-700 text-white rounded px-4 py-2 font-semibold hover:bg-purple-800 transition"
                disabled={!name.trim() || !comment.trim() || rating === 0}
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
