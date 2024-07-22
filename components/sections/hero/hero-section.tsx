'use client';

import { FeatureSection } from './feature-section/feature-section';
import { InterfaceSection } from './interface-section/interface-section';
import { IntroSection } from './intro-section/intro-section';
import { useRef } from 'react';

export const HeroSection = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={container}
      className="flex h-full w-screen flex-col items-center justify-center"
    >
      <div className="z-30 mt-32 h-full w-full max-w-[1440px] overflow-hidden px-4 md:px-8 lg:mt-64 xl:px-20">
        <IntroSection />
        <InterfaceSection />
        <FeatureSection />
      </div>
    </section>
  );
};
