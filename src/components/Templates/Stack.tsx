import styled from 'styled-components';

export interface StackProps {
  className?: string;
  justifyEnd: boolean;
}
const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: ${(props) => (props.justifyEnd ? 'flex-end' : 'flex-start')};
`;

export default Stack;
