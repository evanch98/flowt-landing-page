'use client';

import { Frame } from '@/components/frame/frame';
import { motion } from 'framer-motion';

const h1Variant = {
  hidden: {
    y: '-100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.125,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export const InterfaceSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-y-16 py-40">
      <motion.h1
        variants={h1Variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-h2 md:text-h1"
      >
        Design Your Vision with Ease
      </motion.h1>
      <Frame
        imgSrc="/assets/ui-img.png"
        size="tablet"
      />
    </section>
  );
};
