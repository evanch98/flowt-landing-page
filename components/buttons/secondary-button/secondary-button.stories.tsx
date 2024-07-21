import type { Meta, StoryObj } from '@storybook/react';
import { Rubik } from 'next/font/google';
import { SecondaryButton } from './secondary-button';
import { HiOutlinePlay } from 'react-icons/hi';

const font = Rubik({ subsets: ['latin'] });

const meta: Meta<typeof SecondaryButton> = {
  title: 'Components/Buttons/SecondaryButton',
  component: SecondaryButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'Secondary Button',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
  args: {
    children: 'View Demo',
    className: font.className,
    icon: HiOutlinePlay,
  },
};
