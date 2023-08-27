function SubscribeNewsletter({
  heading = '💌 Subscribe to My Newsletter 💌',
  headingSize = 'text-2xl',
  paragraph = 'Stay updated with the latest articles, tips, and tutorials on Full Stack Development, Technical Writing, and Developer Advocacy! 🚀',
  paragraphSize = 'text-base',
  buttonText = '✅ Subscribe Now',
}) {
  return (
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 p-8 rounded-lg text-center'>
      <h2 className={`${headingSize} font-bold mb-4`}>{heading}</h2>
      <p className={`text-gray-700 dark:text-gray-300 mb-4 ${paragraphSize}`}>
        {paragraph}
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
          className='bg-[#f97316] text-white p-4 rounded-full hover:bg-[#d96012] focus:outline-none focus:ring-2 focus:ring-[#ff9f4a]'
          role='button'
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default SubscribeNewsletter;
