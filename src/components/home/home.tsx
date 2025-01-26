'use client';
import React from 'react';
import HeroSection from './heroSection';
import { fetchData } from '@/utils/fecth';
import { useEffect, useState } from 'react';
import CompanionsList from './CompanionsList';
import ServiceSection from './serviceSection';
import ContactSection from './contactSection';
import LoadingState from '../product/LoadingState';

const HomeComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const path = '/data/data.json';

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchData(path);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ServiceSection />
      
      {/* Testimonials with loading state */}
      {isLoading ? (
        <LoadingState />
      ) : (
        <CompanionsList data={data} />
      )}
      
      <ContactSection />
    </div>
  );
};

export default HomeComponent;