import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, BookOpen, Heart, Globe, Award, Target, Lightbulb, Shield } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      icon: BookOpen,
      title: "Education Programs",
      description: "Empowering minds through quality education and learning opportunities",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Heart,
      title: "Healthcare Initiatives",
      description: "Improving health outcomes through accessible healthcare services",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100"
    },
    {
      icon: Globe,
      title: "Environmental Conservation",
      description: "Protecting our planet through sustainable practices and conservation",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Building stronger communities through infrastructure and empowerment",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every action serves our mission to create positive change"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Open and honest about our impact and operations"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative solutions to complex social challenges"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-lg">📖</span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">About Us & Programs</span>
            <span className="text-lg">💫</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white"
          >
            Our Story & 
            <span className="block text-gradient">Impact Programs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Founded in 2010, we've grown from a small group of passionate individuals into a global movement. 
            Our comprehensive programs address the most pressing challenges facing communities worldwide.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h3>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
              <p>
                What started as a simple mission to create positive change has evolved into a comprehensive 
                approach to community development. We believe in the power of sustainable solutions and 
                community-driven initiatives.
              </p>
              <p>
                Over the years, we've expanded our reach to serve communities across multiple countries, 
                always maintaining our core values of transparency, innovation, and excellence in everything we do.
              </p>
              <p>
                Our team of dedicated professionals and volunteers work tirelessly to ensure that every 
                program we implement creates lasting, positive impact for generations to come.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Core Values</h4>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="flex items-center space-x-2 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <value.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-xs font-medium text-gray-900 dark:text-white">{value.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Programs
            </h3>
            <div className="space-y-4">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start space-x-4 p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
                    <div className={`p-2 bg-gradient-to-r ${program.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                        {program.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Impact Images Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Impact in Action
          </h3>
          <ImageCarousel />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-center"
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 