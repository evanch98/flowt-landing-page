'use client';

import { AnimatedText } from '@/components/animated-text/animated-text';
import { motion } from 'framer-motion';
import Image from 'next/image';

const iconVariant = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

export const FeatureSection = () => {
  return (
    <section className="h-full w-full">
      <AnimatedText>Create</AnimatedText>
      <div className="flex items-center gap-x-6 overflow-hidden">
        <AnimatedText>And</AnimatedText>
        <motion.div
          variants={iconVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-25% 0%' }}
          className="hidden md:flex"
        >
          <Image
            src="/assets/icons/icon-1.png"
            alt="Logo"
            width={76}
            height={76}
          />
        </motion.div>
      </div>
      <AnimatedText>Customize</AnimatedText>
      <div className="flex items-center gap-x-6 overflow-hidden">
        <AnimatedText>Your App</AnimatedText>
        <motion.div
          variants={iconVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-25% 0%' }}
          className="hidden md:flex"
        >
          <Image
            src="/assets/icons/icon-2.png"
            alt="Logo"
            width={76}
            height={76}
          />
        </motion.div>
      </div>
      <AnimatedText>With our intuitive</AnimatedText>
      <div className="flex items-center gap-x-6 overflow-hidden">
        <AnimatedText>Builder Interface</AnimatedText>
        <motion.div
          variants={iconVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-25% 0%' }}
          className="hidden xl:flex"
        >
          <Image
            src="/assets/icons/icon-3.png"
            alt="Logo"
            width={76}
            height={76}
          />
        </motion.div>
      </div>
    </section>
  );
};
