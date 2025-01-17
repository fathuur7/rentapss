'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User, 
  Search, 
  Home, 
  PhoneCall,
  Info,
  ShoppingBag
} from 'lucide-react';
import Link from 'next/link';

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
    { name: 'Home', icon: Home, href: '/' },
    { name: 'About', icon: Info, href: '/about' },
    { name: 'Products', icon: ShoppingBag, href: '/products' },
    { name: 'Contact', icon: PhoneCall, href: '/contact' },
  ];

  return (
    <>
      <motion.header
        className="bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-lg w-full py-4 px-6 sticky top-0 z-40 backdrop-blur-sm bg-opacity-95"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div 
            variants={textVariants}
            className="relative group"
          >
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <div className="relative">
                  <Image
                    src="/logo-hitam.jpg"
                    alt="Logo"
                    width={120}
                    height={60}
                    className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  />
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </a>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex items-center space-x-8"
            variants={containerVariants}
          >
            {navItems.map((item, index) => (
              <motion.li key={index} variants={textVariants}>
                <Link href={item.href} legacyBehavior>
                  <a className="text-gray-800 hover:text-black relative group font-semibold text-lg tracking-wide flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
                  </a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop Icons */}
          <motion.div
            className="hidden md:flex items-center space-x-6"
            variants={containerVariants}
          >
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-full bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              variants={textVariants}
              className="p-2 hover:bg-yellow-500 rounded-full transition-colors duration-200 relative group"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Search
              </span>
            </motion.button>
            
            <Link href="/profile" legacyBehavior>
              <a className="p-2 hover:bg-yellow-500 rounded-full transition-colors duration-200 relative group">
                <User className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Profile
                </span>
              </a>
            </Link>
            
            <Link href="/cart" legacyBehavior>
              <a className="p-2 hover:bg-yellow-500 rounded-full transition-colors duration-200 relative group">
                <ShoppingCart className="w-6 h-6" />
                <motion.span
                  className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  0
                </motion.span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Cart
                </span>
              </a>
            </Link>
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
                      <Link href={item.href || '#'} legacyBehavior>
                        <a
                          className="text-gray-800 text-xl font-semibold flex items-center justify-center gap-3 py-3 px-4 hover:bg-yellow-500 rounded-xl transition-all duration-200 transform hover:scale-105"
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="w-6 h-6" />
                          {item.name}
                        </a>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Navbar;