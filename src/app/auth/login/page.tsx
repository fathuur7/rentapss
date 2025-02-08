'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import FormLogin from '../../../components/form/FormLogin';
import { loginUser } from '../../../utils/loginUser';
import { useRouter } from 'next/navigation';
// import { setSession, getSession } from '../../../utils/getSession';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginStatus {
  success: boolean | null;
  message: string;
}

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState<LoginStatus>({
    success: null,
    message: '',
  });

  const handleLogin = async () => {
    // Validation
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
      const response = await loginUser(formData);

      if (response?.success) {
        // Store session data
        const sessionData = {
          token: response.token,
          user: response.user,
        };

        // Store session data in local storage
        localStorage.setItem('session', JSON.stringify(sessionData));

        // Save session data
        // setSession(sessionData);

        // Clear form
        setFormData({ email: '', password: '' });

        // Update status
        setLoginStatus({
          success: true,
          message: 'Login Successful!',
        });

        // Redirect after brief delay
        setTimeout(() => {
          router.push('/home');
        }, 500);
      } else {
        throw new Error(response?.message || 'Authentication failed. Please try again.');
      }
    } catch (error) {
      setLoginStatus({
        success: false,
        message: (error as Error).message || 'Login failed. Please check your credentials.',
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