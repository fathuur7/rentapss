'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have a question or want to work together? Leave us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="bg-yellow-400 p-3 rounded-full">
                <Phone className="w-6 h-6 text-gray-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="bg-yellow-400 p-3 rounded-full">
                <Mail className="w-6 h-6 text-gray-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="bg-yellow-400 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-gray-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">123 Business Street, City, Country</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-200"
        >
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="group"
            >
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 bg-gray-50"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 bg-gray-50"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 bg-gray-50"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 bg-gray-50"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center space-x-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactForm;