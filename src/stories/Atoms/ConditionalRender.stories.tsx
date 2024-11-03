import ConditionalRender from '@atoms/ConditionalRender';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/ConditionalRender',
  component: ConditionalRender,
  args: {
    children: <div className="h-32 w-32 bg-black" />,
  },
} satisfies Meta<typeof ConditionalRender>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    condition: false,
  },
};
