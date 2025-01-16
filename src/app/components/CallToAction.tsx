import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Find Your Perfect Companion?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our platform today and discover amazing companions for your next event
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Get Started Now
        </button>
      </div>
    </motion.section>
  );
};

export default CallToAction;