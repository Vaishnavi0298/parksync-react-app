import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 border-t border-gray-300">
      <div className="text-gray-600">Showing data 1 to 8 of 256K entries</div>
      <div className="flex items-center space-x-2">
        <button className="px-2 py-1 text-gray-500 border border-gray-300 rounded">1</button>
        <button className="px-2 py-1 text-gray-500 border border-gray-300 rounded">2</button>
        <button className="px-2 py-1 text-gray-500 border border-gray-300 rounded">3</button>
        
        <button className="px-2 py-1 text-gray-500 border border-gray-300 rounded">40</button>
      </div>
    </div>
  );
};

export default Pagination;
