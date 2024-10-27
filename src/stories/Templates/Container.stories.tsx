import { Meta, StoryObj } from '@storybook/react';
import { Container } from '@templates/Container';

const meta = {
  title: 'Templates/Container',
  component: Container,
  args: {},
} as Meta<typeof Container>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    backgroundImage: 'https://via.placeholder.com/150',
    backgroundColor: 'primary',
    children: <div className="h-96 w-full" />,
  },
};
