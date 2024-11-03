import { Meta, StoryObj } from '@storybook/react';
import EndChildren from '@templates/EndChildren';

const meta = {
  title: 'Templates/EndChildren',
  component: EndChildren,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof EndChildren>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: <div className="h-32 w-32 rounded-sm bg-black" />,
    className: 'bg-red-400',
  },
};
