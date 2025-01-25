'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import FormRegister from '../../components/form/FormRegister';
import { registerUser } from '../../../utils/registerUser';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    password: '',
  });
  const [registrationStatus, setRegistrationStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({
    success: null,
    message: ''
  });

  const handleRegister = async () => {
    try {
      const data = await registerUser(formData);
      setRegistrationStatus({
        success: true,
        message: 'Registration Successful!'
      });
      console.log('Registration Successful:', data);
      router.push('/auth/login');
    } catch (error) {
      setRegistrationStatus({
        success: false,
        message: error.message || 'Registration failed. Please try again.'
      });
      console.error('Error during registration:', error);
    }
  };
  
  return (
      <div className="space-y-4">
        <FormRegister
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleRegister}
        />
        
        {registrationStatus.success !== null && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center p-3 rounded-md ${
              registrationStatus.success 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}
          >
            {registrationStatus.success ? (
              <CheckCircle2 className="mr-2" />
            ) : (
              <AlertCircle className="mr-2" />
            )}
            {registrationStatus.message}
          </motion.div>
        )}
      </div>
  );
};

export default RegisterPage;