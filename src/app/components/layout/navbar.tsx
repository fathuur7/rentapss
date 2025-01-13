'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const navItems = [
    { name: 'Home', icon: null },
    { name: 'About', icon: null },
    { name: 'Products', icon: null },
    { name: 'Contact', icon: null },
  ];

  return (
    <motion.header
      className="bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-lg w-full py-4 px-6 sticky top-0 z-40"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div variants={textVariants}>
          <a href="#" className="flex items-center">
            <Image
              src="/logo-hitam.jpg"
              alt="Logo"
              width={100}
              height={50}
              className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden md:flex items-center space-x-8"
          variants={containerVariants}
        >
          {navItems.map((item, index) => (
            <motion.li key={index} variants={textVariants}>
              <a
                href="#"
                className="text-gray-800 hover:text-black relative group font-semibold text-lg tracking-wide flex items-center gap-2"
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Icons */}
        <motion.div 
          className="hidden md:flex items-center space-x-6"
          variants={containerVariants}
        >
          <motion.button
            variants={textVariants}
            className="p-2 hover:bg-yellow-500 rounded-full transition-colors duration-200"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-6 h-6" />
          </motion.button>
          <motion.a
            href="#"
            variants={textVariants}
            className="p-2 hover:bg-yellow-500 rounded-full transition-colors duration-200"
          >
            <User className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            variants={textVariants}
            className="p-2 hover:bg-yellow-500 rounded-full transition-colors duration-200 relative"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden z-50 p-2 hover:bg-yellow-500 rounded-full transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          variants={textVariants}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed inset-0 bg-gradient-to-b from-yellow-400 to-yellow-300 md:hidden pt-24 px-6"
            >
              <ul className="flex flex-col space-y-6 items-center">
                {[...navItems, { name: 'Search', icon: Search }, { name: 'Profile', icon: User }, { name: 'Cart', icon: ShoppingCart }].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={textVariants}
                    className="w-full"
                  >
                    <a
                      href="#"
                      className="text-gray-800 text-xl font-semibold flex items-center justify-center gap-3 py-3 px-4 hover:bg-yellow-500 rounded-xl transition-all duration-200 transform hover:scale-105"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && <item.icon className="w-6 h-6" />}
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-24 px-4 z-50"
              onClick={() => setIsSearchOpen(false)}
            >
              <motion.div
                className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center p-4 bg-yellow-400">
                  <Search className="w-6 h-6 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 bg-transparent outline-none text-gray-800 placeholder-gray-600"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 hover:bg-yellow-500 rounded-full transition-colors duration-200"
                    aria-label='Close'
                  >
                    <X className="w-6 h-6"/>X
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;