import type { Meta, StoryObj } from '@storybook/react';
import { PartnerCard } from './partner-card';

const meta: Meta<typeof PartnerCard> = {
  title: 'Components/Partners/PartnerCard',
  component: PartnerCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'PartnerCard',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PartnerCard>;

export const Default: Story = {
  args: {
    name: 'TechSphere',
    imgSrc: '/assets/partners/p-10.svg',
  },
};
