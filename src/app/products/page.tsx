'use client';
import React, { useState, useEffect, useMemo } from "react";
import { debounce } from "lodash";
import Navbar from "../../components/layout/navbar";
import CompanionCard from "../../components/product/cardProduct";
import HeroSectionProduct from '../../components/product/heroSectionProduct';
import { fetchData } from '@/utils/fecth';

interface Product {
  id: number;
  stageName: string;
  description: string;
  image: string;
  price: number;
}

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, idx) => (
      <div key={idx} className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="animate-pulse">
          <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

const ITEMS_PER_PAGE = 9;

const ProductPage: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const path = '/data/product.json';

  const debouncedSearch = useMemo(
    () => debounce((term: string) => setSearchTerm(term), 300),
    []
  );

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchData(path);
        setData(result);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const filteredData = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return data.filter(item =>
      item.stageName.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower)
    );
  }, [data, searchTerm]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handleSearchChange = (term: string) => {
    debouncedSearch(term);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // <div className="min-h-screen bg-gray-50">
    //   <Navbar />
    //   <HeroSectionProduct onSearch={handleSearchChange} />
      
    //   <section className="py-12">
    //     <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    //       {error && (
    //         <div className="rounded-lg bg-red-50 p-4 mb-6">
    //           <div className="flex">
    //             <div className="flex-shrink-0">
    //               <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
    //                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    //               </svg>
    //             </div>
    //             <div className="ml-3">
    //               <p className="text-sm font-medium text-red-800">{error}</p>
    //             </div>
    //           </div>
    //         </div>
    //       )}

    //       {isLoading ? (
    //         <LoadingSkeleton />
    //       ) : (
    //         <div className="space-y-8">
    //           {paginatedData.length > 0 ? (
    //             <>
    //               <CompanionCard data={paginatedData} />
                  
    //               {totalPages > 1 && (
    //                 <div className="flex justify-center gap-2">
    //                   {[...Array(totalPages)].map((_, idx) => (
    //                     <button
    //                       key={idx}
    //                       onClick={() => handlePageChange(idx + 1)}
    //                       className={`
    //                         inline-flex items-center justify-center h-10 w-10 rounded-lg
    //                         text-sm font-medium transition-colors
    //                         ${currentPage === idx + 1
    //                           ? 'bg-yellow-600 text-white shadow-sm hover:bg-blue-700'
    //                           : 'bg-white text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-50'
    //                         }
    //                       `}
    //                     >
    //                       {idx + 1}
    //                     </button>
    //                   ))}
    //                 </div>
    //               )}
    //             </>
    //           ) : (
    //             <div className="text-center rounded-lg border border-gray-100 p-12">
    //               <h3 className="text-lg font-medium text-gray-900">
    //                 No products found
    //               </h3>
    //               <p className="mt-2 text-gray-500">
    //                 Try adjusting your search criteria
    //               </p>
    //             </div>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //   </section>
    // </div>
    <div>
      hello product
    </div>
  );
};

export default ProductPage;