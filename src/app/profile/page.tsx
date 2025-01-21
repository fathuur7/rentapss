'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeaderSection from '../components/profile/HeaderSection';
import ProfileInfo from '../components/profile/ProfileInfo';
import Tabs from '../components/profile/Tabs';
// import TabContent from '../components/profile/TabContent';
import ActionButtons from '../components/profile/ActionButtons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2
    }
  }
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      <HeaderSection />
      <ProfileInfo />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* <TabContent activeTab={activeTab} /> */}
      <ActionButtons />
    </motion.div>
  );
};

export default ProfilePage;
