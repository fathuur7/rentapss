'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Shield, Heart, Star } from 'lucide-react';
import Navbar from '../components/layout/navbar';

// Enhanced animation variants
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

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Trust & Respect',
      description: 'Building meaningful relationships founded on mutual understanding and respect.',
      color: 'text-rose-500'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Maintaining the highest standards of security and safety for all our users.',
      color: 'text-blue-500'
    },
    {
      icon: Star,
      title: 'Quality Service',
      description: 'Delivering exceptional experiences that create lasting memories.',
      color: 'text-yellow-500'
    }
  ];

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-300 py-20"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Perfect Companion
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Creating meaningful connections and unforgettable moments, one experience at a time.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-50/80" />
      </motion.div>

      {/* Mission & Vision */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="mb-6">
              <span className="inline-block p-3 bg-yellow-100 rounded-lg">
                <ArrowRight className="w-6 h-6 text-yellow-600" />
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Starting from a simple idea to connect people, we've evolved into a trusted platform
              that facilitates genuine connections and memorable experiences. Our journey is built
              on the foundation of trust, safety, and quality service.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="mb-6">
              <span className="inline-block p-3 bg-yellow-100 rounded-lg">
                <Heart className="w-6 h-6 text-yellow-600" />
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We're dedicated to creating a safe and enriching environment where meaningful
              connections flourish. Our platform ensures every interaction is respectful,
              professional, and memorable.
            </p>
          </motion.div>
        </div>

        {/* Image Section with Overlay */}
        <motion.div 
          variants={fadeInUp}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16 group"
        >
          <Image
            src="/about-banner.jpg"
            alt="About Us Banner"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Creating Connections</h3>
            <p className="text-lg opacity-90">Building bridges between people, one moment at a time.</p>
          </div>
        </motion.div>

        {/* Values Section */}
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <value.icon className={`w-8 h-8 ${value.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
    </>
  );
}