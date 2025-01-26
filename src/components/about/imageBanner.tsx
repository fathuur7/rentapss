'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Users, Heart, Sparkles, ArrowRight } from 'lucide-react';

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

export const ImageBanner = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "50K+" },
    { icon: Heart, label: "Positive Reviews", value: "95%" },
    { icon: Sparkles, label: "Success Rate", value: "98%" }
  ];

  return (
    <motion.div 
      variants={fadeInUp}
      className="relative rounded-2xl overflow-hidden mb-16 mt-8" 
    >
      {/* Main banner section */}
      <div className="relative h-[500px] md:h-[600px] group">
        <Image
          src="/aboutImage.jpg"
          alt="About Us Banner"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        
        {/* Floating decorative elements */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={floatAnimation}
          className="absolute top-20 right-20 text-yellow-300/80"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>

        {/* Main content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl"
          >
            <div className="mb-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium"
              >
                Our Impact
              </motion.span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Creating{' '}
              <span className="relative inline-block">
                Connections
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-2 bg-yellow-300/30"
                />
              </span>
            </h3>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Building bridges between people, one moment at a time.
              Transform your connections into lasting relationships.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <stat.icon className="w-6 h-6 text-yellow-300 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="group flex items-center gap-2 px-6 py-3 bg-yellow-300/20 hover:bg-yellow-300/30 backdrop-blur-sm rounded-full text-yellow-300 font-medium transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};