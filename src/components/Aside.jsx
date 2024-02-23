import React from 'react';
import rouletteImage from '../assets/roulette.jpeg';

const Aside = () => {
  return (
    <aside className="w-full md:w-1/2 p-4">
      <div className="bg-gray-100 p-4">
        <img src={rouletteImage} alt="Roulette" className="w-full mb-4" />
        {/* Tambahkan konten lainnya di sini */}
      </div>
    </aside>
  );
};

export default Aside;

