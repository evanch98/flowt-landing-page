import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from './feature-card';
import { AiOutlineDrag } from 'react-icons/ai';

const meta: Meta<typeof FeatureCard> = {
  title: 'Components/Sections/FeatureSection/Features/Card/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'FeatureCard',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    icon: AiOutlineDrag,
    feature: 'Drag-and-Drop Interface',
  },
};
