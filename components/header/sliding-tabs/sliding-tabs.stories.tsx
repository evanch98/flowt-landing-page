import type { Meta, StoryObj } from '@storybook/react';
import { SlidingTabs } from './sliding-tabs';

const meta: Meta<typeof SlidingTabs> = {
  title: 'Components/Header/SlidingTabs',
  component: SlidingTabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'SlidingTabs',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SlidingTabs>;

export const Default: Story = {};
