import React from 'react';
import { Filter } from 'lucide-react';

const FilterSection = () => {
  return (
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
  );
};

export default FilterSection;