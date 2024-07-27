import type { Meta, StoryObj } from '@storybook/react';
import { FooterColumn } from './footer-column';

const meta: Meta<typeof FooterColumn> = {
  title: 'Components/Footer/FooterColumn',
  component: FooterColumn,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'FooterColumn',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterColumn>;

export const Default: Story = {
  args: {
    title: 'Product',
    links: ['Pricing', 'Overview', 'Browse', 'Accessibility'],
  },
};

export const Badge: Story = {
  args: {
    title: 'Product',
    links: ['Pricing', 'Overview', 'Browse', 'Accessibility'],
    badge: 'Beta',
    badgeIndex: 2,
  },
};
