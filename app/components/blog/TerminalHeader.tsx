
import React from 'react';

const TerminalHeader = () => {
  return (
    <div className='bg-gray-800 text-white p-2 rounded-tl-lg rounded-tr-lg'>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-1.5'>
          <div className='w-3 h-3 bg-red-500 rounded-full'></div>
          <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>
        </div>
        <button className='flex items-center text-sm'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9 2H19C20.1 2 21 2.9 21 4V16C21 17.1 20.1 18 19 18H9C7.9 18 7 17.1 7 16V4C7 2.9 7.9 2 9 2Z'
              fill='#4CAF50'
            />
            <path
              d='M3 6H13C14.1 6 15 6.9 15 8V20C15 21.1 14.1 22 13 22H3C1.9 22 1 21.1 1 20V8C1 6.9 1.9 6 3 6Z'
              fill='#FFC107'
            />
          </svg>
          
          Copy Code
        </button>
      </div>
    </div>
  );
};

export default TerminalHeader;


