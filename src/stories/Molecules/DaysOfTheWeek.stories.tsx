import DaysOfTheWeek from '@molecules/DaysOfTheWeek';
import { Meta, StoryObj } from '@storybook/react';
import ArabicLocaleDecorator from '../Decorators/ArabicLocaleDecorator';

const meta = {
  title: 'Molecules/DaysOfTheWeek',
  component: DaysOfTheWeek,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof DaysOfTheWeek>;

export default meta;

export const English: StoryObj<typeof meta> = {
  args: {},
};

export const Arabic: StoryObj<typeof meta> = {
  args: {},
  decorators: [ArabicLocaleDecorator],
};
