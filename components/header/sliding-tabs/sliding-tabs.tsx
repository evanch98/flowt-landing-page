'use client';

import { Line } from '@/components/header/sliding-tabs/line';
import { Tab } from '@/components/header/sliding-tabs/tab';
import { useState } from 'react';

export interface Position {
  width: number;
  left: number;
  opacity: number;
}

export const SlidingTabs = () => {
  const [position, setPosition] = useState<Position>({
    width: 0,
    left: 0,
    opacity: 0,
  });

  const handleOnMouseLeave = () => {
    setPosition((pv) => ({ ...pv, opacity: 0 }));
  };

  return (
    <ul
      onMouseLeave={handleOnMouseLeave}
      className="relative flex w-fit gap-x-12 text-white"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Solutions</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Developers</Tab>
      <Line {...position} />
    </ul>
  );
};
