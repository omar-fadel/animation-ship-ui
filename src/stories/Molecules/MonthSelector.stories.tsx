import MonthSelector from '@molecules/MonthSelector';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/MonthSelector',
  component: MonthSelector,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  //   decorators: [SmallWidthDecorator],
  args: {
    month: 'January',
    onGoNext: fn(),
    onGoPrev: fn(),
  },
} satisfies Meta<typeof MonthSelector>;

export default meta;

export const Primary: StoryObj<typeof meta> = {};
