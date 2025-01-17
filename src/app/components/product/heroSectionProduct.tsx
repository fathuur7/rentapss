import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { debounce } from 'lodash';

const HeroSectionProduct = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Create a debounced search function
  const debouncedSearch = useCallback(
    debounce((term) => {
      onSearch(term);
    }, 300), // 300ms delay
    [onSearch]
  );

  // Clear debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Immediate search on form submit
    onSearch(searchTerm);
  };

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Debounced search on input change
    debouncedSearch(value);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const searchBarVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div 
      className="relative h-[60vh]" // Adjusted height
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src="/product.jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          variants={containerVariants}
        >
          {/* Title */}
          <motion.h1 
            className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            variants={itemVariants}
          >
            Find Your Perfect Companion
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="mb-8 text-lg sm:text-xl text-gray-200"
            variants={itemVariants}
          >
            Discover professional companions for your social events, business meetings, and special occasions
          </motion.p>

          {/* Search Bar */}
          <motion.form 
            className="relative max-w-2xl mx-auto"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            initial="rest"
            variants={searchBarVariants}
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search for companions..."
              value={searchTerm}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg text-lg"
            />
            <motion.button 
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black to-gray-800 text-white px-6 py-2 rounded-full hover:bg-gradient-to-r hover:from-black hover:to-gray-800 transition-colors"
            >
              Search
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSectionProduct;
