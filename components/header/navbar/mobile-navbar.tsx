'use client';

import { OutlineButton } from '@/components/buttons/outline-button/outline-button';
import { PrimaryButton } from '@/components/buttons/primary-button/primary-button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiX } from 'react-icons/hi';

interface MobileNavbarProps {
  children: React.ReactNode;
}

export const MobileNavbar = ({ children }: MobileNavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-hidden lg:hidden">
      <div
        onClick={() => setMenuOpen(true)}
        className="cursor-pointer"
      >
        {children}
      </div>
      <motion.div
        variants={{
          initial: { right: '-100%' },
          visible: { right: 0 },
          hidden: { right: '-100%' },
        }}
        initial="initial"
        animate={menuOpen ? 'visible' : 'hidden'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="absolute right-0 top-0 flex h-screen w-screen flex-col gap-y-16 bg-neutral-700 p-4 sm:w-[65vw] md:w-[45vw] md:px-8 md:py-6"
      >
        <HiX
          onClick={() => setMenuOpen(false)}
          className="ml-auto size-8 cursor-pointer"
        />
        <div className="mt-6 flex w-full flex-col items-center gap-y-12">
          <p>Home</p>
          <p>Solutions</p>
          <p>Pricing</p>
          <p>Developers</p>
        </div>
        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <OutlineButton>Log In</OutlineButton>
          <PrimaryButton>Publish App</PrimaryButton>
        </div>
      </motion.div>
    </div>
  );
};
