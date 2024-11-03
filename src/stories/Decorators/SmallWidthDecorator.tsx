import { Decorator } from '@storybook/react';
const SmallWidthDecorator: Decorator = (Story) => (
  <div style={{ width: '12.5rem' }}>{<Story />}</div>
);

export default SmallWidthDecorator;
