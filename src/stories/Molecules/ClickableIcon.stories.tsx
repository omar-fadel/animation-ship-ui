import ClickableIcon from '@molecules/ClickableIcon';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/ClickableIcon',
  component: ClickableIcon,
  parameters: {
    layout: 'centered',
  },
  args: {
    iconName: 'Hamburger',
    onClick: fn(),
  },
} satisfies Meta<typeof ClickableIcon>;

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
  parameters: {
    backgrounds: {
      default: 'dark',
    },
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
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
