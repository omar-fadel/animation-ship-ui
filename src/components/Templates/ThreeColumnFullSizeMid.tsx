import styled from 'styled-components';

const ThreeColumnFullSizeMidComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > :nth-child(2) {
    flex-grow: 1;
  }
`;

export interface ThreeColumnFullSizeMidProps {
  startComponent: React.ReactNode;
  endComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  className?: string;
}
const ThreeColumnFullSizeMid: React.FC<ThreeColumnFullSizeMidProps> = ({
  endComponent,
  middleComponent,
  startComponent,
  className,
}) => {
  return (
    <ThreeColumnFullSizeMidComponent className={className}>
      {startComponent}
      {middleComponent}
      {endComponent}
    </ThreeColumnFullSizeMidComponent>
  );
};

export default ThreeColumnFullSizeMid;
