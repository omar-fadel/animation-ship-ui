import styled from 'styled-components';

export interface StackProps {
  className?: string;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}
const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: ${(props) => props.justify ?? 'flex-start'};
`;

export default Stack;
