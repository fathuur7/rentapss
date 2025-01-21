import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Star } from 'lucide-react';
import Image from 'next/image';

interface TabContentProps {
  activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProps) => {
  return (
    <motion.div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md h-64 px-12 py-12">
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

      {/* You can add 'gallery' and 'reviews' here similarly */}
    </motion.div>
  );
};

export default TabContent;
