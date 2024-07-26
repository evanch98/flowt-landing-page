import type { Meta, StoryObj } from '@storybook/react';
import { GridPattern } from './grid-pattern';

const meta: Meta<typeof GridPattern> = {
  title: 'Components/GridPattern',
  component: GridPattern,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'GridPattern',
    },
  },
};

export default meta;

type Story = StoryObj<typeof GridPattern>;

export const Default: Story = {};
