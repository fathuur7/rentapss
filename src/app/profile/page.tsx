'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Settings, Bell, User } from 'lucide-react';
import HeaderSection from '../../components/profile/HeaderSection';
import ProfileInfo from '../../components/profile/ProfileInfo';
import Tabs from '../../components/profile/Tabs';
import TabContent from '../../components/profile/TabContent';
import ActionButtons from '../../components/profile/ActionButtons';
import { useRouter } from 'next/navigation';
import  logoutFetch  from '@/utils/logoutFetch';
import { useUserData } from '@/utils/fetchUserData';
// impoer { useUserData}
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const router = useRouter();
  const userData = useUserData();

  // console.log(userData);
  const userId = userData?.id; // Ambil _id
  const pathProfile = `/profile/setings/${userId}`;
  

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

  const setingsButton = () => {
    router.push(pathProfile);
  };

  const confirmLogout = async () => {
    // hapus local storage
    localStorage.clear();
    await logoutFetch();
    // cleaarSession
    router.push('auth/login');
  };

  return (
    <motion.div
      className="relative min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <User className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 font-semibold text-gray-900">Profile</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Settings
                onClick={setingsButton}
                className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => confirmLogout()}
                className="flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with enhanced gradient background */}
      <div className="relative w-full bg-gradient-to-b from-yellow-50 via-yellow-100/50 to-gray-50 pb-32 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]" />
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.1),transparent_50%)]" />
        </div>

        <div className="relative">
          <motion.div variants={childVariants}>
            <HeaderSection />
          </motion.div>

          <motion.div variants={childVariants} className="relative z-10">
            <ProfileInfo />
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative -mt-28">
        <div className="max-w-2xl mx-auto">
          <motion.div variants={childVariants} className="px-4 space-y-6">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <div className="relative">
              <TabContent activeTab={activeTab} />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fixed action buttons with enhanced styling */}
      <motion.div 
        variants={childVariants}
        className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-lg"
      >
        <div className="max-w-2xl mx-auto p-4">
          <ActionButtons />
        </div>
      </motion.div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to logout from your account?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
               onClick={() => confirmLogout()}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProfilePage;