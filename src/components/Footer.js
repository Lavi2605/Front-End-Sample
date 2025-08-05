import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    "About Us": [
      { name: "Our Mission", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Our Impact", href: "#" },
      { name: "Careers", href: "#" }
    ],
    "Programs": [
      { name: "Community Outreach", href: "#" },
      { name: "Education Support", href: "#" },
      { name: "Health Initiatives", href: "#" },
      { name: "Environmental Projects", href: "#" }
    ],
    "Get Involved": [
      { name: "Volunteer", href: "#volunteer" },
      { name: "Donate", href: "#" },
      { name: "Partner With Us", href: "#" },
      { name: "Events", href: "#" }
    ],
    "Resources": [
      { name: "Annual Reports", href: "#" },
      { name: "News & Updates", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact Us", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-earth-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="footer-pattern" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="10" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="40" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23footer-pattern)"/></svg>')`
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <Logo size="large" className="mb-4" />
                <p className="text-earth-300 leading-relaxed mb-4 max-w-md text-sm">
                  Empowering communities through sustainable initiatives, education, and compassionate action. 
                  Together, we create lasting positive change.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-earth-300 text-sm">
                    <Mail className="w-4 h-4 text-sage-400" />
                    <span>hello@impactngo.org</span>
                  </div>
                  <div className="flex items-center space-x-2 text-earth-300 text-sm">
                    <Phone className="w-4 h-4 text-sage-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-earth-300 text-sm">
                    <MapPin className="w-4 h-4 text-sage-400" />
                    <span>123 Impact Street, Community City, CC 12345</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-base font-bold text-white mb-3">
                  {category}
                </h3>
                <ul className="space-y-1">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-earth-300 hover:text-sage-400 transition-colors duration-300 text-sm"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-earth-700 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-earth-400 text-xs">
              © 2024 Impact NGO. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-earth-800 hover:bg-sage-600 rounded-full transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-earth-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-sage-600 hover:bg-sage-700 rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 