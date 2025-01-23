import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Package, ShoppingBag, ArrowRight, Zap, Heart, Gift } from 'lucide-react';
import FooterIntro from './FooterIntro.';

const FloatingElement = ({ children, delay = 0, scale = 1 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        scale: [1, scale, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

const FlyingIcon = ({ children, basePosition }) => {
  const randomDirection = () => ({
    x: Math.random() * 1000 - 500, // Random value between -500 and 500
    y: Math.random() * 1000 - 500,
    rotate: Math.random() * 720 - 360, // Random rotation between -360 and 360 degrees
  });

  return (
    <motion.div
      className="relative cursor-pointer"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.2,
        filter: "brightness(1.2)",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        ...randomDirection(),
        transition: {
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 5
        }
      }}
      style={basePosition}
    >
      {children}
    </motion.div>
  );
};

const ShineEffect = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent"
    animate={{
      x: ['-100%', '100%'],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 3,
    }}
  />
);

export default function MainContent() {
  return (
    <main className="bg-gradient-to-b from-yellow-50 via-white to-yellow-50 flex items-center justify-center overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative py-20">
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FlyingIcon basePosition={{ top: '10%', left: '20%' }}>
            <Star className="text-yellow-400 w-8 h-8" />
          </FlyingIcon>
          
          <FlyingIcon basePosition={{ top: '10%', left: '50%' }}>
            <Heart className="text-rose-500 w-12 h-12" />
          </FlyingIcon>
          
          <FlyingIcon basePosition={{ bottom: '10%', left: '33%' }}>
            <Sparkles className="text-yellow-300 w-10 h-10" />
          </FlyingIcon>
          
          <FlyingIcon basePosition={{ bottom: '30%', left: '75%' }}>
            <Gift className="text-amber-500 w-10 h-10" />
          </FlyingIcon>
          
          <FlyingIcon basePosition={{ top: '12%', left: '25%' }}>
            <Zap className="text-yellow-400 w-9 h-9" />
          </FlyingIcon>
        </div>

        <div className="relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-500">
                Discover Amazing Products Just For You
              </h1>
              <ShineEffect />
            </motion.div>

            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Browse through our curated collection of premium products. 
              Find exactly what you need with our smart recommendations.
            </motion.p>

            <motion.div 
              className="flex gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-4 rounded-full flex items-center gap-2 font-semibold shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-shadow"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Shopping</span>
                <ShoppingBag className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="text-gray-900 flex items-center gap-2 font-semibold px-6 py-4 rounded-full border-2 border-transparent hover:border-yellow-500 transition-colors"
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <span>Learn more</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20" />
        </div>
      </div>
    </main>
  );
}