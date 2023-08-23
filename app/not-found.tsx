'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className='bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 flex items-center justify-center min-h-screen'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 border-4 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300'
      >
        <h2 className='text-3xl font-bold text-red-600 dark:text-red-400 mb-4 text-center hover:text-red-700 dark:hover:text-red-500 transition-all duration-300'>
          There was a problem.
        </h2>
        <p className='text-lg mb-2 text-center hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300'>
          We could not find the page you were looking for.
        </p>
        <p className='text-lg text-center'>
          Go back to the{' '}
          <Link href='/'>
            <span className='text-blue-500 cursor-pointer hover:underline hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300'>
              Home
            </span>
          </Link>
          .
        </p>
      </motion.div>
    </main>
  );
}
