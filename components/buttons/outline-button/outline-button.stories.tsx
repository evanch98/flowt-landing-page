import type { Meta, StoryObj } from '@storybook/react';
import { Rubik } from 'next/font/google';
import { OutlineButton } from './outline-button';

const font = Rubik({ subsets: ['latin'] });

const meta: Meta<typeof OutlineButton> = {
  title: 'Components/Buttons/OutlineButton',
  component: OutlineButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'Outline Button',
    },
  },
};

export default meta;

type Story = StoryObj<typeof OutlineButton>;

export const Default: Story = {
  args: {
    children: 'Get Started',
    className: font.className,
  },
};
