import styled from 'styled-components';

export interface AlignChildrenMidProps {
  className?: string;
  gap: string;
}

const AlignChildrenMid = styled.div<AlignChildrenMidProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${(props) => props.gap ?? '3.125rem'};
`;

export default AlignChildrenMid;
