import { Meta, StoryObj } from '@storybook/react';
import AlignChildrenMid from '@templates/AlignChildrenMid';

const meta = {
  title: 'Templates/AlignChildrenMid',
  component: AlignChildrenMid,
  args: {},
} satisfies Meta<typeof AlignChildrenMid>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    gap: '20px',
    className: 'bg-red-400',
    children: [
      <div className="h-32 w-32 bg-black" />,
      <div className="h-32 w-32 bg-green-400" />,
      <div className="h-32 w-32 bg-blue-400" />,
    ],
  },
};
