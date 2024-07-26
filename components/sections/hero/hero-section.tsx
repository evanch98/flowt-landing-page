import { FeatureSection } from './feature-section/feature-section';
import { IntroSection } from './intro-section/intro-section';

export const HeroSection = () => {
  return (
    <section className="mt-52 flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-y-6 px-4 md:gap-y-7 xl:px-8">
        <IntroSection />
        <FeatureSection />
      </div>
    </section>
  );
};
