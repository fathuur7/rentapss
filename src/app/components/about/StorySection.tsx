// src/components/about/StorySection.jsx
'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Target, Clock, Shield } from 'lucide-react';
import React from 'react';

const statsData = [
  { icon: Users, value: '10K+', label: 'Happy Users' },
  { icon: Clock, value: '24/7', label: 'Support' },
  { icon: Target, value: '98%', label: 'Success Rate' },
  { icon: Shield, value: '100%', label: 'Secure' }
];

export const StorySection = () => {
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

  return (
    <div className="space-y-16">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white/50 backdrop-blur-sm p-4 rounded-xl text-center"
          >
            <div className="flex justify-center mb-2">
              <stat.icon className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Story Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Our Story Card */}
        <motion.div 
          variants={fadeInUp}
          className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent rounded-2xl" />
          
          <div className="relative">
            <div className="mb-6 flex items-center">
              <span className="inline-block p-3 bg-yellow-100 rounded-lg mr-4">
                <ArrowRight className="w-6 h-6 text-yellow-600" />
              </span>
              <div className="h-px flex-grow bg-gradient-to-r from-yellow-200 to-transparent" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
              Our Story
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Starting from a simple idea to connect people, we've evolved into a trusted platform
              that facilitates genuine connections and memorable experiences. Our journey is built
              on the foundation of trust, safety, and quality service.
            </p>

            <motion.button 
              whileHover={{ x: 5 }}
              className="flex items-center text-yellow-600 font-medium group"
            >
              Learn More 
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* Our Mission Card */}
        <motion.div 
          variants={fadeInUp}
          className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent rounded-2xl" />
          
          <div className="relative">
            <div className="mb-6 flex items-center">
              <span className="inline-block p-3 bg-rose-100 rounded-lg mr-4">
                <Heart className="w-6 h-6 text-rose-600" />
              </span>
              <div className="h-px flex-grow bg-gradient-to-r from-rose-200 to-transparent" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
              Our Mission
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              We're dedicated to creating a safe and enriching environment where meaningful
              connections flourish. Our platform ensures every interaction is respectful,
              professional, and memorable.
            </p>

            <motion.button 
              whileHover={{ x: 5 }}
              className="flex items-center text-rose-600 font-medium group"
            >
              Learn More 
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};