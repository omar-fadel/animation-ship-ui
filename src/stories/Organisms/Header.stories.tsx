import Header from '@organisms/Header';
import { Meta, StoryObj } from '@storybook/react';
import Logo from '@icons/logo.svg?react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof Header>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    logo: <Logo />,
    headerList: {
      onChangeActiveItem: fn(),
      items: [
        { text: 'Home', id: 'home' },
        { text: 'About', id: 'about' },
        { text: 'Contact', id: 'contact' },
        { text: 'Contact', id: 'contact' },
        { text: 'Contact', id: 'contact' },
      ],
      activeItem: 'home',
    },
    currentLanguage: 'en',
    onLanguageChange: fn(),
  },
};
