'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Heart, Phone, MessageCircle, Star } from 'lucide-react';

// Simplified container variant for smoother scroll reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15
    }
  }
};

// Simplified item variant for clean scroll reveal
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Subtle image reveal
const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 1.05
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

interface CompanionProps {
  data: {
    stageName: string;
    phone: string;
    testimony: string;
    image: string;
    rating?: number;
  }[];
}

export default function CompanionsList({ data }: CompanionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.section
      className="bg-gradient-to-br from-yellow-50 to-yellow-200 py-24 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,
        margin: "-100px 0px -100px 0px" // Starts animation slightly before element comes into view
      }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16" 
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400">
            Meet Our Companions
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our carefully selected companions who provide exceptional experiences and unforgettable moments.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-yellow-200"
              onHoverStart={() => setHoveredId(index)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2 h-72 md:h-80 overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    className="h-full"
                  >
                    <Image
                      src={item.image || '/placeholder.png'}
                      alt={item.stageName}
                      width={400}
                      height={400}
                      priority={index < 2}
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  
                  <AnimatePresence>
                    {hoveredId === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"
                      />
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-8 md:w-1/2 relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{item.stageName}</h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-yellow-500"
                    >
                      <Heart className="w-6 h-6" />
                    </motion.button>
                  </div>

                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= (item.rating || 5)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3">{item.testimony}</p>

                  <div className="flex items-center gap-2
                  mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      Contact
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 border-2 border-yellow-400 text-gray-800 px-4 py-2 rounded-full font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}