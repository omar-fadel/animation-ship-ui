import { Decorator } from '@storybook/react';
import { Container } from '@templates/Container';

const ContainerDecorator: Decorator = (Story) => (
  <Container>
    <Story />
  </Container>
);

export default ContainerDecorator;
