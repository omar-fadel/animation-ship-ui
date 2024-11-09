import Input from '@molecules/Input';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Label',
    onChange: fn(),
    value: 'Value',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    value: undefined,
    color: 'primary',
  },
};

export const Secondary: StoryObj<typeof meta> = {
  args: {
    value: undefined,
    color: 'secondary',
  },
};

export const Black: StoryObj<typeof meta> = {
  args: {
    value: undefined,
    color: 'black',
  },
};

export const White: StoryObj<typeof meta> = {
  args: {
    value: undefined,
    color: 'white',
  },
};

export const Grey: StoryObj<typeof meta> = {
  args: {
    value: undefined,
    color: 'grey',
  },
};
