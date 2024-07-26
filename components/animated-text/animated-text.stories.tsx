import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedText } from './animated-text';

const meta: Meta<typeof AnimatedText> = {
  title: 'Components/AnimatedText',
  component: AnimatedText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'AnimatedText',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AnimatedText>;

export const Default: Story = {
  args: {
    children: 'Create',
  },
};
