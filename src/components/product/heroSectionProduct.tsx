import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { debounce } from 'lodash';

const HeroSectionProduct = ({ onSearch }: { onSearch: (searchTerm: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSearch = useCallback(
    debounce((term) => {
      onSearch(term);
    }, 300),
    [onSearch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  // Fixed animation variants with correct easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const searchBarVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
    },
    hover: { 
      scale: 1.01,
      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.99,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    },
    focused: {
      scale: 1.02,
      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="relative h-[70vh]"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      {/* Background with smooth animation */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        variants={backgroundVariants}
      >
        <img 
          src="/product.jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
      >
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            variants={titleVariants}
          >
            Find Your Perfect Companion
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl text-gray-200"
            variants={subtitleVariants}
          >
            Discover professional companions for your social events, business meetings, and special occasions
          </motion.p>

          <motion.form 
            className="relative max-w-2xl mx-auto mt-8"
            variants={searchBarVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate={isFocused ? "focused" : "rest"}
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search for companions..."
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 text-lg"
            />
            <motion.button 
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-2 rounded-full"
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              Search
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSectionProduct;