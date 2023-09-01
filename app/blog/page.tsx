import Link from 'next/link';
import { Post } from '../utils/interface';
import { fetchAllPosts } from '../utils/fetchData';
import CategoryPills from '../components/blog/CategoryPills';

export const revalidate = 60;

const Blog = async () => {
  const data = await fetchAllPosts();
  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='flex justify-center items-center pt-6 pb-8 md:pt-8 md:pb-10'>
        <h1 className='text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-amber-500 dark:text-gray-100 sm:leading-10 md:leading-12'>
          📖 Tech Tales.
        </h1>
      </div>
      <CategoryPills allPosts={data as Post[]} />
    </div>
  );
};

export default Blog;
