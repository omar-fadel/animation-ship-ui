import Overlay from '@atoms/Overlay';
import { Meta, StoryObj } from '@storybook/react';
import RtlDecorator from '../Decorators/RtlDecorator';

const meta = {
  title: 'Atoms/Overlay',
  component: Overlay,
  args: {
    open: true,
    children: <h1>Hello world</h1>,
  },
} satisfies Meta<typeof Overlay>;

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
    className: 'rtl',
  },
};

export const RtlPrimary: StoryObj<typeof meta> = {
  args: {
    color: 'primary',
    children: <h1>اهلا</h1>,
  },
  decorators: [RtlDecorator],
};
