'use client';

import { useEffect, useState } from 'react';

interface Props {
  textToCopy: string;
  buttonId: string; // Add this line
}

const CopyToClipboardButton: React.FC<Props> = ({ textToCopy, buttonId }) => {

    const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleCopyClick = () => {
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          // console.log('Text successfully copied');
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
        },
        (err) => console.error('Failed to copy text: ', err)
      );
    };

    const buttonElement = document.getElementById(buttonId);
    if (buttonElement) {
      buttonElement.addEventListener('click', handleCopyClick);
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener('click', handleCopyClick);
      }
    };
  }, [textToCopy, buttonId]);

  return (
    <div className='relative'>
      <button id={buttonId} className='flex items-center text-sm'>
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
      {showPopup && (
        <div className='absolute top-0 left-0 mt-8 ml-4 p-2 rounded bg-green-500 text-white text-xs'>
          Copied!
        </div>
      )}
    </div>
  );
};

export default CopyToClipboardButton;




;
