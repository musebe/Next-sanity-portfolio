import Link from 'next/link';
import { Post } from '../utils/interface';
import { fetchAllPosts } from '../utils/fetchData';
import CategoryPills from '../components/blog/CategoryPills';

export const revalidate = 60;

const Blog = async () => {
  const data = (await fetchAllPosts()) as Post[];
  //   console.log('Fetched posts:', data);

    const handleCategoryChange = (selectedCategory) => {
      // Implement your category change logic here
    };

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='flex justify-center items-center pt-6 pb-8 md:pt-8 md:pb-10'>
        <h1 className='text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-amber-500 dark:text-gray-100 sm:leading-10 md:leading-12'>
          📖 Tech Tales.
        </h1>
      </div>
      <ul className='space-y-8'>
        {data.map((post, index) => (
          <li key={post._id} className='py-6'>
            <article className='space-y-4 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 xl:space-x-4'>
              <div className='xl:col-span-3'>
                <Link href={`/blog/${post.slug.current}`} prefetch>
                  <div className='space-y-2 hover:text-indigo-600 dark:hover:text-indigo-400'>
                    <h3 className='text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-2 hover:text-amber-500 dark:hover:text-amber-500'>
                      {post.title}
                    </h3>
                    <p className='prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2'>
                      {post.overview}
                    </p>
                  </div>
                </Link>
                <div className='flex flex-wrap items-center space-x-2 md:space-x-4 mt-4'>
                  <p className='text-base font-medium leading-6 text-teal-500 mb-2 md:mb-0'>
                    {new Date(post._createdAt).toISOString().split('T')[0]}
                  </p>
                  <CategoryPills
                    categories={post.categories}
                    selectedCategory='' // Initialize with a default value or state
                  />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
