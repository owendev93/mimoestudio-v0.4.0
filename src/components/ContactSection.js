
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
      const { error } = await supabase
        .from('comentarios')
        .insert([newOpinion]);
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
        {/* ... contenido omitido para brevedad ... */}
        <div className="space-y-4 mb-6">
          {opinions.slice(-3).reverse().map((op, idx) => (
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
      </div>
    </section>
  );
};

export default ContactSection;
