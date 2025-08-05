import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/PartnersSection';
import GallerySection from './components/GallerySection';
import Sidebar from './components/Sidebar';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen isLoading={isLoading} />}
      </AnimatePresence>
      
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-earth-900 text-white' : 'bg-earth-50 text-earth-900'
      }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="testimonials">
            <TestimonialsSection />
          </section>
          <section id="partners">
            <PartnersSection />
          </section>
          <section id="gallery">
            <GallerySection />
          </section>
          <section id="impact">
            <Impact />
          </section>
          <section id="volunteer">
            <VolunteerForm />
          </section>
          <section id="donate">
            <div className="py-16 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
              <div className="container-custom text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Make a Donation</h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                  Your generous donation helps us continue our mission and create lasting impact in communities worldwide.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Donate Now
                </motion.button>
              </div>
            </div>
          </section>
          <section id="partner">
            <div className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
              <div className="container-custom text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Become a Partner</h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                  Join us in creating positive change. Partner with us to amplify our impact and reach more communities.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Partner With Us
                </motion.button>
              </div>
            </div>
          </section>
          <section id="events">
            <div className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20">
              <div className="container-custom text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Events</h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Join us at our upcoming events and be part of the change. 
                  From fundraisers to community outreach programs, there's something for everyone.
                </p>
              </div>
            </div>
          </section>
          <section id="reports">
            <div className="py-16 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20">
              <div className="container-custom text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Reports & Analytics</h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Transparency is key to our mission. Explore our detailed reports, 
                  impact assessments, and financial statements.
                </p>
              </div>
            </div>
          </section>
          <section id="blog">
            <div className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
              <div className="container-custom text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Blog</h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Stay updated with our latest news, stories from the field, 
                  and insights from our team and partners.
                </p>
              </div>
            </div>
          </section>
          <section id="media">
            <div className="py-16 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
              <div className="container-custom text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Media & Press</h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Access our press releases, media kit, and coverage of our work 
                  in various news outlets and publications.
                </p>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
              <div className="container-custom text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Get in touch with us. We'd love to hear from you and answer any questions 
                  about our programs, partnerships, or how you can get involved.
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <FloatingActionButton />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App; 