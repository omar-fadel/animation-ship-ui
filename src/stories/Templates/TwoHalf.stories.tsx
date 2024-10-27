import { Meta, StoryObj } from '@storybook/react';
import TwoHalf from '@templates/TwoHalfs';

const meta = {
  title: 'Templates/TwoHalf',
  component: TwoHalf,
  args: {},
} satisfies Meta<typeof TwoHalf>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    className: 'bg-red-400',
    startComponent: <div className="h-32 w-32 bg-black" />,
    endComponent: <div className="h-32 w-32 bg-green-400" />,
  },
};
