import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 flex items-center justify-center min-h-screen'>
      <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-1/3'>
        <h2 className='text-3xl font-bold text-red-600 dark:text-red-400 mb-4 text-center'>
          There was a problem.
        </h2>
        <p className='text-lg mb-2 text-center'>
          We could not find the page you were looking for.
        </p>
        <p className='text-lg text-center'>
          Go back to the{' '}
          <Link href='/'>
            <span className='text-blue-500 cursor-pointer hover:underline'>
               Home
            </span>
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
