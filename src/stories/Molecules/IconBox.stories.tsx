import IconBox from '@molecules/IconBox';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/IconBox',
  component: IconBox,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof IconBox>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    color: 'primary',
    text: 'Primary',
    icon: <div className="h-[16px] w-[16px] bg-green-400" />,
  },
};
