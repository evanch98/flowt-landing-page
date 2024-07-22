'use client';

import { OutlineButton } from '@/components/buttons/outline-button/outline-button';
import { PrimaryButton } from '@/components/buttons/primary-button/primary-button';
import { Logo } from '@/components/header/logo/logo';
import { SlidingTabs } from '@/components/header/sliding-tabs/sliding-tabs';
import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { MobileNavbar } from './mobile-navbar';
import { HiMenu } from 'react-icons/hi';
import { ClientProvider } from '@/providers/client-provider';

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <ClientProvider>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 z-50 flex w-full items-center justify-between p-4 md:px-8 md:py-6 xl:px-20',
          scrolled && 'bg-neutral-900 shadow-md',
        )}
      >
        {/* Large Screen */}
        <div className="hidden items-center gap-x-12 lg:flex">
          <Logo />
          <SlidingTabs />
        </div>
        <div className="hidden items-center gap-x-4 lg:flex">
          <OutlineButton>Log In</OutlineButton>
          <PrimaryButton>Publish</PrimaryButton>
        </div>
        {/* Small Screen */}
        <div className="flex-shrink-0 lg:hidden">
          <Logo />
        </div>
        <MobileNavbar>
          <HiMenu className="size-8" />
        </MobileNavbar>
      </motion.nav>
    </ClientProvider>
  );
};
