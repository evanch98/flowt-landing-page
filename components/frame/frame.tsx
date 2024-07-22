import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FrameProps {
  imgSrc: string;
  size: 'phone' | 'tablet' | 'small';
  className?: string;
}

const variant = {
  hidden: {
    y: '50%',
    x: '50%',
    opacity: 0,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.125,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export const Frame = ({ imgSrc, size, className }: FrameProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variant}
      className={cn(
        'relative overflow-hidden border-[10px] border-[#000000]',
        size === 'phone' &&
          'h-[500px] w-[245px] rounded-[40px] md:h-[646px] md:w-[298px]',
        size === 'tablet' &&
          'h-[250px] w-[360px] rounded-[20px] max-[396px]:w-full sm:h-[350px] sm:w-[500px] lg:h-[544px] lg:w-[816px]',
        size === 'small' &&
          'h-[240px] w-[360px] rounded-[10px] border-[5px] max-[396px]:w-full',
        className,
      )}
    >
      <Image
        src={imgSrc}
        alt="Decorative Image"
        fill
        className="object-fill"
      />
    </motion.div>
  );
};
