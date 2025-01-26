'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';

// Validation Schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

interface FormData {
  email: string;
  password: string;
}

const FormLogin: React.FC<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: () => void;
  loading?: boolean;
}> = ({ formData, setFormData, onSubmit, loading = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = loginSchema.parse(formData);
      
      // Reset validation errors
      setValidationErrors({});
      
      // Submit validated data
      onSubmit(validatedData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors = err.flatten().fieldErrors;
        setValidationErrors({
          email: errors.email?.[0],
          password: errors.password?.[0],
        });
      }
    }
  };

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear specific field error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="backdrop-blur-lg p-8 rounded-2xl w-full max-w-md border border-white/30"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-700">
        Welcome Back
      </h2>

      <div className="mb-4 relative">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600" size={20} />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="Enter your email"
            disabled={loading}
            className={`w-full pl-10 pr-3 py-2 border ${
              validationErrors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 ${
              validationErrors.email ? 'focus:ring-red-500' : 'focus:ring-yellow-500'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        </div>
        {validationErrors.email && (
          <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
        )}
      </div>

      <div className="mb-6 relative">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600" size={20} />
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={formData.password}
            onChange={handleInputChange('password')}
            placeholder="Enter your password"
            disabled={loading}
            className={`w-full pl-10 pr-10 py-2 border ${
              validationErrors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 ${
              validationErrors.password ? 'focus:ring-red-500' : 'focus:ring-yellow-500'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {validationErrors.password && (
          <p className="text-red-500 text-xs mt-1">
            {validationErrors.password}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: loading ? 1 : 1.05 }}
        whileTap={{ scale: loading ? 1 : 0.95 }}
        disabled={loading}
        className={`w-full bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 transition duration-300 ease-in-out flex items-center justify-center ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <LogIn size={20} className="mr-2" />
        {loading ? 'Logging in...' : 'Login'}
      </motion.button>

      <div className="text-center mt-4">
        <a href="/forgot-password" className="text-yellow-600 hover:underline text-sm">
          Forgot Password?
        </a>
      </div>
    </motion.form>
  );
};

export default FormLogin;