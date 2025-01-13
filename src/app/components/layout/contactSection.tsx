'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar,  MapPin, Phone, Star, Shield, Heart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100 }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2 }
  }
};

export default function ContactSection() {
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Service",
      description: "Top-rated professional service"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Book at your convenience"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Booking",
      description: "Safe and confidential process"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Care",
      description: "Tailored to your needs"
    }
  ];

  return (
    <motion.section
      className="py-24 px-4 bg-gradient-to-br from-yellow-50 to-yellow-200"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400"
            variants={itemVariants}
          >
            Book Your Experience
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Transform your moments into unforgettable memories with our premium services. 
            Let us help you create the perfect experience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-yellow-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-yellow-500 mb-4 bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-yellow-200 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>123 Business Ave, Suite 100</span>
                </div>
              </div>
            </div>
            <div>
              <motion.button
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl mb-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.button>
              <motion.button
                className="w-full border-2 border-yellow-400 text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-center text-gray-600"
          variants={itemVariants}
        >
          Premium service • 100% satisfaction guaranteed • 24/7 support
        </motion.p>
      </div>
    </motion.section>
  );
}