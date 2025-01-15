'use client';
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/navbar";
import CompanionCard from "../components/layout/cardProduct";
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { fetchData } from '@/utils/fecth';

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="flex justify-between items-center mt-4">
            <div className="h-6 bg-gray-200 rounded w-20" />
            <div className="flex space-x-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function ProductPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const path = '/data/product.json';

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchData(path);
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  // Handle search
  useEffect(() => {
    const filtered = data.filter(item =>
      item.stageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Find Your Perfect Companion
          </motion.h1>
          <motion.p 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-xl text-center mb-8 max-w-2xl mx-auto"
          >
            Discover professional companions for your social events, business meetings, and special occasions
          </motion.p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search companions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <Search className="absolute right-4 top-4 text-gray-500" size={24} />
          </div>
        </div>
      </motion.section>

      {/* Filters Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition-shadow">
                <Filter size={18} />
                Filters
              </button>
              <div className="flex gap-2">
                {['Price', 'Rating', 'Availability'].map((filter) => (
                  <button 
                    key={filter}
                    className="px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition-shadow"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition-shadow">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Companions Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {filteredData.length > 0 ? (
                <CompanionCard data={filteredData} />
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-gray-600">No companions found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Companion?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our platform today and discover amazing companions for your next event
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </motion.section>
    </>
  );
}