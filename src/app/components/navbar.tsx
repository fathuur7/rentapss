'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navItems = ['Home', 'About', 'Contact', 'Products', 'Cart'];

  return (
    <motion.header
      className="bg-yellow-400 shadow-lg w-full py-4 px-6 sticky top-0 z-40"
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
              className="rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </a>
        </motion.div>

        <motion.ul
          className="hidden md:flex space-x-8"
          variants={containerVariants}
        >
          {navItems.map((item, index) => (
            <motion.li key={index} variants={textVariants}>
              <a
                href="#"
                className="text-black hover:text-gray-800 relative group font-semibold text-lg tracking-wide"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="md:hidden z-50 p-2 hover:bg-yellow-500 rounded-lg transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          variants={textVariants}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed inset-0 bg-yellow-400 md:hidden pt-24 px-6"
            >
              <ul className="flex flex-col space-y-6 items-center">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={textVariants}
                    className="w-full text-center"
                  >
                    <a
                      href="#"
                      className="text-black text-xl font-semibold block py-2 hover:bg-yellow-500 rounded-lg transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;