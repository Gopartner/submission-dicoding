import React from 'react';

const GridComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-blue-500 text-white p-4 rounded-lg">Item 1</div>
      <div className="bg-green-500 text-white p-4 rounded-lg">Item 2</div>
      <div className="bg-yellow-500 text-white p-4 rounded-lg">Item 3</div>
      <div className="bg-red-500 text-white p-4 rounded-lg col-span-3">Item 4</div>
    </div>
  );
};

export default GridComponent;

