import { CtaSection } from '@/components/sections/cta-section/cta-section';
import { FeatureSection } from '@/components/sections/feature-section/feature-section';
import { HeroSection } from '@/components/sections/hero/hero-section';
import { PartnersSection } from '@/components/sections/partners-section/partners-section';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <FeatureSection />
      <CtaSection />
    </main>
  );
};

export default HomePage;
