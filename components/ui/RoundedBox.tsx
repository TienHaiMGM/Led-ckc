import React from 'react';

const RoundedBox = ({ color, children }) => {
  return (
    <div className={`rounded-3xl shadow-md p-4 w-80 bg-white relative overflow-hidden flex items-center ${color}`}>
      <div className="absolute top-0 left-0 w-10 h-full"></div> {/* Dải màu */}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default RoundedBox;