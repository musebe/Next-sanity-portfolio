import React from 'react';
import CopyToClipboardButton from './CopyToClipboardButton'; // Import the CopyToClipboardButton

interface TerminalHeaderProps {
  textToCopy: string;
  buttonId: string; // Add this line
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  textToCopy,
  buttonId,
}) => {
  // Add buttonId here
  return (
    <div className='bg-gray-800 text-white p-2 rounded-tl-lg rounded-tr-lg flex justify-between items-center'>
      <div className='flex space-x-1.5'>
        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
        <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
      </div>
      <CopyToClipboardButton textToCopy={textToCopy} buttonId={buttonId} />
      {/* Pass the buttonId here */}
    </div>
  );
};

export default TerminalHeader;
