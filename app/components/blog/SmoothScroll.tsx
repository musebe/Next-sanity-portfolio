import React, { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
  speed?: number;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  speed = 0.1,
}) => {
  useEffect(() => {
    const scrollContainer = document.getElementById('smooth-scroll-container');

    const handleScroll = (e: { deltaY: number; }) => {
      if (scrollContainer) {
        if (e.deltaY > 0) {
          scrollContainer.scrollTop += 20;
        } else if (e.deltaY < 0) {
          scrollContainer.scrollTop -= 20;
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div
      id='smooth-scroll-container'
      style={{ overflowY: 'auto', position: 'relative' }}
    >
      <ul className='space-y-8'>{children}</ul>
    </div>
  );
};

export default SmoothScroll;
