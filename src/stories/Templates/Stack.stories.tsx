import { Meta, StoryObj } from '@storybook/react';
import Stack from '@templates/Stack';

const meta = {
  title: 'Templates/Stack',
  component: Stack,
  args: {},
} as Meta<typeof Stack>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    className: 'bg-red-400 h-96 w-64',
    children: (
      <>
        <div className="h-32 w-32 bg-black" />
        <div className="h-32 w-32 bg-green-400" />
        <div className="h-32 w-32 bg-blue-400" />
      </>
    ),
  },
};
