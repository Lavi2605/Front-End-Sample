import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSlider = ({ testimonials, autoPlay = true, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Testimonials */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-earth-800 rounded-lg p-5 shadow-lg border border-earth-100 dark:border-earth-700">
            {/* Quote Icon */}
            <div className="flex justify-center mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Quote className="w-5 h-5 text-blue-600" />
              </div>
            </div>

            {/* Testimonial Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-earth-700 dark:text-earth-300 mb-3 leading-relaxed italic"
            >
              "{testimonials[currentIndex].text}"
            </motion.p>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Author Image */}
              <div className="w-10 h-10 rounded-full overflow-hidden mb-2 border-2 border-blue-200 dark:border-blue-700">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${testimonials[currentIndex].image})`,
                  }}
                />
              </div>

              {/* Author Details */}
              <div className="text-center">
                <h4 className="text-sm font-bold text-earth-900 dark:text-white mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 text-xs mb-1">
                  {testimonials[currentIndex].role}
                </p>
                
                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${
                        i < testimonials[currentIndex].rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-earth-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 bg-white dark:bg-earth-800 hover:bg-blue-50 dark:hover:bg-earth-700 rounded-full p-2 shadow-lg border border-earth-200 dark:border-earth-600 transition-all duration-300"
      >
        <ChevronLeft className="w-4 h-4 text-blue-600" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 bg-white dark:bg-earth-800 hover:bg-blue-50 dark:hover:bg-earth-700 rounded-full p-2 shadow-lg border border-earth-200 dark:border-earth-600 transition-all duration-300"
      >
        <ChevronRight className="w-4 h-4 text-blue-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-1">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125' 
                : 'bg-earth-300 hover:bg-blue-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider; 