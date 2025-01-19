'use client';
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/navbar";
import CompanionCard from "../components/product/cardProduct";
import HeroSectionProduct from '../components/product/heroSectionProduct';
import { fetchData } from '@/utils/fecth';
import LoadingState from "../components/product/LoadingState";

const ProductPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
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

  const handleSearch = (searchTerm) => {
    setIsSearching(true);
    
    if (!searchTerm.trim()) {
      setFilteredData(data);
      setIsSearching(false);
      return;
    }

    const filtered = data.filter(item =>
      item.stageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredData(filtered);
    setIsSearching(false);
  };

  return (
    <>
      <Navbar />
      <HeroSectionProduct onSearch={handleSearch} />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading || isSearching ? (
            <LoadingState />
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
    </>
  );
};

export default ProductPage;