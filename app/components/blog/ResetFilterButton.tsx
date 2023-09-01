import React from 'react';

interface ResetFilterButtonProps {
  resetFilter: () => void;
}

const ResetFilterButton: React.FC<ResetFilterButtonProps> = ({
  resetFilter,
}) => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <button
        onClick={resetFilter}
        className='text-sm px-4 py-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white'
      >
        Back to All Articles &rarr;
      </button>
    </div>
  );
};

export default ResetFilterButton;
