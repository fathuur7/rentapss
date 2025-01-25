'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import FormLogin from '../../components/form/FormLogin';
import { loginUser } from '../../../utils/loginUser';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({
    success: null,
    message: '',
  });

  const handleLogin = async () => {
    try {
      const data = await loginUser(formData);
      setLoginStatus({
        success: true,
        message: 'Login Successful!',
      });
      console.log('Login Successful:', data);
      router.push('/home');
      // jwt token
      localStorage.setItem('token', data.token);
    } catch (error ) {
      setLoginStatus({
        success: false,
        message: error.message || 'Login failed. Please try again.',
      });
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="space-y-4">
      <FormLogin
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleLogin}
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
