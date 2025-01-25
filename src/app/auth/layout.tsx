'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, LogIn, UserPlus, Layers, Palette, Sun, Moon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  const handleBack = () => router.back();
  const handleLogin = () => router.push('./login');
  const handleRegister = () => router.push('./register');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`min-h-screen ${theme === 'light' 
      ? 'bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200' 
      : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'} 
      flex flex-col overflow-hidden transition-colors duration-500`}
    >
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`backdrop-blur-sm ${theme === 'light' 
          ? 'bg-white/30 shadow-lg' 
          : 'bg-black/30 shadow-2xl'} fixed top-0 left-0 right-0 z-50`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.button 
            onClick={handleBack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full p-2 ${theme === 'light' 
              ? 'hover:bg-yellow-200/50' 
              : 'hover:bg-gray-700/50'} transition`}
          >
            <ArrowLeft size={24} className={theme === 'light' ? 'text-yellow-800' : 'text-gray-200'} />
          </motion.button>

          <div className="flex items-center space-x-2">
            <Layers size={30} className={theme === 'light' ? 'text-yellow-700' : 'text-gray-300'} />
            <h1 className={`text-2xl font-bold ${theme === 'light' ? 'text-yellow-900' : 'text-white'}`}>
              QuickApp
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <motion.button 
              onClick={toggleTheme}
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full p-2 ${theme === 'light' 
                ? 'bg-yellow-100/50 hover:bg-yellow-200/50' 
                : 'bg-gray-800/50 hover:bg-gray-700/50'} transition`}
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-yellow-800" />
              ) : (
                <Sun size={20} className="text-gray-300" />
              )}
            </motion.button>

            <div className="flex space-x-2">
              <motion.button 
                onClick={handleLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${theme === 'light' 
                  ? 'bg-yellow-500/80 hover:bg-yellow-500 text-yellow-900' 
                  : 'bg-blue-600/80 hover:bg-blue-500 text-white'} 
                  px-4 py-2 rounded-full flex items-center space-x-2 transition`}
              >
                <LogIn size={18} />
                <span>Login</span>
              </motion.button>

              <motion.button 
                onClick={handleRegister}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${theme === 'light' 
                  ? 'bg-yellow-600/80 hover:bg-yellow-600 text-white' 
                  : 'bg-purple-600/80 hover:bg-purple-500 text-white'} 
                  px-4 py-2 rounded-full flex items-center space-x-2 transition`}
              >
                <UserPlus size={18} />
                <span>Register</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <motion.main 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-grow flex items-center justify-center p-4 pt-24"
      >
        <div className={`w-full max-w-md ${theme === 'light' 
          ? 'bg-white/70 border-white/30' 
          : 'bg-gray-800/70 border-gray-700/30'} 
          backdrop-blur-lg rounded-2xl shadow-2xl border p-8`}
        >
          {children}
        </div>
      </motion.main>
    </div>
  );
};

export default Layout;