import BorderContainer from '@atoms/BorderContainer';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/BorderContainer',
  component: BorderContainer,
  parameters: {
    layout: 'centered',
  },
  args: {},
} as Meta<typeof BorderContainer>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    color: 'black',
    className: 'w-20 h-20',
    children: <div className="h-[16px] w-[16px] bg-green-400" />,
  },
};
