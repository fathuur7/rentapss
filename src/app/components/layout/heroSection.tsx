'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically load Typewriter to reduce initial load time
const Typewriter = dynamic(() => import('react-typewriter-effect'), { ssr: false });

const HeroSection = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img-home.jpg"
        alt="Café atmosphere"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
        className="object-cover"
        priority={true} // Preloads the image for better LCP
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-black px-4">
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-center mb-6 text-white"
        >
          Premium Companion Services
        </motion.h1>

        {/* Typewriter Text */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-center max-w-2xl text-white"
        >
          <Typewriter
            textStyle={{
              fontSize: "1.5rem",
              color: "white",
              fontWeight: "normal",
              textAlign: "center",
            }}
            startDelay={300} // Faster initialization
            cursorColor="white"
            multiText={[
              "Professional companions for your social events and gatherings.",
              "Experienced in corporate events and formal occasions.",
              "Your trusted partner for unforgettable moments.",
            ]}
            multiTextDelay={1500} // Reduced delay for quicker text updates
            typeSpeed={40} // Faster typing speed
            deleteSpeed={20} // Faster delete speed
            loop={true} // Enable looping
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
