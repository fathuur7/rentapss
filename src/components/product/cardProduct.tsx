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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10">
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
              delay: index * 0.1,
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transform transition duration-300 hover:shadow-2xl">
            {/* Image Section */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.stageName}
                className="h-56 w-full object-cover"
              />
              <motion.button
                className="absolute top-4 right-4"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="text-red-500 hover:fill-current" size={28} />
              </motion.button>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.stageName}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {item.description}
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < (item.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  ({item.rating || 0}/5)
                </span>
              </div>

              {/* Price and Actions */}
              <div className="flex justify-between items-center mt-6">
                <span className="text-2xl font-bold text-blue-600">
                  ${item.price.toFixed(2)}
                </span>

                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-blue-100 hover:bg-blue-200"
                  >
                    <MessageCircle className="text-blue-600" size={24} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-green-100 hover:bg-green-200"
                  >
                    <Phone className="text-green-600" size={24} />
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
