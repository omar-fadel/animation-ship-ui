import Button from '@molecules/Button';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/Button',
  component: Button,
  args: {
    onClick: fn(),
  },
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

export const Secondary: StoryObj<typeof meta> = {
  args: {
    text: 'احجزي موعدك المجاني',
    color: 'secondary',
  },
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    text: 'احجزي موعدك المجاني',
    disabled: true,
    color: 'secondary',
  },
};

export const White: StoryObj<typeof meta> = {
  args: {
    text: 'احجزي موعدك المجاني',
    color: 'white',
  },
};

export const Black: StoryObj<typeof meta> = {
  args: {
    text: 'احجزي موعدك المجاني',
    color: 'black',
  },
};
