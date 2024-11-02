import LanguageButton from '@molecules/LanguageButton';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/LanguageButton',
  component: LanguageButton,
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LanguageButton>;

export default meta;

export const En: StoryObj<typeof meta> = {
  args: {
    language: 'en',
  },
};

export const Ar: StoryObj<typeof meta> = {
  args: {
    language: 'ar',
  },
};
