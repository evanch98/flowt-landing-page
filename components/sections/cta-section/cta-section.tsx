import { AnimatedText } from '@/components/animated-text/animated-text';
import { PrimaryButton } from '@/components/buttons/primary-button/primary-button';

export const CtaSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-neutral-700">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-y-8 px-4 py-8 md:gap-y-16 md:py-16 xl:px-8">
        <div className="flex flex-col gap-y-3 text-center text-5xl font-medium md:text-7xl lg:text-8xl">
          <AnimatedText>Launch</AnimatedText>
          <AnimatedText>Your App</AnimatedText>
          <AnimatedText>Today</AnimatedText>
        </div>
        <p className="text-center text-sm md:text-base lg:text-lg">
          Stay on top of your competition with a great performing app. Your time
          and energy are not wasted.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};
