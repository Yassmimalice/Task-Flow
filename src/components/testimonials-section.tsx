import React from 'react';
import { useState } from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    content: "This platform has revolutionized how we manage our projects. The intuitive interface and powerful features have significantly improved our team's productivity.",
    author: "Sarah Chen",
    role: "Project Manager at Adobe",
    avatar: "/placeholder.svg?height=80&width=80"
  },
  {
    content: "The automation features alone have saved us countless hours. It's become an essential tool for keeping our projects on track and our team aligned.",
    author: "Mark Thompson",
    role: "Director of Operations at Spotify",
    avatar: "/placeholder.svg?height=80&width=80"
  },
  {
    content: "Implementation was smooth, and the team adopted it quickly. We've seen a 40% improvement in project delivery times since switching to this platform.",
    author: "Alex Rodriguez",
    role: "Tech Lead at Netflix",
    avatar: "/placeholder.svg?height=80&width=80"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-purple-100 dark:bg-purple-900 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          What our customers say
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg transition-all duration-300 ease-in-out">
            <p className="mb-4 text-xl text-gray-600 dark:text-gray-300">{testimonials[currentIndex].content}</p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].avatar}
                alt=""
                className="h-16 w-16 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

