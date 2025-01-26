'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import FormLogin from '../../../components/form/FormLogin';
import { loginUser } from '../../../utils/loginUser';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({
    success: null,
    message: '',
  });

  const handleLogin = async () => {
    
    // Validate input before submission
    if (!formData.email || !formData.password) {
      setLoginStatus({
        success: false,
        message: 'Please enter both email and password.',
      });
      return;
    }

    setIsLoading(true);
    setLoginStatus({ success: null, message: '' });

    try {
      const data = await loginUser(formData);
      
      if (data?.token) {
        // Secure token storage
        localStorage.setItem('token', data.token);
        
        // Clear sensitive data from state
        setFormData({ email: '', password: '' });
        
        setLoginStatus({
          success: true,
          message: 'Login Successful!',
        });
        
        // Slight delay before navigation to show success message
        setTimeout(() => {
          router.push('/home');
        }, 500);
      } else {
        throw new Error('Authentication failed. Please try again.');
      }
    } catch (error: any) {
      setLoginStatus({
        success: false,
        message: error.message || 'Login failed. Please check your credentials.',
      });
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="space-y-4">
      <FormLogin
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleLogin}
        loading={isLoading}
      />
      {loginStatus.success !== null && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center p-3 rounded-md ${
            loginStatus.success
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {loginStatus.success ? (
            <CheckCircle2 className="mr-2" />
          ) : (
            <AlertCircle className="mr-2" />
          )}
          {loginStatus.message}
        </motion.div>
      )}
    </div>
  );
};

export default LoginPage;