import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Heart, 
  MessageCircle, 
  Share2, 
  Phone, 
  Mail, 
  MapPin,
  X
} from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      name: 'Donate Now',
      icon: Heart,
      color: 'bg-red-500 hover:bg-red-600',
      href: '#donate',
      description: 'Make a difference today'
    },
    {
      name: 'Contact Us',
      icon: MessageCircle,
      color: 'bg-blue-500 hover:bg-blue-600',
      href: '#contact',
      description: 'Get in touch with us'
    },
    {
      name: 'Share Impact',
      icon: Share2,
      color: 'bg-green-500 hover:bg-green-600',
      href: '#share',
      description: 'Spread the word'
    },
    {
      name: 'Call Us',
      icon: Phone,
      color: 'bg-purple-500 hover:bg-purple-600',
      href: 'tel:+1234567890',
      description: 'Speak with our team'
    },
    {
      name: 'Email Us',
      icon: Mail,
      color: 'bg-orange-500 hover:bg-orange-600',
      href: 'mailto:info@ngo.org',
      description: 'Send us a message'
    },
    {
      name: 'Visit Us',
      icon: MapPin,
      color: 'bg-teal-500 hover:bg-teal-600',
      href: '#location',
      description: 'Find our location'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 mb-4 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.name}
                href={action.href}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 p-3 ${action.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group`}
              >
                <div className="relative">
                  <action.icon className="w-5 h-5" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {action.description}
                  </div>
                </div>
                <span className="font-medium">{action.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`p-4 rounded-full shadow-lg transition-all duration-200 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700 text-white' 
            : 'bg-emerald-600 hover:bg-emerald-700 text-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton; 