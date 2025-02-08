import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    video: "./videos/video1.mp4",
  },
  {
    name: "Jane Smith",
    video: "./videos/video2.mp4",
  },
  {
    name: "Alice Johnson",
    video: "./videos/video3.mp4",
  },
  {
    name: "Alice Johnson",
    video: "./videos/video4.mp4",
  },
  {
    name: "Alice Johnson",
    video: "./videos/video5.mp4",
  },
];

const Testimonials = () => {
  return (
    <section className="pb-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg text-center flex 
flex-col">
              <video
               autoPlay
               loop
               muted
               className="w-full h-full rounded-t-3xl"
                >
            <source src={testimonial.video} type="video/mp4" />
              </video>
              <h3 className="text-xl font-semibold py-5">@{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;