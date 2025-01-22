'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LogIn, UserPlus } from 'lucide-react';

const AuthNav = () => {
  return (
    <div className="fixed top-0 right-0 p-6 z-50 flex gap-3">
      <Link href="/login">
        <motion.div
          className="flex items-center gap-2 text-gray-700 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-gray-100 hover:border-yellow-300 transition-colors"
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.97 }}
        >
          <LogIn className="w-4 h-4 text-yellow-500" />
          <span className="font-medium">Login</span>
        </motion.div>
      </Link>
      
      <Link href="/register">
        <motion.div
          className="flex items-center gap-2 text-white bg-yellow-500 hover:bg-yellow-400 px-5 py-2.5 rounded-full shadow-lg border border-yellow-400 transition-colors"
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.97 }}
        >
          <UserPlus className="w-4 h-4" />
          <span className="font-medium">Register</span>
        </motion.div>
      </Link>
    </div>
  );
};

export default AuthNav;