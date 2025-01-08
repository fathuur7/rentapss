'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Typewriter from 'react-typewriter-effect';

// const Typewriter = require('react-typewriter-effect');


const HeroSection = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img-home.jpg"
        alt="Café atmosphere"
        fill
        className="object-cover"
        priority={true}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-black px-4">
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-center mb-6 text-white shadow-lg"
        >
          Premium Companion Services
        </motion.h1>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-center max-w-2xl text-white shadow-lg"
        >
          {/* Typing Effect */}
          <Typewriter
            textStyle={{
              fontSize: "1.5rem",
              color: "white",
              fontWeight: "normal",
              textAlign: "center",
            }}
            startDelay={500}
            cursorColor="white"
            multiText={[
              "Professional companions for your social events and gatherings..",
              "Experienced in corporate events and formal occasions..",
              "Your trusted partner for unforgettable moments..",
            ]}
            multiTextDelay={2000}
            typeSpeed={50}
            deleteSpeed={30}
            loop={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
