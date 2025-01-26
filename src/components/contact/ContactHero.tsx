import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Users, Phone } from 'lucide-react';

const ContactHero = () => {
  const featureItems = [
    {
      icon: MessageCircle,
      text: "24/7 Support"
    },
    {
      icon: Users,
      text: "Dedicated Team"
    },
    {
      icon: Phone,
      text: "Quick Response"
    },
    {
      icon: Sparkles,
      text: "Expert Solutions"
    }
  ];

  return (
    <motion.section 
      className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}/>
        
        {/* Animated circles decoration */}
        <motion.div 
          className="absolute -left-16 -top-16 w-64 h-64 bg-yellow-200 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -right-16 -bottom-16 w-64 h-64 bg-yellow-500 rounded-full opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Main content */}
        <motion.div 
          className="text-center relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ 
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="bg-white/30 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              👋 We're here to help!
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Have questions or want to get in touch? We'd love to hear from you.
            Our team is ready to assist you with any inquiries.
          </p>

          {/* Feature items */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {featureItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <item.icon className="w-6 h-6 text-gray-800" />
                  <span className="text-sm font-medium text-gray-800">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-1.5 h-16 bg-white/30 rounded-full relative">
              <div className="absolute top-0 left-0 right-0 h-4 bg-yellow-500 rounded-full animate-slide" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactHero;