import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HeroTextProps {
  className?: string;
}

const h1Variant = {
  hidden: {
    opacity: 0,
    y: '-100%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const h2Variant = {
  hidden: {
    opacity: 0,
    x: '-100%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
      duration: 1.125,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const descVariant = {
  hidden: {
    opacity: 0,
    y: '100%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export const HeroText = ({ className }: HeroTextProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      className={cn(
        'flex flex-col gap-y-6 text-center lg:text-left',
        className,
      )}
    >
      <div className="flex flex-col gap-y-2">
        <motion.h1
          variants={h1Variant}
          className="text-h2 md:text-h1"
        >
          App Builder
        </motion.h1>
        <motion.h2
          variants={h2Variant}
          className="text-h5 md:text-h4"
        >
          For iOS & Android
        </motion.h2>
      </div>
      <motion.p
        variants={descVariant}
        className="text-bodyM md:text-bodyL"
      >
        Our powerful app builder will help you build your desired app in minutes
        without coding knowledge and once your app is ready, you can publish it
        on Google Play and App Store.
      </motion.p>
    </motion.div>
  );
};
