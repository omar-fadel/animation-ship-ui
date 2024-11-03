import Button from '@molecules/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Button',
  component: Button,
  args: {},
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Button>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    text: 'احجزي موعدك المجاني',
  },
};
