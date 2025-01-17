// src/components/about/AboutHeroSection.jsx
'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, Star } from 'lucide-react';

const AboutHeroSection = () => {
  // Use state to handle client-side rendering of random elements
  const [starPositions, setStarPositions] = useState([]);
  
  // Move random calculations to useEffect
  useEffect(() => {
    const positions = Array.from({ length: 5 }).map(() => ({
      top: `${Math.floor(Math.random() * 80)}%`,
      left: `${Math.floor(Math.random() * 90)}%`,
    }));
    setStarPositions(positions);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-32"
    >
      {/* Static decorative elements */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={floatAnimation}
        className="absolute top-12 left-1/4 text-yellow-200"
      >
        <Cloud size={48} />
      </motion.div>
      
      {/* Client-side rendered stars */}
      {starPositions.map((position, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          variants={floatAnimation}
          className="absolute text-yellow-200"
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          <Star size={24} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-3 bg-yellow-500/20 rounded-full text-gray-800 text-lg font-medium">
              Welcome to Our Story
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Your Perfect{' '}
            <span className="relative">
              Companion
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-3 bg-yellow-300/30 -z-10"
              />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12">
            Creating meaningful connections and unforgettable moments,
            <br />one experience at a time.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-4 bg-yellow-500/20 text-gray-900 rounded-full font-medium hover:bg-yellow-500/30 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-50" />
      
      {/* Static decorative circles */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default AboutHeroSection;