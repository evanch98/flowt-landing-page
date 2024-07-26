'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: string;
}

const variant = {
  hidden: {
    color: '#27272A',
  },
  animate: {
    color: '#FFFFFF',
  },
};

export const AnimatedText = ({ children }: AnimatedTextProps) => {
  return (
    <motion.h1
      variants={variant}
      initial="hidden"
      whileInView="animate"
      className="relative text-5xl font-medium uppercase md:text-7xl lg:text-8xl"
      viewport={{ margin: '-25% 0%' }}
    >
      {children}
    </motion.h1>
  );
};
