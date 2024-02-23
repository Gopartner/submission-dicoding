import React from 'react';
import foto from '../assets/profile.jpg'; // Impor foto dengan menggunakan jalur relatif

const CardFoto = ({ title, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
    {/* Gunakan variabel foto */}
      <img className="w-full" src={foto} alt="Gambar" />
  
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default CardFoto;

