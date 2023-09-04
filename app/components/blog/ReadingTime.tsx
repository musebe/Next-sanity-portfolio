// components/ReadingTime.tsx
import React, { FC } from 'react';
import { calculateReadingTime } from '@/app/utils/helpers';



interface ReadingTimeProps {
  text: string;
}

const ReadingTime: FC<ReadingTimeProps> = ({ text }) => {
  const time = calculateReadingTime(text);

  return <div>{time}</div>;
};

export default ReadingTime;
