import { IntroSection } from './intro-section/intro-section';

export const HeroSection = () => {
  return (
    <section className="mt-52 flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col px-4 xl:px-8">
        <IntroSection />
      </div>
    </section>
  );
};
