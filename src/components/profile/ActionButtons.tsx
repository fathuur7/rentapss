import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart } from 'lucide-react';

const ActionButtons = () => {
  return (
    <motion.div className="fixed bottom-6 left-0 right-0 flex justify-center gap-4 px-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-medium shadow-lg w-full md:w-auto"
      >
        <MessageCircle className="w-5 h-5" />
        Message
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-medium shadow-lg w-full md:w-auto"
      >
        <Heart className="w-5 h-5" />
        Follow
      </motion.button>
    </motion.div>
  );
};

export default ActionButtons;

