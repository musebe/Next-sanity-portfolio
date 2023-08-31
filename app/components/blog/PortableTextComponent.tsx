// PortableTextComponent.tsx

import React from 'react';
import { BlockValue, ImageValue } from '@/app/utils/interface';
import { urlFor } from '@/app/utils/sanityImageUrl';
import Image from 'next/image';
import TerminalHeader from './TerminalHeader';

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
        <div className=''>
          {value.children.map((child: any, index: number, array: any[]) => {
            if (child.marks && child.marks.includes('code')) {
              const codeText = child.text;
              const cleanedCodeText = codeText.replace(/`/g, '');
              return (
                <div key={index} className='mb-4'>
                  <TerminalHeader />
                  <code className='bg-slate-900 dark:bg-gray-300 text-white dark:text-black rounded-bl-lg rounded-br-lg p-8 w-full inline-block overflow-x-auto code-ide-font text-sm whitespace-pre no-backtick'>
                    {cleanedCodeText}
                  </code>
                </div>
              );
            }

            // Check if this is the last text element in a paragraph
            const isEndOfParagraph =
              index === array.length - 1 ||
              (array[index + 1].marks &&
                array[index + 1].marks.includes('code'));

            return (
              <span key={index}>
                {child.text}
                {isEndOfParagraph && <div className='h-4'></div>}{' '}
                {/* Tailwind class for vertical spacing */}
              </span>
            );
          })}
        </div>
      );
    },
  },
};

export default PortableTextComponent;
