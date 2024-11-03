import { Decorator } from '@storybook/react';

const RtlDecorator: Decorator = (Story) => (
  <div dir="rtl">
    <Story />
  </div>
);

export default RtlDecorator;
