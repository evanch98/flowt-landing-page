import type { Meta, StoryObj } from '@storybook/react';
import { Rubik } from 'next/font/google';
import { PrimaryButton } from './primary-button';

const font = Rubik({ subsets: ['latin'] });

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/Buttons/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'Primary Button',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  args: {
    children: 'Get Started',
    className: font.className,
  },
};
