import DaysNumbers from '@molecules/DaysNumbers';
import { Meta, StoryObj } from '@storybook/react';
import GridDecorator from '../Decorators/GridDecorator';
import { fn } from '@storybook/test';
import dayjs from 'dayjs';

const meta = {
  title: 'Molecules/DaysNumbers',
  component: DaysNumbers,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [GridDecorator(7, 6)],
} satisfies Meta<typeof DaysNumbers>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    month: 10,
    year: 2024,
    onChangeSelectedDay: fn(),
    selectedDate: dayjs(),
  },
};
