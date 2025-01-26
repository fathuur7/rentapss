'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Map, Languages, Theater, Clock, Heart, Star } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.2 }
  }
};

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    rotateX: -30,
    y: 50,
    scale: 0.8
  },
  visible: (index: number) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: index * 0.1
    }
  }),
  hover: {
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
    z: 50,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30
    }
  }
};

const services = [
  {
    icon: Users,
    title: "Social Events Companionship",
    description: "Professional companionship for parties, weddings, and social gatherings",
    features: ["Experienced companions", "Dress code adherence", "Social etiquette"]
  },
  {
    icon: Briefcase,
    title: "Corporate Functions",
    description: "Business event accompaniment and networking support",
    features: ["Professional demeanor", "Business etiquette", "Multilingual options"]
  },
  {
    icon: Map,
    title: "Tourism Guide",
    description: "Local expertise and guided tour experiences",
    features: ["Local knowledge", "Customized routes", "Cultural insights"]
  },
  {
    icon: Languages,
    title: "Language Exchange",
    description: "Practice conversations in multiple languages",
    features: ["Native speakers", "Cultural exchange", "Flexible learning"]
  },
  {
    icon: Theater,
    title: "Cultural Events",
    description: "Accompaniment to museums, theaters, and cultural venues",
    features: ["Art knowledge", "Event planning", "Cultural expertise"]
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Available for both short-term and long-term arrangements",
    features: ["24/7 availability", "Advanced booking", "Emergency requests"]
  }
];

export default function ServiceSection() {
  return (
    <motion.section
      className="py-24 px-4 bg-gradient-to-br from-yellow-50 to-yellow-200 perspective-1000 service-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto"  >
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <h2 id="services" className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400" >
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our range of professional companionship services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-yellow-200 transform-gpu preserve-3d"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                      <Icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl flex items-center justify-center gap-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Heart className="w-5 h-5" />
                      <span>Book Now</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}