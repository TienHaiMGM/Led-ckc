import { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    image: '/images/Banner1.jpg',
    alt: 'Banner 1',
  },
  {
    id: 2,
    image: '/images/Banner2.jpg',
    alt: 'Banner 2',
  },
  {
    id: 3,
    image: '/images/Banner3.jpg',
    alt: 'Banner 3',
  },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change banner every 5 seconds
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div className="relative mx-auto w-full max-w-7xl h-[60vh] overflow-hidden my-4 z-0">
        <div className="absolute inset-0 flex items-center justify-between z-10">
          <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        onClick={prevSlide}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        &lt;
        </span>
      </button>
          <button
           onClick={nextSlide}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        &gt;
        </span>
      </button>
        </div>
        <div className="w-full h-full relative">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Banner;