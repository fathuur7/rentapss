'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeaderSection from '../../components/profile/HeaderSection';
import ProfileInfo from '../../components/profile/ProfileInfo';
import Tabs from '../../components/profile/Tabs';
import TabContent from '../../components/profile/TabContent';
import ActionButtons from '../../components/profile/ActionButtons';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    // <motion.div
    //   className="relative min-h-screen bg-gray-50"
    //   initial="hidden"
    //   animate="visible"
    //   variants={containerVariants}
    // >
    //   {/* Hero Section with gradient background */}
    //   <div className="relative w-full bg-gradient-to-b from-yellow-50 via-yellow-100/50 to-gray-50 pb-32">
    //     {/* Decorative elements */}
    //     <div className="absolute inset-0 overflow-hidden">
    //       <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]" />
    //       <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.1),transparent_50%)]" />
    //     </div>

    //     {/* Hero content */}
    //     <div className="relative">
    //       <motion.div variants={childVariants}>
    //         <HeaderSection />
    //       </motion.div>

    //       <motion.div 
    //         variants={childVariants}
    //         className="relative z-10"
    //       >
    //         <ProfileInfo />
    //       </motion.div>
    //     </div>
    //   </div>

    //   {/* Main content */}
    //   <div className="relative -mt-28">
    //     <div className="max-w-2xl mx-auto">
    //       <motion.div 
    //         variants={childVariants}
    //         className="px-4 space-y-6"
    //       >
    //         <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            
    //         <div className="relative">
    //           <TabContent activeTab={activeTab} />
              
    //           {/* Content fade overlay */}
    //           <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>

    //   {/* Fixed action buttons */}
    //   <motion.div 
    //     variants={childVariants}
    //     className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-lg"
    //   >
    //     <div className="max-w-2xl mx-auto p-4">
    //       <ActionButtons />
    //     </div>
    //   </motion.div>
    // </motion.div>
    <div>
      hello profile
    </div>
  );
};

export default ProfilePage;