'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  feature: string;
}

const textVariant = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

const iconVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

export const FeatureCard = ({ icon: Icon, feature }: FeatureCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-y-4"
    >
      <motion.div variants={iconVariant}>
        <Icon className="size-16 lg:size-24" />
      </motion.div>
      <div className="overflow-hidden">
        <motion.p
          variants={textVariant}
          className="md:text-lg lg:text-2xl"
        >
          {feature}
        </motion.p>
      </div>
    </motion.div>
  );
};
