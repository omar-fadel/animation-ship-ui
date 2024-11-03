import SocialMediaContactInfo from '@molecules/SocialMediaContactInfo';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/SocialMediaContactInfo',
  component: SocialMediaContactInfo,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    color: 'white',
    availableSocialMedia: [
      {
        href: 'https://www.linkedin.com',
        socialMedia: 'linkedin',
      },
      {
        href: 'https://www.snapchat.com',
        socialMedia: 'snapchat',
      },
      {
        href: 'https://x.com',
        socialMedia: 'x',
      },
      {
        href: 'https://www.facebook.com',
        socialMedia: 'facebook',
      },
      {
        href: 'https://www.instagram.com',
        socialMedia: 'instagram',
      },
    ],
  },
} satisfies Meta<typeof SocialMediaContactInfo>;

export default meta;

export const Primary: StoryObj<typeof meta> = {};
