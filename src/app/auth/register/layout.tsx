'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, LogIn, UserPlus, Layers } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleBack = () => router.back();
  const handleLogin = () => router.push('/login');
  const handleRegister = () => router.push('/register');

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 flex flex-col overflow-hidden">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-sm bg-white/30 shadow-lg"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.button 
            onClick={handleBack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full p-2 hover:bg-yellow-200/50 transition"
          >
            <ArrowLeft size={24} className="text-yellow-800" />
          </motion.button>

          <div className="flex items-center space-x-2">
            <Layers size={30} className="text-yellow-700" />
            <h1 className="text-2xl font-bold text-yellow-900">QuickApp</h1>
          </div>

          <div className="flex space-x-2">
            <motion.button 
              onClick={handleLogin}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500/80 hover:bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full flex items-center space-x-2 transition"
            >
              <LogIn size={18} />
              <span>Login</span>
            </motion.button>

            <motion.button 
              onClick={handleRegister}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600/80 hover:bg-yellow-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition"
            >
              <UserPlus size={18} />
              <span>Register</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <motion.main 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-grow flex items-center justify-center p-4"
      >
        <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-8">
          {children}
        </div>
      </motion.main>
    </div>
  );
};

export default Layout;