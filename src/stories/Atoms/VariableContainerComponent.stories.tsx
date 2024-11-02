import VariableContainerComponent from '@atoms/VariableContainerComponent';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/VariableContainerComponent',
  component: VariableContainerComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VariableContainerComponent>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    component: 'div',
    children: 'VariableContainerComponent',
  },
};
