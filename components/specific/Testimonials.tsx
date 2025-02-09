"use client"
import React, { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    name: "Khách hàng 1",
    video: "/videos/video1.mp4",
    thumbnail: "/images/banghieu.jpg"
  },
  {
    name: "Khách hàng 2",
    video: "/videos/video2.mp4",
    thumbnail: "/images/chunoi.jpg"
  },
  {
    name: "Khách hàng 3",
    video: "/videos/video3.mp4",
    thumbnail: "/images/hopden.jpg"
  },
  {
    name: "Khách hàng 4",
    video: "/videos/video4.mp4",
    thumbnail: "/images/bienquangcao.jpg"
  },
  {
    name: "Khách hàng 5",
    video: "/videos/video5.mp4",
    thumbnail: "/images/banghieu.jpg"
  }
];

const VideoCard = ({ video, thumbnail, name, index }: { 
  video: string; 
  thumbnail: string; 
  name: string;
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(error => {
              console.log("Video autoplay failed:", error);
            });
            setIsPlaying(true);
          } else {
            videoElement.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
      videoElement.pause();
    };
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(error => {
          console.log("Video play failed:", error);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div 
        className="aspect-w-9 aspect-h-16 relative cursor-pointer"
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          poster={thumbnail}
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <svg 
              className="w-16 h-16 text-white opacity-80" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Video về sản phẩm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <VideoCard
              key={index}
              video={testimonial.video}
              thumbnail={testimonial.thumbnail}
              name={testimonial.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
