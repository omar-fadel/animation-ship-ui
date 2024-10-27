import { Meta, StoryObj } from '@storybook/react';
import Typography from '@atoms/Typography';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Typography>;

export default meta;

export const H1: StoryObj<typeof Typography> = {
  args: {
    variant: 'h1',
    children: 'Hello, World! h1',
  },
};

export const H2: StoryObj<typeof Typography> = {
  args: {
    variant: 'h2',
    children: 'Hello, World! h2',
  },
};

export const H3: StoryObj<typeof Typography> = {
  args: {
    variant: 'h3',
    children: 'Hello, World! h3',
  },
};

export const H4: StoryObj<typeof Typography> = {
  args: {
    variant: 'h4',
    children: 'Hello, World! h4',
  },
};

export const H5: StoryObj<typeof Typography> = {
  args: {
    variant: 'h5',
    children: 'Hello, World! h5',
  },
};

export const H6: StoryObj<typeof Typography> = {
  args: {
    variant: 'h6',
    children: 'Hello, World! h6',
  },
};

export const Body1: StoryObj<typeof Typography> = {
  args: {
    variant: 'body1',
    children: 'Hello, World! body1',
  },
};

export const Body2: StoryObj<typeof Typography> = {
args: {
    variant: 'body2',
    children: 'Hello, World! body2',
  },
};
