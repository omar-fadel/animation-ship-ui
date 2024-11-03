import TimeSelection from '@molecules/TimeSelection';
import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';

const times = ['from 8 am to 2pm', 'from 2 pm to 8 pm', 'from 8 pm to 2 am'];
const meta = {
  title: 'Molecules/TimeSelection',
  component: TimeSelection,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    onChangeSelectedTime: fn(),
    times,
    selectedTime: times[0],
    color: 'white',
  },
} satisfies Meta<typeof TimeSelection>;

export default meta;

export const Primary = {};
