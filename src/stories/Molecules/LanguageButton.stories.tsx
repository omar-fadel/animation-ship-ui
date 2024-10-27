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

export const EN: StoryObj<typeof meta> = {
  args: {
    language: 'EN',
  },
};

export const AR: StoryObj<typeof meta> = {
  args: {
    language: 'AR',
  },
};
