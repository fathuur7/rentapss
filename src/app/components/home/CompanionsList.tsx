'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Heart, Phone, MessageCircle, Star } from 'lucide-react';

// Enhanced container variants with smoother transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2
    }
  }
};

// Enhanced item variants with spring animation
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Enhanced image variants with parallax effect
const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 1.1,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Button hover animation variants
const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
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

export default function CompanionsList({ data }: CompanionProps,) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.section
      className="bg-gradient-to-br from-yellow-50 to-yellow-200 py-12 sm:py-24 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,
        margin: "-100px 0px"
      }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-8 sm:mb-16" 
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400">
            Meet Our Companions
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our carefully selected companions who provide exceptional experiences and unforgettable moments.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-yellow-200"
              onHoverStart={() => setHoveredId(index)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2 h-64 sm:h-72 md:h-80 overflow-hidden">
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

                <div className="p-4 sm:p-6 md:p-8 md:w-1/2 relative">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{item.stageName}</h3>
                    <motion.button
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="text-yellow-500 transform-gpu"
                    >
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  </div>

                  <div className="flex items-center mb-3 sm:mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          star <= (item.rating || 5)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3">{item.testimony}</p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-auto">
                    <motion.button
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-medium text-sm sm:text-base w-full sm:w-auto transform-gpu"
                    >
                      <Phone className="w-4 h-4" />
                      Contact
                    </motion.button>
                    <motion.button
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center justify-center gap-2 border-2 border-yellow-400 text-gray-800 px-4 py-2 rounded-full font-medium text-sm sm:text-base w-full sm:w-auto transform-gpu"
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