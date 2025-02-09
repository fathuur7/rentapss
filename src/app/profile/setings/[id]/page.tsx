'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ProfileSettings() {
  const params = useParams(); // Ambil params dari Next.js
  const userId = params?.id; // Pastikan ada ID sebelum mengaksesnya

  const [formData, setFormData] = useState({
    background: '',
    image: '',
    location: '',
    aboutme: '',
    avalaible: '',
    name: '',
    email: '',
    telegram: '',
    password: '',
  });

  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/me/${userId}` , {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw new Error('Failed to fetch user data');

        const data = await response.json();
        setFormData(prev => ({
          ...prev,
          ...data,
          password: '' // Jangan tampilkan password
        }));
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <h1>Profile Settings for {userId}</h1>
      {/* Form di sini */}
    </div>
  );
}
