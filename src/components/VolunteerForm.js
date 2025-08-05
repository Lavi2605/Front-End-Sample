import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Heart, Users, Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';

const VolunteerForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const volunteerOpportunities = [
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Help connect with local communities and assess their needs.",
      duration: "2-4 hours/week"
    },
    {
      icon: Users,
      title: "Education Support",
      description: "Assist with educational programs and mentoring initiatives.",
      duration: "3-5 hours/week"
    },
    {
      icon: MapPin,
      title: "Event Coordination",
      description: "Help organize and coordinate community events and fundraisers.",
      duration: "4-6 hours/week"
    },
    {
      icon: Calendar,
      title: "Administrative Support",
      description: "Provide administrative assistance and data management support.",
      duration: "2-3 hours/week"
    }
  ];

  return (
    <section id="volunteer" className="section-padding bg-gradient-to-b from-pink-50 via-orange-50 to-yellow-50 dark:from-pink-900 dark:via-orange-900 dark:to-yellow-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-pink-300/20 to-red-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl"
        />
      </div>
      <div className="container-custom">
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 rounded-full px-6 py-3 mb-6"
          >
            <span className="text-2xl">👥</span>
            <Users className="w-5 h-5 text-pink-600" />
            <span className="text-pink-700 dark:text-pink-300 font-medium">Join Our Team</span>
            <span className="text-xl">🌟</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl font-display font-bold text-earth-900 dark:text-white mb-4"
          >
            <span className="block">🎯 Become a</span>
            <span className="block text-gradient">🤝 Volunteer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-earth-600 dark:text-earth-300 max-w-2xl mx-auto leading-relaxed"
          >
            Join our community of dedicated volunteers and make a real difference in people's lives. 
            Every contribution, no matter how small, creates lasting impact.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Volunteer Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold text-earth-900 dark:text-white mb-6">
              Volunteer Opportunities
            </h3>
            <div className="space-y-4">
              {volunteerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-earth-800 rounded-xl p-4 shadow-lg border border-earth-100 dark:border-earth-700 group-hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-r from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 rounded-full group-hover:from-pink-200 group-hover:to-orange-200 dark:group-hover:from-pink-900/50 dark:group-hover:to-orange-900/50 transition-all duration-300">
                        <opportunity.icon className="w-5 h-5 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-earth-900 dark:text-white mb-1 flex items-center">
                          {opportunity.title}
                          <span className="ml-2 text-lg">🎯</span>
                        </h4>
                        <p className="text-earth-600 dark:text-earth-300 mb-2 leading-relaxed text-sm">
                          {opportunity.description}
                        </p>
                        <div className="flex items-center space-x-2 text-pink-600 dark:text-pink-400 text-xs font-medium">
                          <Calendar className="w-3 h-3" />
                          <span>{opportunity.duration}</span>
                          <span className="text-sm">⏰</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Volunteer Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-earth-800 rounded-3xl p-8 shadow-2xl border border-earth-100 dark:border-earth-700"
            >
              <h3 className="text-2xl font-bold text-earth-900 dark:text-white mb-6">
                Join Our Volunteer Team
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-earth-900 dark:text-white mb-2 flex items-center justify-center">
                    <span className="mr-2">🎉</span>
                    Thank You!
                    <span className="ml-2">🎉</span>
                  </h4>
                  <p className="text-earth-600 dark:text-earth-300">
                    We've received your application and will contact you within 24 hours.
                  </p>
                  <div className="mt-4 text-2xl">
                    <span className="mr-2">✨</span>
                    <span className="mr-2">💖</span>
                    <span className="mr-2">🌟</span>
                    <span>💫</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-earth-700 dark:text-earth-300 mb-2 flex items-center">
                        <span className="mr-2">👤</span>
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register("firstName", { required: "First name is required" })}
                        className="input-field"
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-earth-700 dark:text-earth-300 mb-2 flex items-center">
                        <span className="mr-2">👤</span>
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register("lastName", { required: "Last name is required" })}
                        className="input-field"
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 dark:text-earth-300 mb-2 flex items-center">
                      <span className="mr-2">📧</span>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-earth-400" />
                      <input
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="input-field pl-12"
                        placeholder="Enter your email address"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 dark:text-earth-300 mb-2 flex items-center">
                      <span className="mr-2">📱</span>
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-earth-400" />
                      <input
                        type="tel"
                        {...register("phone", { required: "Phone number is required" })}
                        className="input-field pl-12"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 dark:text-earth-300 mb-2 flex items-center">
                      <span className="mr-2">🎯</span>
                      Preferred Role
                    </label>
                    <select
                      {...register("role", { required: "Please select a role" })}
                      className="input-field"
                    >
                      <option value="">Select a volunteer role</option>
                      <option value="community-outreach">🤝 Community Outreach</option>
                      <option value="education-support">📚 Education Support</option>
                      <option value="event-coordination">🎉 Event Coordination</option>
                      <option value="administrative-support">💼 Administrative Support</option>
                    </select>
                    {errors.role && (
                      <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 dark:text-earth-300 mb-2 flex items-center">
                      <span className="mr-2">💬</span>
                      Message (Optional)
                    </label>
                    <textarea
                      {...register("message")}
                      rows="4"
                      className="input-field resize-none"
                      placeholder="Tell us about your interests and why you'd like to volunteer..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <span className="mr-2">⏳</span>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <span className="mr-2">🚀</span>
                        Submit Application
                        <span className="ml-2">✨</span>
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm; 