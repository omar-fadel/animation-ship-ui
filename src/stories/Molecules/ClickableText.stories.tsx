import ClickableText from '@molecules/ClickableText';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/ClickableText',
  component: ClickableText,
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'Click me',
    variant: 'h1',
    onClick: fn(),
  },
} satisfies Meta<typeof ClickableText>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    color: 'primary',
  },
};

export const Secondary: StoryObj<typeof meta> = {
  args: {
    color: 'secondary',
  },
};

export const White: StoryObj<typeof meta> = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'white',
  },
};

export const Black: StoryObj<typeof meta> = {
  args: {
    color: 'black',
  },
};

export const Grey: StoryObj<typeof meta> = {
  args: {
    color: 'grey',
  },
};
