import Promotion from '@organisms/Promotion';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/Promotion',
  component: Promotion,
  parameters: {
    layout: 'centered',
  },
  args: {
    backgroundImageUrl: 'https://picsum.photos/360/360',
    title: 'Title',
    promotionText: 'Promotion Text',
    promotionIcon: 'Date',
    onPromotion: fn(),
    id: '1',
  },
} satisfies Meta<typeof Promotion>;

export default meta;

export const Primary: StoryObj<typeof meta> = {};
