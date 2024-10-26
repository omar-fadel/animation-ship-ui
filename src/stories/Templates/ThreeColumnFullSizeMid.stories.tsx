import { Meta, StoryObj } from '@storybook/react';
import ThreeColumnFullSizeMid from '@templates/ThreeColumnFullSizeMid';

const meta = {
  title: 'Templates/ThreeColumnFullSizeMid',
  component: ThreeColumnFullSizeMid,
  args: {},
} satisfies Meta<typeof ThreeColumnFullSizeMid>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    startComponent: <div className="h-60 w-32 bg-black" />,
    middleComponent: <div className="h-32 bg-green-400" />,
    endComponent: <div className="h-60 w-32 bg-blue-400" />,
    className: 'bg-red-400',
  },
};
