// src/components/about/ValueCard.jsx
import { motion } from 'framer-motion';
import React from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

type ValueCardProps = {
  icon: React.ElementType,
  title: string,
  description: string,
  color: string
}

export const ValueCard = ({ icon: Icon, title, description, color } : ValueCardProps ) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="mb-6">
      <Icon className={`w-8 h-8 ${color}`} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);