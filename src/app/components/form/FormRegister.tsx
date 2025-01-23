import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User, Mail, Lock, Send } from 'lucide-react';
import { z } from 'zod';

// Validation Schema
const registrationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  telegram: z.string().min(3, { message: "Telegram ID must be at least 3 characters" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
});

interface FormData {
  name: string;
  email: string;
  telegram: string;
  password: string;
}

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  name: keyof FormData;
  value: string;
  icon: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  id, 
  type, 
  name, 
  value, 
  icon,
  onChange,
  error
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 relative">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
        <input
          id={id}
          type={type === 'password' && showPassword ? 'text' : type}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full pl-10 pr-10 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-yellow-500'}`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

const RegistrationForm: React.FC<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: () => void;
  error?: string;
}> = ({ formData, setFormData, onSubmit, error }) => {
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    telegram?: string;
    password?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    // Clear specific field error on change
    setValidationErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      registrationSchema.parse(formData);
      // If validation succeeds, call onSubmit
      onSubmit();
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Set validation errors
        const errors = err.flatten().fieldErrors;
        setValidationErrors({
          name: errors.name?.[0],
          email: errors.email?.[0],
          telegram: errors.telegram?.[0],
          password: errors.password?.[0]
        });
      }
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-yellow-600">Create Account</h2>
      {error &&  (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <span>{error}</span>
        </div>
      )}

      <InputField 
        label="Name" 
        id="name" 
        type="text" 
        name="name" 
        value={formData.name} 
        icon={<User size={20} className="text-yellow-600" />} 
        onChange={handleChange}
        error={validationErrors.name}
      />
      <InputField 
        label="Email" 
        id="email" 
        type="email" 
        name="email" 
        value={formData.email} 
        icon={<Mail size={20} className="text-yellow-600" />} 
        onChange={handleChange}
        error={validationErrors.email}
      />
      <InputField 
        label="Telegram ID" 
        id="telegram" 
        type="text" 
        name="telegram" 
        value={formData.telegram} 
        icon={<Send size={20} className="text-yellow-600" />} 
        onChange={handleChange}
        error={validationErrors.telegram}
      /> 
      <InputField 
        label="Password" 
        id="password" 
        type="password" 
        name="password" 
        value={formData.password} 
        icon={<Lock size={20} className="text-yellow-600" />} 
        onChange={handleChange}
        error={validationErrors.password}
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 transition duration-300 ease-in-out flex items-center justify-center"
      >
        <Send size={20} className="mr-2" />
        Register
      </motion.button>
    </motion.form>
  );
};

export default RegistrationForm;