function SubscribeNewsletter() {
  return (
    <div className='bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 p-8 rounded-lg text-center border-2 border-gray-300 dark:border-gray-600'>
      <h2 className='text-2xl font-bold mb-4'>
        💌 Subscribe to My Newsletter 💌
      </h2>
      <p className='text-gray-700 dark:text-gray-300 mb-4'>
        Stay updated with the latest articles, tips, and tutorials on Full Stack
        Development, Technical Writing, and Developer Advocacy! 🚀
      </p>
      <form
        aria-label='Subscribe to Newsletter Form'
        className='flex flex-col items-center'
      >
        <input
          type='email'
          name='email'
          placeholder='Your Email Address'
          aria-label='Email Address'
          className='p-2 rounded border border-gray-300 dark:border-gray-700 mb-4'
        />
        <button
          type='submit'
          aria-label='Subscribe Button'
          className='bg-blue-700 text-white p-2 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400'
          role='button'
        >
          ✅ Subscribe Now
        </button>
      </form>
    </div>
  );
}

export default SubscribeNewsletter;
