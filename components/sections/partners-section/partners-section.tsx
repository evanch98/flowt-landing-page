'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'Innovatech',
    imgSrc: '/assets/partners/p-1.svg',
  },
  {
    name: 'Vertex',
    imgSrc: '/assets/partners/p-2.svg',
  },
  {
    name: 'NexGen',
    imgSrc: '/assets/partners/p-3.svg',
  },
  {
    name: 'Quantum Ventures',
    imgSrc: '/assets/partners/p-4.svg',
  },
  {
    name: 'Pinnacle',
    imgSrc: '/assets/partners/p-5.svg',
  },
  {
    name: 'FusionWorks',
    imgSrc: '/assets/partners/p-6.svg',
  },
];

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

export const PartnersSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center pt-8 md:pt-16">
      <div className="flex w-full max-w-7xl flex-col gap-y-8 border-y border-neutral-50 px-4 py-8 md:gap-y-16 md:py-16 xl:px-8">
        <h1 className="text-center text-3xl font-medium md:text-5xl lg:text-6xl">
          Our Top Partners
        </h1>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex w-full flex-wrap items-center justify-center gap-8 overflow-hidden"
        >
          {partners.map((partner, index) => (
            <motion.div
              variants={childVariant}
              key={index}
              className="flex items-center justify-center gap-x-2"
            >
              <Image
                src={partner.imgSrc}
                alt={partner.name}
                width={40}
                height={40}
              />
              <p className="text-2xl font-medium">{partner.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
