import Icons from '@atoms/Icons';
import Header from '@organisms/Header';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    logo: <Icons iconName="PrimeXLogo" width="178" height="29" />,
    headerList: {
      onChangeActiveItem: fn(),
      items: [
        { text: 'Home', id: 'home' },
        { text: 'About', id: 'about' },
        { text: 'Contact', id: 'contact' },
      ],
      activeItem: 'home',
    },
    currentLanguage: 'en',
    onLanguageChange: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const Mobile: StoryObj<typeof meta> = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
  },
};
