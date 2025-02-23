import React, { useState, useEffect } from 'react';
import Profile from "../assets/profile.png"

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Cooper",
      company: "TechGrowth Inc.",
      role: "CEO",
      testimonial: "AspiVision Solutions transformed our online presence completely. Their attention to detail and technical expertise helped us increase our conversion rate by 45% within three months.",
      image: "/api/placeholder/64/64"
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      company: "EcoSmart Solutions",
      role: "Marketing Director",
      testimonial: "Working with AspiVision was a game-changer for our brand. They understood our vision perfectly and delivered a website that exceeded our expectations.",
      image: "/api/placeholder/64/64"
    },
    {
      id: 3,
      name: "Sarah Chen",
      company: "Global Trade Partners",
      role: "Operations Manager",
      testimonial: "The e-commerce platform built by AspiVision helped us expand to international markets seamlessly. Their support team is responsive and always ready to help.",
      image: "/api/placeholder/64/64"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-sm">
      <div className="max-w-3xl mx-auto">        
        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`absolute w-full transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={Profile} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-100'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;