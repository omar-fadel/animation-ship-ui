import { ReactNode } from 'react';
import styled from 'styled-components';

const TwoHalfContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 3.5rem;
  & > :nth-child(1) {
    display: flex;
    justify-content: end;
    width: 100%;
  }
  & > :nth-child(2) {
    display: flex;
    justify-content: start;
    width: 100%;
  }
`;

const Child = styled.div<{ isStart?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isStart ? 'flex-end' : 'flex-start')};
  align-items: center;
  width: 100%;
`;

export interface TwoHalfProps {
  startComponent: ReactNode;
  endComponent: ReactNode;
  className?: string;
  startComponentClassName?: string;
  endComponentClassName?: string;
}

const TwoHalf: React.FC<TwoHalfProps> = ({
  startComponent,
  endComponent,
  className,
}) => {
  return (
    <TwoHalfContainer className={className}>
      <Child isStart>{startComponent}</Child>
      <Child>{endComponent}</Child>
    </TwoHalfContainer>
  );
};

export default TwoHalf;
