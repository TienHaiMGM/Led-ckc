import React from 'react';

const BannerMid: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex flex-col items-center justify-center space-y-2">
      <h1 className="text-2xl font-bold">30% off perfectly printed postcards</h1>
      <p className="text-lg">And we'll even mail them for you. Plus, save 20% on custom marketing materials.</p>
      <div className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">
        Code: <span className="font-bold">VYMARKETINO</span> Ends Feb. 28
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold">Postcards</button>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold">Marketing Materials</button>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold">Postcard Mailing Services</button>
      </div>
      <p className="text-sm mt-2">Not combinable with other offers.</p>
    </div>
  );
};

export default BannerMid;