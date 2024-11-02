import SocialMediaIcon from '@atoms/SocialMediaIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/SocialMediaIcon',
  component: SocialMediaIcon,
  parameters: {
    layout: 'centered',
  },
  args: {
    color: 'primary',
  },
} satisfies Meta<typeof SocialMediaIcon>;

export default meta;

export const Facebook: StoryObj<typeof meta> = {
  args: {
    icon: 'facebook',
    href: 'https://www.facebook.com',
  },
};

export const X: StoryObj<typeof meta> = {
  args: {
    icon: 'x',
    href: 'https://www.twitter.com',
  },
};

export const Instagram: StoryObj<typeof meta> = {
  args: {
    icon: 'instagram',
    href: 'https://www.instagram.com',
  },
};

export const LinkedIn: StoryObj<typeof meta> = {
  args: {
    icon: 'linkedin',
    href: 'https://www.linkedin.com',
  },
};
