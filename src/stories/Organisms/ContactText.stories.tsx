import { Meta, StoryObj } from '@storybook/react';
import ContactText from '@organisms/ContactText';

const meta = {
  title: 'Organisms/ContactText',
  component: ContactText,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof ContactText>;

export default meta;

export const Email: StoryObj<typeof meta> = {
  args: {
    text: 'info@primex.com',
    type: 'email',
    color: 'primary',
  },
};
