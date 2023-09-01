"use client"

import React from 'react';

interface CategoryPillsProps {
  categories: string[];
  selectedCategory: string;
}

const CategoryPills: React.FC<CategoryPillsProps> = ({
  categories,
  selectedCategory,
}) => {
  const handleCategoryChange = (selectedCategory: string) => {
    // Implement your category change logic here
    console.log(`Category changed to: ${selectedCategory}`);
  };

  const colors = [
    'bg-blue-200 text-blue-800',
    'bg-red-200 text-red-800',
    'bg-green-200 text-green-800',
    'bg-yellow-200 text-yellow-800',
  ];

  return (
    <div className='flex flex-wrap space-x-2 md:space-x-4'>
      {categories.map((category, index) => (
        <span
          key={index}
          className={`text-xs px-3 py-1 rounded-full cursor-pointer ${
            selectedCategory === category
              ? 'bg-blue-200 text-blue-800'
              : colors[index % colors.length]
          }`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryPills;
