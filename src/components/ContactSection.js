
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Star } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

import { supabase } from "../supabaseClient";

const ContactSection = () => {
  const [opinions, setOpinions] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Cargar opiniones desde Supabase
  const loadOpinions = async () => {
    try {
      const { data, error } = await supabase
        .from("opinions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4);

      if (error) throw error;
      setOpinions(data);
    } catch (err) {
      console.error("Error al cargar opiniones:", err);
    }
  };

  useEffect(() => {
    loadOpinions();
  }, []);

  // Calcular promedio
  const average =
    opinions.length > 0
      ? (opinions.reduce((acc, op) => acc + op.rating, 0) / opinions.length).toFixed(1)
      : 0;

  // Enviar nueva opinión a Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) return;

    const newOpinion = { name: name.trim(), comment: comment.trim(), rating };

    try {
      const { error } = await supabase
        .from("opinions")
        .insert([newOpinion]);

      if (error) throw error;

      setName('');
      setComment('');
      setRating(0);
      setHoverRating(0);

      await loadOpinions();
    } catch (err) {
      console.error("Error al enviar opinión:", err);
      alert("No se pudo enviar la opinión. Intenta nuevamente.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* ... encabezado y contacto ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ... columna izquierda ... */}

          {/* Columna derecha: Opiniones */}
          <motion.div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-100 flex flex-col h-full">
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

            {/* Últimas 4 opiniones */}
            <div className="space-y-4 mb-6">
              {opinions.map((op, idx) => (
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

            {/* Formulario */}
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
