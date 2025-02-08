import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Users, Award } from 'lucide-react';

const ProfileInfo = () => {
  // const session = getSession();
  // get from session localstorage
  const userData = JSON.parse(localStorage.getItem('session') || '{}');
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const starVariants = {
    hover: { scale: 1.2, rotate: 180 },
    tap: { scale: 0.9 }
  };

  const stats = [
    { icon: MessageCircle, label: 'Reviews', value: '127' },
    { icon: Users, label: 'Clients', value: '85' },
    { icon: Award, label: 'Experience', value: '4 yrs' }
  ];

  return (
    <motion.div 
      className="text-center mt-16 mb-8 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-3xl font-bold text-gray-800 mb-2"
        variants={itemVariants}
      >
      {userData.user.name}
      </motion.h1>
      
      <motion.p 
        className="text-gray-600 mb-4"
        variants={itemVariants}
      >
        Professional Companion
      </motion.p>

      <motion.div 
        className="flex items-center justify-center gap-2 mb-6"
        variants={itemVariants}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            whileHover="hover"
            whileTap="tap"
            variants={starVariants}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </motion.div>
        ))}
        <span className="ml-2 text-gray-600">(4.9)</span>
      </motion.div>

      <motion.div 
        className="flex justify-center gap-8 mt-6"
        variants={itemVariants}
      >
        {stats.map(({ icon: Icon, label, value }) => (
          <motion.div
            key={label}
            className="text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-yellow-100 p-3 rounded-full mb-2 mx-auto w-12 h-12 flex items-center justify-center">
              <Icon className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-lg font-semibold text-gray-800">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProfileInfo;