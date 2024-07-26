'use client';

import { PrimaryButton } from '@/components/buttons/primary-button/primary-button';
import { SecondaryButton } from '@/components/buttons/secondary-button/secondary-button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiOutlinePlay } from 'react-icons/hi';
import { MissionText } from './mission-text/mission-text';
import { Features } from './features/features';

const MISSION_TEXT =
  'Our passionate team is dedicated to transforming app development, creating innovative solutions for a better, more sustainable future.';

const text1Variant = {
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

const text2Variant = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

const paraVariant = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

export const FeatureSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center py-8 md:py-16">
      <div className="flex w-full max-w-7xl flex-col gap-y-16 py-8 md:gap-y-32 md:py-16">
        <div className="flex items-center justify-center gap-x-16 overflow-x-hidden pl-4 xl:pl-8">
          <div className="flex w-full flex-shrink-0 flex-col gap-y-8 md:max-w-[368px] lg:max-w-[520px] xl:max-w-[628px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-y-2 overflow-hidden"
            >
              <h1 className="flex flex-col gap-y-1 text-3xl font-medium md:text-5xl lg:text-6xl">
                <div className="overflow-hidden">
                  <motion.span
                    variants={text1Variant}
                    className="inline-block"
                  >
                    Build it on desktop
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    variants={text2Variant}
                    className="inline-block"
                  >
                    Launch it on mobile
                  </motion.span>
                </div>
              </h1>
              <p className="w-full text-sm md:text-base lg:text-lg">
                <motion.span
                  variants={paraVariant}
                  className="inline-block"
                >
                  Create your app on a powerful desktop interface and seamlessly
                  launch it on mobile. Enjoy the best of both worlds with
                  Flowt&apos;s responsive and efficient app-building platform.
                </motion.span>
              </p>
            </motion.div>
            <div className="flex flex-col items-center gap-x-4 gap-y-4 md:flex-row">
              <PrimaryButton>Publish App</PrimaryButton>
              <SecondaryButton icon={HiOutlinePlay}>View Demo</SecondaryButton>
            </div>
          </div>
          <div className="hidden w-full max-w-[600px] overflow-hidden md:block">
            <div className="relative h-[432px] w-[714px]">
              <Image
                src="/assets/product.png"
                alt="Product"
                fill
                className="object-fill"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 md:gap-y-16 xl:px-8">
          <MissionText text={MISSION_TEXT} />
          <Features />
        </div>
      </div>
    </section>
  );
};
