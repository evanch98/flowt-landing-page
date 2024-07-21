import { Position } from '@/components/header/sliding-tabs/sliding-tabs';
import { motion } from 'framer-motion';

export const Line = ({ width, left, opacity }: Position) => {
  return (
    <motion.div
      animate={{ width, left, opacity }}
      className="absolute -bottom-2 left-0 h-1 bg-white"
    />
  );
};
