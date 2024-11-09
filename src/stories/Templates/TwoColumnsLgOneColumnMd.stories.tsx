import { Meta, StoryObj } from '@storybook/react';
import ArabicLocaleDecorator from '../Decorators/ArabicLocaleDecorator';
import ContainerDecorator from '../Decorators/ContainerDecorator';
import TwoColumnsLgOneColumnMd from '@templates/TwoColumnsLgOneColumnMd';
import SubscriptionCard, {
  SubscriptionCardProps,
} from '@organisms/SubscriptionCard';
import { fn } from '@storybook/test';

const meta = {
  title: 'Templates/TwoColumnsLgOneColumnMd',
  component: TwoColumnsLgOneColumnMd,
  decorators: [ArabicLocaleDecorator, ContainerDecorator],
  args: {
    className: 'gap-[4rem] px-[4rem]',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TwoColumnsLgOneColumnMd>;

export default meta;

const subscriptionCards: SubscriptionCardProps[] = [
  {
    buttonText: 'اشتركي الآن',
    title: 'اشتـــــراك شهر',
    onSubscribe: fn(),
    points: [
      'الحصول على شهر مجانا.',
      'دخول النادي طوال مواعيد العمل.',
      'مدربين معتمدين في الصالة طوال الوقت لمساعدتك.',
      'حضور اجدد الكلاسات المتنوعة الكثيرة لدينا.',
      'أحدث الأجهزة الرياضية.',
      'منطقة مخصصة للتمارين الجماعية.',
    ],
    id: '1',
    image: <img src="/images/image3.png" style={{ width: 378, height: 416 }} />,
  },
  {
    buttonText: 'اشتركي الآن',
    title: 'اشتـــــراك شهر',
    onSubscribe: fn(),
    points: [
      'الحصول على شهر مجانا.',
      'دخول النادي طوال مواعيد العمل.',
      'مدربين معتمدين في الصالة طوال الوقت لمساعدتك.',
      'حضور اجدد الكلاسات المتنوعة الكثيرة لدينا.',
      'أحدث الأجهزة الرياضية.',
      'منطقة مخصصة للتمارين الجماعية.',
    ],
    id: '2',
    image: <img src="/images/image1.png" style={{ width: 190, height: 414 }} />,
  },
  {
    buttonText: 'اشتركي الآن',
    title: 'اشتـــــراك شهر',
    onSubscribe: fn(),
    points: [
      'الحصول على شهر مجانا.',
      'دخول النادي طوال مواعيد العمل.',
      'مدربين معتمدين في الصالة طوال الوقت لمساعدتك.',
      'حضور اجدد الكلاسات المتنوعة الكثيرة لدينا.',
      'أحدث الأجهزة الرياضية.',
      'منطقة مخصصة للتمارين الجماعية.',
    ],
    id: '1',
    image: <img src="/images/image4.png" style={{ width: 334, height: 405 }} />,
  },
  {
    buttonText: 'اشتركي الآن',
    title: 'اشتـــــراك شهر',
    onSubscribe: fn(),
    points: [
      'الحصول على شهر مجانا.',
      'دخول النادي طوال مواعيد العمل.',
      'مدربين معتمدين في الصالة طوال الوقت لمساعدتك.',
      'حضور اجدد الكلاسات المتنوعة الكثيرة لدينا.',
      'أحدث الأجهزة الرياضية.',
      'منطقة مخصصة للتمارين الجماعية.',
    ],
    id: '1',
    image: <img src="/images/image2.png" style={{ width: 316, height: 446 }} />,
  },
];

export const SubscriptionCards: StoryObj<typeof meta> = {
  args: {
    children: subscriptionCards.map((card) => (
      <SubscriptionCard key={card.id} {...card} />
    )),
  },
};
