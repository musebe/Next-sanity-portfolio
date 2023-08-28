const Loading = () => {
  return (
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 flex items-center justify-center min-h-screen'>
      <div className='animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 dark:border-gray-900 h-12 w-12 text-amber-500'>
        <style>{`
          div {
            border-top-color: #f59e0b;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loading;
