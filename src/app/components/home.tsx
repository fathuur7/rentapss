'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroSection from './heroSection';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Companion",
      text: "Professional companion for social events and gatherings",
      image: "/api/placeholder/300/300"
    },
    {
      name: "James K.",
      role: "Event Partner",
      text: "Experienced in corporate events and formal occasions",
      image: "/api/placeholder/300/300"
    }
  ];

  const services = [
    "Social Events Companionship",
    "Corporate Functions",
    "Tourism Guide",
    "Language Exchange",
    "Cultural Events"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <motion.section 
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600">Professional companionship services for various occasions</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="bg-gray-100 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            Our Companions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="object-cover h-64 md:h-auto md:w-1/2"
                  />
                  <div className="p-6 md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.role}</p>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            variants={itemVariants}
          >
            Book a Companion
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            Contact us to arrange a meeting with one of our professional companions
          </motion.p>
          <motion.button 
            className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            variants={itemVariants}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;