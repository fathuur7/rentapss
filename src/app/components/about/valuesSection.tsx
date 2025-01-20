'use client';
import { motion } from 'framer-motion';
import { Shield, Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';
import React from 'react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Trust & Respect',
      description: 'Building meaningful relationships founded on mutual understanding and respect.',
      color: 'rose',
      benefits: [
        'Personal Connection',
        'Mutual Understanding',
        'Long-term Relationships'
      ]
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Maintaining the highest standards of security and safety for all our users.',
      color: 'blue',
      benefits: [
        'Secure Environment',
        'Privacy Protection',
        'Verified Members'
      ]
    },
    {
      icon: Star,
      title: 'Quality Service',
      description: 'Delivering exceptional experiences that create lasting memories.',
      color: 'yellow',
      benefits: [
        'Premium Experience',
        'Dedicated Support',
        'Personalized Care'
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Section Header */}
      <motion.div
        variants={fadeInUp}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block px-4 py-2 bg-yellow-100 rounded-full text-yellow-800 text-sm font-medium mb-4"
        >
          Our Core Values
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          What Makes Us{' '}
          <span className="relative inline-block text-yellow-600">
            Different
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-0 left-0 h-3 bg-yellow-200 -z-10"
            />
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          We are committed to providing the best experience for our community through our core values.
        </p>
      </motion.div>

      {/* Values Grid */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
              ${value.color === 'rose' ? 'hover:bg-rose-50' : ''}
              ${value.color === 'blue' ? 'hover:bg-blue-50' : ''}
              ${value.color === 'yellow' ? 'hover:bg-yellow-50' : ''}`}
            whileHover={{ y: -5 }}
          >
            {/* Decorative Background */}
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20
              ${value.color === 'rose' ? 'bg-rose-300' : ''}
              ${value.color === 'blue' ? 'bg-blue-300' : ''}
              ${value.color === 'yellow' ? 'bg-yellow-300' : ''}`}
            />

            {/* Icon */}
            <div className="mb-6 relative">
              <div className={`p-3 rounded-xl inline-block
                ${value.color === 'rose' ? 'bg-rose-100' : ''}
                ${value.color === 'blue' ? 'bg-blue-100' : ''}
                ${value.color === 'yellow' ? 'bg-yellow-100' : ''}`}
              >
                <value.icon className={`w-8 h-8
                  ${value.color === 'rose' ? 'text-rose-500' : ''}
                  ${value.color === 'blue' ? 'text-blue-500' : ''}
                  ${value.color === 'yellow' ? 'text-yellow-500' : ''}`}
                />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
            <p className="text-gray-600 mb-6">{value.description}</p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-6">
              {value.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0
                    ${value.color === 'rose' ? 'text-rose-500' : ''}
                    ${value.color === 'blue' ? 'text-blue-500' : ''}
                    ${value.color === 'yellow' ? 'text-yellow-500' : ''}`}
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Learn More Button */}
            <motion.button
              whileHover={{ x: 5 }}
              className={`flex items-center font-medium group
                ${value.color === 'rose' ? 'text-rose-600' : ''}
                ${value.color === 'blue' ? 'text-blue-600' : ''}
                ${value.color === 'yellow' ? 'text-yellow-600' : ''}`}
            >
              Learn More 
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ValuesSection;