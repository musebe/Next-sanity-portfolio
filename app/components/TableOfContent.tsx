import React from 'react';
import Link from 'next/link';
import { TableOfContentsProps } from '../utils/interface';

// Define the props type

const TableOfContents: React.FC<TableOfContentsProps> = ({
  tocItems,
  readingEmojis,
}) => {
  return (
    <div className='border-2 rounded-lg border-opacity-50 border-amber-500 p-6 shadow-md'>
      {/* Heading */}
      <h3 className='text-lg font-bold text-amber-500 mb-4'>
        Table of Contents
      </h3>

      {/* List of Table of Contents Items */}
      <ul>
        {tocItems.map((item, index) => (
          <li key={index} className='my-2'>
            <Link href={`#${item.anchor}`}>
              <span className='hover:text-amber-500'>
                {readingEmojis[index % readingEmojis.length]} {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
