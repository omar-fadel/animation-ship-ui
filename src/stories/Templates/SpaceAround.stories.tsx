import { Meta, StoryObj } from '@storybook/react';
import SpaceAround from '@templates/SpaceAround';

const meta = {
  title: 'Templates/SpaceAround',
  component: SpaceAround,
  args: {},
} as Meta<typeof SpaceAround>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    className: 'bg-red-400 w-screen',
    children: (
      <>
        <div className="h-32 w-32 bg-black" />
        <div className="h-32 w-32 bg-green-400" />
        <div className="h-32 w-32 bg-blue-400" />
      </>
    ),
  },
};
