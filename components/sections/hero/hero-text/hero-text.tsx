import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HeroTextProps {
  className?: string;
  title: string;
  subtitle: string;
  desc: string;
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
    x: '-50%',
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

export const HeroText = ({
  className,
  title,
  subtitle,
  desc,
}: HeroTextProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
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
          {title}
        </motion.h1>
        <motion.h2
          variants={h2Variant}
          className="text-h5 md:text-h4"
        >
          {subtitle}
        </motion.h2>
      </div>
      <motion.p
        variants={descVariant}
        className="text-bodyM md:text-bodyL"
      >
        {desc}
      </motion.p>
    </motion.div>
  );
};
