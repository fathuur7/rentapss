'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useUserData } from '@/utils/fetchUserData'; // Gunakan hook ini
import updateData from '@/utils/updateData';
import { 
  User, Mail, MapPin, Image as ImageIcon, 
  PenBox, Clock, Lock, Camera, Loader2, Send
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ProfileSettings() {
  const params = useParams();
  const userData = useUserData(); // Gunakan hook ini
  const userId = userData?.id; // Ambil ID dari data user yang sudah login

  const [formData, setFormData] = useState({
    background: '',
    image: '',
    location: '',
    aboutme: '',
    available: '',
    name: '',
    email: '',
    telegram: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ message: string, type: string } | null>(null);

  // Set data form setelah userData tersedia
  useEffect(() => {
    if (userData) {
      setFormData((prev) => ({
        ...prev,
        name: userData.name || '',
        email: userData.email || '',
        telegram: userData.telegram || '',
      }));
    }
  }, [userData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) return;

    setIsLoading(true);
    setSaveStatus(null);

    try {
      await updateData(userId as any, formData as any, setFormData as any);;
      setSaveStatus({ message: 'Profile saved successfully!', type: 'success' });
    } catch (error) {
      setSaveStatus({ message: 'Failed to save profile. Try again.', type: 'error' });
    } finally {
      setIsLoading(false);
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div initial="initial" animate="animate" className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeIn} className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 bg-gray-200">
            {formData.background ? (
              <img src={formData.background} alt="Background" className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full"><ImageIcon className="text-gray-400" size={48} /></div>
            )}
            <label htmlFor="background-upload" className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-50">
              <Camera className="text-gray-600" size={20} />
            </label>
            <input id="background-upload" type="file" className="hidden" accept="image/*" ></input>
          </div>

          <div className="relative -mt-16 px-6">
            <div className="relative inline-block">
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-white bg-white shadow-lg">
                {formData.image ? (
                  <img src={formData.image} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-100"><User className="text-gray-400" size={40} /></div>
                )}
              </div>
              <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-50">
                <Camera className="text-gray-600" size={16} />
              </label>
              <input id="profile-upload" type="file" className="hidden" accept="image/*"></input>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {[{
              label: 'Full Name', name: 'name', icon: User, type: 'text'
            }, {
              label: 'Email Address', name: 'email', icon: Mail, type: 'email'
            }, {
              label: 'Location', name: 'location', icon: MapPin, type: 'text'
            }, {
              label: 'About Me', name: 'aboutme', icon: PenBox, type: 'textarea'
            }, {
              label: 'Availability', name: 'available', icon: Clock, type: 'text'
            }, {
              label: 'Telegram', name: 'telegram', icon: Send, type: 'text'
            }, {
              label: 'Password', name: 'password', icon: Lock, type: 'password'
            }].map(({ label, name, icon: Icon, type }) => (
              <div key={name} className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Icon className="text-gray-400" size={18} /></div>
                  <input 
                    type={type} 
                    name={name} 
                    value={formData[name] || ''}  
                    onChange={handleChange} 
                    className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder={`Enter your ${label.toLowerCase()}`} 
                  />
                </div>
              </div>
            ))}

            <motion.button 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center" 
              type="submit" 
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="animate-spin mr-2" size={18} /> : 'Save Changes'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
