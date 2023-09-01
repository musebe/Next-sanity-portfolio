'use client';

import React, { useState, useEffect } from 'react';
import { Post } from '@/app/utils/interface';
import CategoryPills from './CategoryPills';
import ResetFilterButton from './ResetFilterButton'; 

interface TagsPillsProps {
  allPosts: Post[];
}

const TagsPills: React.FC<TagsPillsProps> = ({ allPosts }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);
  const [selectedTag, setSelectedTag] = useState<string>('');

  useEffect(() => {
    setFilteredPosts(allPosts);
  }, [allPosts]);

  useEffect(() => {
    const filtered = selectedTag
      ? allPosts.filter((post) => post.tags && post.tags.includes(selectedTag))
      : allPosts;
    setFilteredPosts(filtered);
  }, [selectedTag, allPosts]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const colors = [
    'bg-blue-200 text-blue-800',
    'bg-red-200 text-red-800',
    'bg-green-200 text-green-800',
    'bg-yellow-200 text-yellow-800',
  ];

  const uniqueTags = Array.from(
    new Set(allPosts.flatMap((post) => post.tags || []))
  );

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700 no-top-border'>
      <div className='flex justify-center items-center flex-col pt-6 pb-8 md:pt-8 md:pb-10'>
        <div className='overflow-x-auto whitespace-nowrap w-full md:w-auto mt-8 h-[fit-content]'>
          <div className='inline-block align-baseline pb-3 space-x-2'>
            {uniqueTags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-3 py-1 rounded-full cursor-pointer ${
                  colors[index % colors.length]
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='mb-4'>
        {selectedTag && (
          <ResetFilterButton resetFilter={() => setSelectedTag('')} />
        )}
      </div>
      <CategoryPills allPosts={filteredPosts} />
    </div>
  );
};

export default TagsPills;
