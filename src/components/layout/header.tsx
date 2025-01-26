'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="bg-gray-100
     text-center text-sm font-bold
     text-black  py-2 overflow-hidden whitespace-nowrap">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-block"
      >
        <span className="text-sm">
          🎉 Special Offer: Get 20% off on all products! 
          &nbsp;🔥 New items just arrived! 
          &nbsp;✨ Free shipping on orders over $50 
          &nbsp;🎁 Gift with every purchase 
          &nbsp;⭐ Limited time offer 
          &nbsp;📢 Don`t miss out! 
          &nbsp;💫 Join our membership program 
          &nbsp;🌟 Exclusive deals available now!
        </span>
      </motion.div>
    </div>
  );
};

export default Header;