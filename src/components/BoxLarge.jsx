// BoxLarge.jsx
import React from 'react';

const BoxLarge = ({ className }) => {
  return (
    <div className={`bg-purple-200 p-8 rounded-lg shadow-xl ${className}`}>
      <p className="text-lg text-purple-800">Box Large</p>
    </div>
  );
};

export default BoxLarge;

