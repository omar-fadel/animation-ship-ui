import Calendar from '@organisms/Calendar';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import dayjs from 'dayjs';
import ArabicLocaleDecorator from '../Decorators/ArabicLocaleDecorator';

const meta = {
  title: 'Organisms/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  decorators: [ArabicLocaleDecorator],
  args: {
    selectedDate: dayjs().add(1, 'month'),
    onChangeSelectedDate: fn(),
    onChangeTime: fn(),
    selectedTime: 'من 8 ص إلى 12 م',
    timeHeader: 'الوقت',
    times: ['من 8 ص إلى 12 م', 'من 12 م إلى 4 م', 'من 4 م إلى 8 م'],
  },
} satisfies Meta<typeof Calendar>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
