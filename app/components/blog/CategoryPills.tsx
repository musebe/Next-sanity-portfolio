'use client';

import React, { useState, useEffect } from 'react';
import { Post } from '@/app/utils/interface'; 
import ResetFilterButton from './ResetFilterButton';
import { formatDate } from '@/app/utils/helpers';
import SmoothScroll from './SmoothScroll';
import SmoothScrollItem from './SmoothScrollItem';

interface CategoryPillsProps {
  allPosts: Post[];
}

const CategoryPills: React.FC<CategoryPillsProps> = ({ allPosts }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    setFilteredPosts(allPosts);
  }, [allPosts]);

  useEffect(() => {
    const filtered = selectedCategory
      ? allPosts.filter((post) => post.categories.includes(selectedCategory))
      : allPosts;
    setFilteredPosts(filtered);
  }, [selectedCategory, allPosts]);

  const colors = [
    'bg-blue-200 text-blue-800',
    // 'bg-red-200 text-red-800',
    'bg-green-200 text-green-800',
    // 'bg-yellow-200 text-yellow-800',
  ];

  return (
    <>
      {selectedCategory && (
        <div className='mb-4'>
          <ResetFilterButton resetFilter={() => setSelectedCategory('')} />
        </div>
      )}

      <SmoothScroll>
        <ul className='space-y-8'>
          {filteredPosts.map((post, index) => (
            <SmoothScrollItem key={post._id}>
              <li className='py-6'>
                <article className='space-y-4 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 xl:space-x-4'>
                  <div className='xl:col-span-3'>
                    <a href={`/blog/${post.slug.current}`}>
                      <div className='space-y-2 hover:text-indigo-600 dark:hover:text-indigo-400'>
                        <h3 className='text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-2 hover:text-amber-500 dark:hover:text-amber-500'>
                          {post.title}
                        </h3>
                        <p className='prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2'>
                          {post.overview}
                        </p>
                      </div>
                    </a>
                    <div className='mt-2 flex flex-wrap items-center space-x-2 md:space-x-4'>
                      <p className='text-base font-medium leading-6 text-teal-500 mb-2 md:mb-0'>
                        Posted on:{' '}
                        {post._createdAt
                          ? formatDate(new Date(post._createdAt).toISOString())
                          : 'N/A'}
                      </p>
                      {post.categories.map((category, index) => (
                        <span
                          key={index}
                          className={`text-xs px-3 py-1 rounded-full cursor-pointer ${
                            index === 0 ? 'ml-4' : ''
                          } ${
                            selectedCategory === category
                              ? 'bg-blue-200 text-blue-800'
                              : colors[index % colors.length]
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            </SmoothScrollItem>
          ))}
        </ul>
      </SmoothScroll>
    </>
  );
};

export default CategoryPills;
