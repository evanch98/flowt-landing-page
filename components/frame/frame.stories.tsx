import type { Meta, StoryObj } from '@storybook/react';
import { Frame } from './frame';

const meta: Meta<typeof Frame> = {
  title: 'Components/Frame',
  component: Frame,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'Frame',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Frame>;

export const Phone: Story = {
  args: {
    imgSrc: '/assets/hero-img.png',
    size: 'phone',
  },
};

export const Tablet: Story = {
  args: {
    imgSrc: '/assets/ui-img.png',
    size: 'tablet',
  },
};

export const Small: Story = {
  args: {
    imgSrc: '/assets/template-img.jpg',
    size: 'small',
  },
};
