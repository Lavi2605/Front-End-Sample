import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Star } from 'lucide-react';

const Logo = ({ size = 'default', className = '' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <motion.div
      className={`flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="relative"
      >
        <Heart className={`${sizeClasses[size]} text-sage-600`} />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute -top-1 -right-1"
        >
          <Star className="w-3 h-3 text-warm-500" />
        </motion.div>
      </motion.div>
      <div className="flex flex-col">
        <span className="text-xl font-display font-bold text-gradient">
          Impact
        </span>
        <div className="flex items-center space-x-1">
          <Globe className="w-3 h-3 text-sage-500" />
          <span className="text-xs text-earth-600 dark:text-earth-400">Global</span>
        </div>
      </div>
      <span className="text-lg">✨</span>
    </motion.div>
  );
};

export default Logo; 