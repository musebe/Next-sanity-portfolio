// TableOfContents component
import React from 'react';

interface TableOfContentsProps {
  tocItems: Array<{ text: string; anchor: string; style: string }>;
  readingEmojis: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  tocItems,
  readingEmojis,
}) => {
  return (
    <div className='border-2 rounded-lg border-opacity-50 border-amber-500 p-6 shadow-md'>
      <h3 className='text-lg font-bold text-amber-500 mb-4'>
        Table of Contents
      </h3>
      <ul>
        {tocItems.map((item, index) => (
          <li key={index} className='my-2'>
            <a href={`#heading-${index}`} className='hover:text-amber-500'>
              {readingEmojis[index % readingEmojis.length]} {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
