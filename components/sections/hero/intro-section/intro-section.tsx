'use client';

import GridPattern from '@/components/grid-pattern/grid-pattern';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

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

export const IntroSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const imgValue = useTransform(scrollYProgress, [0, 1], ['-2%', '5%']);

  return (
    <section
      ref={container}
      className="flex w-full flex-col gap-y-8 md:gap-y-16"
    >
      <div className="relative w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex w-full flex-col gap-y-2"
        >
          <motion.h1 className="relative z-30 overflow-hidden text-3xl font-medium md:text-5xl lg:text-6xl">
            <motion.span
              variants={textVariant}
              className="inline-block"
            >
              App Builder: For iOS & Android
            </motion.span>
          </motion.h1>
          <motion.p className="relative z-30 w-full max-w-[812px] overflow-hidden text-sm md:text-base lg:text-lg">
            <motion.span
              variants={textVariant}
              className="inline-block"
            >
              Our powerful app builder will help you build your desired app in
              minutes without coding knowledge and once your app is ready, you
              can publish it on Google Play and App Store.
            </motion.span>
          </motion.p>
        </motion.div>
        <GridPattern
          x={0}
          y={0}
        />
      </div>
      <div className="h-[156px] w-full overflow-hidden md:h-[400px]">
        <motion.div
          style={{ y: imgValue }}
          className="relative h-full w-full"
        >
          <Image
            src="/assets/ui-img.png"
            alt="UI Image"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
