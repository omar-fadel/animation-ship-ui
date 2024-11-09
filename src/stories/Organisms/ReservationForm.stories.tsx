import { Meta } from '@storybook/react';
import ArabicLocaleDecorator from '../Decorators/ArabicLocaleDecorator';
import { fn } from '@storybook/test';
import ReservationForm from '@organisms/ReservationForm';

const meta = {
  title: 'Organisms/ReservationForm',
  component: ReservationForm,
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
    timeHeader: 'اختاري موعد المكالمة المناسب',
    locale: 'ar-sa',
    times: ['من ٦ ص إلى ١٢ م', 'من ١٢ م إلى ٦ م', 'من ٦ م إلى ١٢ ص'],
    onSubmit: fn(),
    calendarTitle: 'موعد الاتصال بك',
  },
} satisfies Meta<typeof ReservationForm>;

export default meta;

export const Primary = {
  args: {},
};
