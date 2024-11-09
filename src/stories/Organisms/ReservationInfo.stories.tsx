import ReservationInfo from '@organisms/ReservationInfo';
import { Meta } from '@storybook/react';
import ArabicLocaleDecorator from '../Decorators/ArabicLocaleDecorator';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/ReservationInfo',
  component: ReservationInfo,
  parameters: {
    layout: 'centered',
  },
  decorators: [ArabicLocaleDecorator],
  args: {
    formTitle: 'تفاصيلك',
    firstNameLabel: 'الاسم الأول',
    lastNameLabel: 'الاسم الاخير',
    emailLabel: 'بريدك الالكتروني',
    phoneLabel: 'الجوال',
    yearOfBirthLabel: 'سنة الميلاد',
    submitText: 'إتمام الحجز',
    onReservation: fn(),
  },
} satisfies Meta<typeof ReservationInfo>;

export default meta;

export const Primary = {
  args: {},
};
