import Contact from '@molecules/Contact';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Contact',
  component: Contact,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    address: '1234 Elm Street',
    email: 'omar.fadel@gmail.com',
    number: '123-456-7890',
    mapHref: 'https://www.google.com/maps',
  },
} satisfies Meta<typeof Contact>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    color: 'primary',
  },
};

export const Secondary: StoryObj<typeof meta> = {
  args: {
    color: 'secondary',
  },
};

export const Black: StoryObj<typeof meta> = {
  args: {
    color: 'black',
  },
};

export const White: StoryObj<typeof meta> = {
  args: {
    color: 'white',
  },
};

export const Grey: StoryObj<typeof meta> = {
  args: {
    color: 'grey',
  },
};
