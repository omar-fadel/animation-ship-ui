import HeaderList from '@organisms/HeaderList';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/HeaderList',
  component: HeaderList,
  parameters: {
    layout: 'centered',
  },
  args: {},
} as Meta<typeof HeaderList>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    items: [
      { text: 'Home', id: 'home' },
      { text: 'About', id: 'about' },
      { text: 'Contact', id: 'contact' },
    ],
    activeItem: 'home',
  },
};
