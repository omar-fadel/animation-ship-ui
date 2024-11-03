import Icons from '@atoms/Icons';
import Footer from '@organisms/Footer';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    followUs: 'Follow Us',
    logo: <Icons iconName="PrimeXLogo" width="178" height="29" />,
    socialMedia: [
      {
        href: 'https://www.facebook.com/PrimeX',
        socialMedia: 'facebook',
      },
      {
        href: 'https://www.instagram.com/PrimeX',
        socialMedia: 'instagram',
      },
      {
        href: 'https://www.twitter.com/PrimeX',
        socialMedia: 'x',
      },
      {
        href: 'https://www.linkedin.com/PrimeX',
        socialMedia: 'linkedin',
      },
      {
        href: 'https://www.youtube.com/PrimeX',
        socialMedia: 'snapchat',
      },
    ],
    address: '1234 PrimeX Street, PrimeX City, PrimeX Country',
    email: '[email protected]',
    mapHref: 'https://www.google.com/maps',
    number: '+1234567890',
    contactUs: 'Contact Us',
    reserveButton: 'Reserve Now Your Free Appointment',
    reserveDescription: 'Reserve a table now to enjoy our delicious food',
    reserveNow: 'Reserve Now',
  },
};
