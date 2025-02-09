import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Star, Heart, MessageSquare } from 'lucide-react';
// import { getSession } from '@/utils/getSession';
import { useUserData } from '@/utils/fetchUserData';

interface TabContentProps {
  activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProps) => {
  const userData = useUserData();
  // const session = getSession();
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      {activeTab === 'about' && (
        <motion.div
          key="about"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 min-h-[400px]"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-700">
                  {userData?.email}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">telegram</p>
                  <p className="text-gray-700">
                    {userData?.telegram}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-700">Los Angeles, California</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="text-gray-700">Available Mon-Sat</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-gray-200"
            >
              <h3 className="font-semibold text-gray-800 mb-3">About Me</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional companion with over 3 years of experience. 
                Specializing in creating memorable experiences and building genuine connections. 
                Fluent in English and Spanish, I enjoy traveling, fine dining, and cultural events.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}

      {activeTab === 'gallery' && (
        <motion.div
          key="gallery"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 min-h-[400px]"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="relative group rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`/api/placeholder/300/300`}
                  alt={`Gallery ${item}`}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'reviews' && (
        <motion.div
          key="reviews"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 min-h-[400px]"
        >
          <div className="space-y-6">
            {[1, 2, 3].map((review) => (
              <motion.div
                key={review}
                variants={itemVariants}
                className="border-b border-gray-200 last:border-0 pb-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={`/api/placeholder/50/50`}
                      alt="Reviewer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-800">John Doe</h4>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Amazing experience! Sarah was professional, engaging, and made our event truly memorable.
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                      <MessageSquare className="w-4 h-4" />
                      <span>2 weeks ago</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TabContent;