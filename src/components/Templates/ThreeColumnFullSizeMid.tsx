import styled from 'styled-components';

const ThreeColumnFullSizeMidComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
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
      <div className="col-span-3 flex items-center">{startComponent}</div>
      <div className="col-span-6 flex justify-center gap-[1rem]">
        {middleComponent}
      </div>
      <div className="col-span-1 flex items-center justify-end">
        {endComponent}
      </div>
    </ThreeColumnFullSizeMidComponent>
  );
};

export default ThreeColumnFullSizeMid;
