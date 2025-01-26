'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';

// Dynamically load Typewriter to reduce initial load time
const Typewriter = dynamic(() => import('react-typewriter-effect'), {
  ssr: false
});

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img-home.jpg"
          alt="Hero Background"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <motion.div variants={itemVariants} className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Premium Companion Services
          </h1>
          
          <div className="h-16 mb-8">
            <Typewriter
              options={{
                strings: [
                  'Experience Luxury',
                  'Create Memories',
                  'Discover Excellence'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                className: "text-xl md:text-2xl text-white/90"
              }}
            />
          </div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Elevate your experience with our premium companion services. 
            We provide exceptional companionship tailored to your preferences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;