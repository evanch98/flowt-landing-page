'use client';

import { PrimaryButton } from '@/components/buttons/primary-button/primary-button';
import { HeroText } from '../hero-text/hero-text';
import { SecondaryButton } from '@/components/buttons/secondary-button/secondary-button';
import { HiOutlinePlay } from 'react-icons/hi';
import { Frame } from '@/components/frame/frame';

export const FeatureSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-x-32 gap-y-16 py-20 lg:flex-row">
      <div className="flex flex-shrink-0 items-center justify-center xl:pr-32">
        <Frame
          imgSrc="/assets/hero-img.png"
          size="phone"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-10 lg:max-w-[600px] lg:items-start">
        <HeroText
          title="Build it on desktop"
          subtitle="Launch it on mobile"
          desc="Create your app on a powerful desktop interface and seamlessly launch it on mobile. Enjoy the best of both worlds with Flowt's responsive and efficient app-building platform."
        />
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <PrimaryButton>Publish App</PrimaryButton>
          <SecondaryButton icon={HiOutlinePlay}>View Demo</SecondaryButton>
        </div>
      </div>
    </section>
  );
};
