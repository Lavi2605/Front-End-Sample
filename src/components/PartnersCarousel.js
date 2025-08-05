import React from 'react';
import { motion } from 'framer-motion';

const PartnersCarousel = ({ partners }) => {
  return (
    <div className="relative overflow-hidden py-6">
      {/* Enhanced Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-50/80 via-teal-50/60 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cyan-50/80 via-teal-50/60 to-transparent z-10" />
      
      {/* Scrolling Logos and People */}
      <motion.div
        animate={{ x: [0, -50] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex space-x-20 items-center"
      >
        {/* Duplicate logos and people for seamless loop */}
        {[...partners, ...partners].map((partner, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex-shrink-0 group"
          >
            <div className="flex flex-col items-center space-y-3">
              {/* Logo */}
              <div 
                className="w-20 h-20 md:w-24 md:h-24 bg-contain bg-center bg-no-repeat filter group-hover:drop-shadow-lg transition-all duration-300"
                style={{
                  backgroundImage: `url(${partner.logo})`,
                }}
              />
              
              {/* People Image */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-xl border-4 border-emerald-200 dark:border-emerald-700 group-hover:border-teal-300 dark:group-hover:border-teal-600 transition-all duration-300">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${partner.people})`,
                  }}
                />
              </div>
              
              {/* Partner Name */}
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {partner.name}
                </p>
                <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-1 rounded-full group-hover:w-10 transition-all duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnersCarousel; 