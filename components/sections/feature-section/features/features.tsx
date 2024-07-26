import { cn } from '@/lib/utils';
import { AiOutlineDrag } from 'react-icons/ai';
import { BiAddToQueue, BiCustomize } from 'react-icons/bi';
import { CgTemplate } from 'react-icons/cg';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineSecurity } from 'react-icons/md';
import { FeatureCard } from './card/feature-card';

const features = [
  {
    icon: AiOutlineDrag,
    feature: 'Drag-and-Drop Interface',
  },
  {
    icon: CgTemplate,
    feature: 'Extensive Template Library',
  },
  {
    icon: IoIosPeople,
    feature: 'Real-time Collaboration',
  },
  {
    icon: BiAddToQueue,
    feature: 'Seamless Integrations',
  },
  {
    icon: BiCustomize,
    feature: 'Customizable Components',
  },
  {
    icon: MdOutlineSecurity,
    feature: 'Robust Security',
  },
];

export const Features = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-y-6 md:hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              'border-b border-neutral-50 pb-6',
              index === features.length - 1 && 'border-none pb-0',
            )}
          >
            <FeatureCard
              icon={feature.icon}
              feature={feature.feature}
            />
          </div>
        ))}
      </div>
      <div className="hidden flex-col gap-y-8 md:flex lg:gap-y-16">
        <div className="flex h-[211.5px] justify-between">
          <div className="flex w-[240px] flex-col items-center justify-center lg:w-[307px]">
            <FeatureCard {...features[0]} />
          </div>
          <div className="h-full w-px bg-neutral-50" />
          <div className="flex w-[240px] flex-col items-center justify-center lg:w-[307px]">
            <FeatureCard {...features[1]} />
          </div>
          <div className="h-full w-px bg-neutral-50" />
          <div className="flex w-[240px] flex-col items-center justify-center lg:w-[307px]">
            <FeatureCard {...features[2]} />
          </div>
        </div>
        <div className="h-px w-full bg-neutral-50" />
        <div className="flex h-[211.5px] justify-between">
          <div className="flex w-[240px] flex-col items-center justify-center lg:w-[307px]">
            <FeatureCard {...features[3]} />
          </div>
          <div className="h-full w-px bg-neutral-50" />
          <div className="flex w-[240px] flex-col items-center justify-center lg:w-[307px]">
            <FeatureCard {...features[4]} />
          </div>
          <div className="h-full w-px bg-neutral-50" />
          <div className="flex w-[240px] flex-col items-center justify-center lg:w-[307px]">
            <FeatureCard {...features[5]} />
          </div>
        </div>
      </div>
    </>
  );
};
