import Divider from '@atoms/Divider';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  args: {
    color: 'primary',
    component: 'div',
    height: '0.125rem',
    width: '5rem',
  },
} satisfies Meta<typeof Divider>;

export default meta;

export const Primary: StoryObj<typeof meta> = {};
