import type { Meta, StoryObj } from '@storybook/react';
import { Rubik } from 'next/font/google';
import { Logo } from './logo';

const font = Rubik({ subsets: ['latin'] });

const meta: Meta<typeof Logo> = {
  title: 'Components/Header/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'Logo',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    className: font.className,
  },
};
