import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { User, Mail, Lock } from 'lucide-react';

interface InputFieldNumberProps {
  label: string;
  id: string;
  name: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const InputFieldNumber: React.FC<InputFieldNumberProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
}) => {
  const handleIncrement = () => {
    const newValue = value + step;
    onChange(Math.min(newValue, max || Infinity));
  };

  const handleDecrement = () => {
    const newValue = value - step;
    onChange(Math.max(newValue, min));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="mb-4 relative">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="flex items-center">
        <motion.button
          type="button"
          onClick={handleDecrement}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-l-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <ArrowDown size={16} />
        </motion.button>
        <input
          type="number"
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          className="w-full px-3 py-2 border rounded-none focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
        <motion.button
          type="button"
          onClick={handleIncrement}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-r-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  name,
  value,
  onChange,
  icon,
}) => {
  return (
    <div className="mb-4 relative">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className=" absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full ${
            icon ? 'pl-10' : ''
          } pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
      </div>
    </div>
  );
};

export default InputField;


