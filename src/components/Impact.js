import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Globe, Heart, Award, TrendingUp, Clock } from 'lucide-react';

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const impactData = [
    {
      icon: Users,
      number: 25000,
      label: "Meals Delivered",
      suffix: "+",
      color: "from-sage-500 to-sage-600"
    },
    {
      icon: Globe,
      number: 1500,
      label: "Active Volunteers",
      suffix: "+",
      color: "from-warm-500 to-warm-600"
    },
    {
      icon: Heart,
      number: 45,
      label: "Communities Served",
      suffix: "+",
      color: "from-sage-600 to-sage-700"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Excellence Award",
      description: "Recognized for outstanding community service",
      year: "2023"
    },
    {
      icon: TrendingUp,
      title: "Growth Milestone",
      description: "Reached 50,000 lives impacted",
      year: "2023"
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description: "Launched programs in 5 new countries",
      year: "2022"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Built 25 sustainable community centers",
      year: "2022"
    }
  ];

  return (
    <section id="impact" className="section-padding bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Geometric shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6"
          >
            <span className="text-2xl">📊</span>
            <TrendingUp className="w-5 h-5 text-purple-300" />
            <span className="text-white/90 font-medium">Live Impact</span>
            <span className="text-xl">⚡</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Our Impact in
            <span className="block text-gradient">Real Time</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Every number represents a life changed, a community empowered, and a step toward 
            a more sustainable and compassionate world.
          </motion.p>
        </motion.div>

        {/* Live Impact Counters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {impactData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-sage-500 to-sage-600 rounded-full">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <motion.div
                  key={item.number}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-1"
                >
                  {item.number.toLocaleString()}{item.suffix}
                </motion.div>
                <div className="text-white/70 font-medium text-sm">
                  {item.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
          >
            Recent Achievements
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 h-full"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-sage-500 to-sage-600 rounded-lg">
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sage-300 text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"
          >
            <Clock className="w-12 h-12 text-sage-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Be Part of Our Story
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Join thousands of volunteers making a difference every day. 
              Your contribution matters.
            </p>
            <motion.button
              className="btn-primary text-lg px-10 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Mission
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact; 