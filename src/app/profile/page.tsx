'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Settings, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Heart, 
  MessageCircle, 
  Camera,
  Edit,
  Star, 
  ArrowBigLeft
} from 'lucide-react';

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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
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
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200"
    >
      {/* Header Section */}
      <div className="relative w-full h-64 bg-white shadow-lg rounded-b-3xl">
        {/* button back to home */}
        <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="/"
        className="absolute top-4 left-4 bg-yellow-400 text-white px-4 py-2 rounded-md shadow-md"
        >
            <ArrowBigLeft className="w-5 h-5 text-gray-800" />
        </motion.a>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center h-full relative top-28 z-10"
        >
          <div className="relative">
            <Image
              src="/img-home.jpg"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </motion.div>
        <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-2 p-2 bg-yellow-400 rounded-full shadow-md"
            >
              <Camera className="w-8 h-8 text-gray-800" />
        </motion.button>

      </div>

      {/* Profile Info */}
      <motion.div 
        variants={itemVariants}
        className="container mx-auto px-4 pt-20 pb-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Sarah Anderson</h1>
          <p className="text-gray-600">Professional Companion</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: 'Reviews', value: '150+' },
            { label: 'Experience', value: '3 years' },
            { label: 'Rating', value: '4.9/5' },
            { label: 'Bookings', value: '500+' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md"
            >
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex justify-center space-x-4 border-b border-gray-200">
            {['about', 'gallery', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-4 capitalize ${
                  activeTab === tab
                    ? 'border-b-2 border-yellow-400 text-gray-800 font-medium'
                    : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md"
        >
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>sarah.anderson@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>Los Angeles, California</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <Calendar className="w-5 h-5 text-yellow-500" />
                <span>Available Mon-Sat</span>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2">About Me</h3>
                <p className="text-gray-600">
                  Professional companion with over 3 years of experience. 
                  Specializing in creating memorable experiences and building genuine connections. 
                  Fluent in English and Spanish, I enjoy traveling, fine dining, and cultural events.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.jpg"
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/user-placeholder.jpg"
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium text-gray-800">John Doe</div>
                        <div className="text-sm text-gray-500">2 days ago</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Amazing experience! Very professional and friendly. Would highly recommend!
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="fixed bottom-6 left-0 right-0 flex justify-center gap-4 px-4"
        >
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
      </motion.div>
    </motion.div>
  );
};

export default ProfilePage;