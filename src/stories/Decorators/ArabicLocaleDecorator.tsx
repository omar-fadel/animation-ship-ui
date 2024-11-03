import { Decorator } from '@storybook/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ar-sa';
import 'dayjs/locale/en';

dayjs.locale('ar-sa');

const ArabicLocaleDecorator: Decorator = (Story) => {
  return (
    <div dir="rtl">
      <Story />
    </div>
  );
};

export default ArabicLocaleDecorator;
