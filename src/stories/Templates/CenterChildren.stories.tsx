import { Meta } from '@storybook/react';
import CenterChildren from '@templates/CenterChildren';

const meta = {
  title: 'Templates/CenterChildren',
  component: CenterChildren,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof CenterChildren>;

export default meta;

export const Primary = {
  args: {
    className: 'w-64 h-64 bg-red-400 ',
    children: [<div className="h-32 w-32 bg-black" />],
  },
};
