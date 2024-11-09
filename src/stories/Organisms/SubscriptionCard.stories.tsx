import SubscriptionCard from '@organisms/SubscriptionCard';
import { Meta, StoryObj } from '@storybook/react';
import ArabicLocaleDecorator from '../Decorators/ArabicLocaleDecorator';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/SubscriptionCard',
  component: SubscriptionCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [ArabicLocaleDecorator],
  args: {
    title: 'اشتـــــراك ٣ اشهر',
    buttonText: 'اشتركي الآن',
    onSubscribe: fn(),
    id: '1',
    points: [
      'الحصول على شهر مجانا.',
      'دخول النادي طوال مواعيد العمل.',
      'مدربين معتمدين في الصالة طوال الوقت لمساعدتك.',
      'حضور اجدد الكلاسات المتنوعة الكثيرة لدينا.',
      'أحدث الأجهزة الرياضية.',
      'منطقة مخصصة للتمارين الجماعية.',
    ],
  },
} satisfies Meta<typeof SubscriptionCard>;

export default meta;

export const PrimaryWithImage1: StoryObj<typeof meta> = {
  args: {
    image: <img src="/images/image1.png" style={{ width: 190, height: 414 }} />,
  },
};

export const PrimaryWithImage2: StoryObj<typeof meta> = {
  args: {
    image: <img src="/images/image2.png" style={{ width: 316, height: 446 }} />,
  },
};
