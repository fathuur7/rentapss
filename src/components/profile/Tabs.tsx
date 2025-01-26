import React from 'react';
import { motion } from 'framer-motion';

interface TabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  return (
    <motion.div className="mb-8">
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
  );
};

export default Tabs;
