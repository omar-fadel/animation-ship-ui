import styled from 'styled-components';

const CenterChildren = styled.div<{ isColumn?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isColumn ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
`;

export default CenterChildren;
