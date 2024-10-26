import HeaderButton from '@molecules/HeaderButton';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/HeaderButton',
  component: HeaderButton,
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeaderButton>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    isActive: false,
    text: 'تيست',
    id: 'id',
  },
};
