'use client';

import { useState, useEffect } from 'react';

const ReadingProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercent = (scrollPosition / totalHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 z-50 w-full'>
      <div
        className='bg-gradient-to-r from-blue-400 to-purple-500'
        style={{ width: `${scrollPercentage}%`, height: '0.25rem' }}
      ></div>
    </div>
  );
};

export default ReadingProgress;
