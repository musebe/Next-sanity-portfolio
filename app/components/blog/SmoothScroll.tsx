import React from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
  speed?: number;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  speed = 0.1,
}) => {
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
