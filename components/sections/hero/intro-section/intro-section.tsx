'use client';

import { PrimaryButton } from '@/components/buttons/primary-button/primary-button';
import { HeroText } from '../hero-text/hero-text';
import { SecondaryButton } from '@/components/buttons/secondary-button/secondary-button';
import { HiOutlinePlay } from 'react-icons/hi';
import { Frame } from '@/components/frame/frame';

export const IntroSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-x-32 gap-y-16 pb-20 lg:flex-row lg:justify-start">
      <div className="flex flex-col items-center justify-center gap-y-10 lg:max-w-[600px] lg:items-start lg:justify-start">
        <HeroText
          title="App Builder"
          subtitle="For iOS & Android"
          desc="Our powerful app builder will help you build your desired app in minutes without coding knowledge and once your app is ready, you can publish it on Google Play and App Store."
        />
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <PrimaryButton>Publish App</PrimaryButton>
          <SecondaryButton icon={HiOutlinePlay}>View Demo</SecondaryButton>
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center justify-center xl:pl-32">
        <Frame
          imgSrc="/assets/hero-img.png"
          size="phone"
        />
      </div>
    </section>
  );
};
