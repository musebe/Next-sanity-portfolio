// PortableTextComponent.tsx

import React from 'react';
import { BlockValue, ImageValue } from '@/app/utils/interface';
import { urlFor } from '@/app/utils/sanityImageUrl';
import Image from 'next/image';

type HeaderStyles = {
  [key: string]: string;
};

export const headerStyles: HeaderStyles = {
  h1: 'text-blue-600 dark:text-blue-300',
  h2: 'text-green-600 dark:text-green-300',
  h3: 'text-purple-600 dark:text-purple-300',
};

export const generateHeaderElement = (
  tag: React.ElementType,
  anchor: string,
  text: string,
  className: string
) => {
  const Tag = tag;
  return (
    <Tag id={anchor} className={className}>
      {text}
    </Tag>
  );
};

const PortableTextComponent = {
  types: {
    image: ({ value }: { value: ImageValue }) => (
      <Image
        src={urlFor(value).url()}
        alt='Image'
        className='rounded-lg'
        width={800}
        height={800}
        priority
      />
    ),
    block: ({ value }: { value: BlockValue }) => {
      const text = value.children[0].text;
      const anchor = `heading-${text.replace(/\s+/g, '-').toLowerCase()}`;

      if (headerStyles[value.style as keyof typeof headerStyles]) {
        return generateHeaderElement(
          value.style as keyof JSX.IntrinsicElements,
          anchor,
          text,
          headerStyles[value.style as keyof typeof headerStyles]
        );
      }

      return (
        <p className=''>
          {value.children.map((child: any, index: number) => {
            // Explicitly specify the type of 'child' and 'index'
            if (child.marks && child.marks.includes('code')) {
              const codeText = child.text;
              // console.log('Original codeText:', codeText); // Debugging step

              // Remove all backticks
              const cleanedCodeText = codeText.replace(/`/g, '');
              // console.log('Cleaned codeText:', cleanedCodeText); // Debugging step

              return (
                <code
                  key={index}
                  className='bg-slate-900 dark:bg-gray-300 text-white dark:text-black rounded p-8 w-full inline-block overflow-x-auto font-normal whitespace-pre no-backtick' // Added 'whitespace-pre' and 'no-backtick'
                >
                  {cleanedCodeText}
                </code>
              );
            }
            return child.text;
          })}
        </p>
      );
    },
  },
};

export default PortableTextComponent;
