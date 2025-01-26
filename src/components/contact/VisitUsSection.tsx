import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import Maps from '../about/map/maps';

const VisitUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const locationDetails = [
    {
      icon: MapPin,
      title: "Address",
      info: "123 Business Street, Downtown",
      subInfo: "New York, NY 10001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Monday - Friday: 9AM - 6PM",
      subInfo: "Saturday: 10AM - 4PM"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (234) 567-8900",
      subInfo: "Toll Free: 1-800-8723-2322"
    },
    {
      icon: Mail,
      title: "Email",
      info: "kopisusu8ip@gmail.com",
      subInfo: "support@rentcompanion.com"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Visit Our Office
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Come experience our welcoming space in the heart of the city. 
            We're easily accessible and always ready to serve you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location Info Cards */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Location Details
            </h3>
            
            <div className="space-y-6">
              {locationDetails.map((detail, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-yellow-400 rounded-xl">
                    <detail.icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{detail.title}</h4>
                    <p className="text-gray-600">{detail.info}</p>
                    <p className="text-gray-500 text-sm">{detail.subInfo}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="mt-8 w-full bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center space-x-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Directions</span>
              <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>

          {/* Map Container */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 rounded-2xl transform rotate-3 scale-[1.02]" />
            <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Replace this div with your actual map component */}
              <div className="w-full h-full min-h-[400px] bg-gray-100 p-1">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-gray-400 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 overflow-hidden">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} />
                    <Maps/> 
                  </div>
                  {/* <span className="font-medium">
                  </span> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Banner */}
        <motion.div 
          className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-8 text-center shadow-lg"
          variants={itemVariants}
        >
          <p className="text-gray-800 font-medium">
            Free parking available for all visitors. 
            Easily accessible by public transportation - Just 5 minutes walk from Central Station.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VisitUsSection;