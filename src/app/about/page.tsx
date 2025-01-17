// src/app/about/page.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/navbar';
import AboutHeroSection from '../components/about/AboutHeroSection';
import { StorySection } from '../components/about/StorySection';
import { ImageBanner } from '../components/about/imageBanner';
import { ValuesSection } from '../components/about/valuesSection';

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
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50">
        <AboutHeroSection />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4 py-16"
        >
          <StorySection />
          <ImageBanner />
          <ValuesSection />
        </motion.div>
      </main>
    </>
  );
}