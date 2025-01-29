'use client';

import React from "react";
import Navbar from "../../components/layout/navbar";
import ContactForm from "../../components/contact/contactForm";
import { motion } from "framer-motion";
import VisitUsSection from "../../components/contact/VisitUsSection";
import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/contactInfo";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <ContactHero />

      {/* Main Content */}
      <section className="relative -mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 mb-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    
    {/* Map Section */}
    <VisitUsSection />

    {/* Contact Info Section */}
    <ContactInfo />
    </div>
  );
};

export default Contact;