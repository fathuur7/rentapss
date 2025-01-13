'use client';
import React from 'react';
import HeroSection from './layout/heroSection';
import { fetchData } from '@/utils/fecth';
import { useEffect, useState } from 'react';
import CompanionsList from './layout/CompanionsList'
import ServiceSection from './layout/serviceSection';
import ContactSection from './layout/contactSection';

const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        console.log('Fetched data:', result); // Log data yang sebenarnya
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServiceSection />
      
      {/* Testimonials */}
      {data.length > 0 ? (
        <CompanionsList data={data} />
      ) : (
        <p className="text-center text-gray-500">Loading testimonials...</p>
      )}
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
