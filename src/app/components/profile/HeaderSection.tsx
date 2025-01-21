import React from 'react';
import { ArrowBigLeft, Camera, Edit2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HeaderSection = () => {
  return (
    <div className="relative w-full h-80">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-yellow-200 opacity-90 z-0" />
      
      {/* Content container */}
      <div className="relative h-full px-4 z-10">
        {/* Top navigation bar */}
        <div className="flex justify-between items-center pt-4">
          {/* Back button */}
          <Link 
            href="/"
            className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <ArrowBigLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button 
              aria-label="Edit profile" 
              className="p-3 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Edit2 className="w-5 h-5" />
            </button>
            <button 
              aria-label="Open camera" 
              className="p-3 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Profile image section */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20">
          <div className="relative">
            {/* Profile image container */}
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
              <Image
                src="/logo-hitam.jpg"
                alt="Profile"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Camera button overlay */}
            <button 
              aria-label="Change profile picture"
              className="absolute bottom-0 right-0 p-2 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Camera className="w-4 h-4 text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 w-full h-16 bg-white rounded-t-3xl shadow-lg z-0" />
    </div>
  );
};

export default HeaderSection;
