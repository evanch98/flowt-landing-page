import type { Meta, StoryObj } from '@storybook/react';
import { Rubik } from 'next/font/google';
import { HeroText } from './hero-text';
import { cn } from '@/lib/utils';

const font = Rubik({ subsets: ['latin'] });

const meta: Meta<typeof HeroText> = {
  title: 'Components/Sections/Hero/HeroText',
  component: HeroText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'HeroText',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeroText>;

export const Default: Story = {
  args: {
    className: cn('text-white', font.className),
  },
};
