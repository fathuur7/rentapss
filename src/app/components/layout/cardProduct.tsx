import React from "react";
import { motion } from 'framer-motion';
import { Heart, Phone, MessageCircle, Star } from 'lucide-react';

interface CompanionProps {
  data: {
    stageName: string;
    description: string;
    image: string;
    price: number;
    rating?: number;
  }[];
}

const CompanionCard = ({ data }: CompanionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              duration: 0.8,
              delay: index * 0.1
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.2 }
          }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
            <div className="relative">
              <img
                src={item.image}
                alt={item.stageName}
                className="h-48 w-full object-cover"
              />
              <motion.button
                className="absolute top-2 right-2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="text-red-500 hover:fill-current" size={24} />
              </motion.button>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                {item.stageName}
              </h3>
              
              <p className="text-gray-600 mb-3">
                {item.description}
              </p>

              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < (item.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  ({item.rating || 0}/5)
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-blue-600">
                  ${item.price}
                </span>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-blue-50 hover:bg-blue-100"
                  >
                    <MessageCircle className="text-blue-600" size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-green-50 hover:bg-green-100"
                  >
                    <Phone className="text-green-600" size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CompanionCard;