import { Decorator } from '@storybook/react';

const ArabicLocaleDecorator: Decorator = (Story) => {
  return (
    <div dir="rtl">
      <Story />
    </div>
  );
};

export default ArabicLocaleDecorator;
