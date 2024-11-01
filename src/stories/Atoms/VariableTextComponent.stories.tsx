import VariableTextComponent from '@atoms/VariableTextComponent';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/VariableComponent',
  component: VariableTextComponent,
} satisfies Meta<typeof VariableTextComponent>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    component: 'h1',
    children: 'Hello World',
  },
};
