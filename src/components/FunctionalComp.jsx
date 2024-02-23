import React from 'react';
//import { useState } from 'react'; // tambahkan ini jika Anda akan menggunakan state
import rouletteImage from '../assets/roulette.jpeg'; // pastikan path gambar yang benar

const FunctionalComp = () => {
  // tambahkan ini jika Anda akan menggunakan state
  // const [stateName, setStateName] = useState(initialStateValue);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
      <div className="flex w-full max-w-xs p-4 bg-white">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <a href="#" className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100 hover:text-gray-300">
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </span>
              <span className="ml-3">Dashboard</span>
              <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">3</span>
            </a>
          </li>
          {/* Tambahkan item menu lainnya di sini */}
        </ul>
      </div>
    </div>
  );
};

export default FunctionalComp;

