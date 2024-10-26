import { useMemo } from 'react';
import StyledTypography from './SyledTypography';
import { TypographyProps } from './TypographyProps';

const Typography: React.FC<TypographyProps> = (props) => {
  const Component = useMemo(() => {
    return StyledTypography(props.variant);
  }, [props.variant]);
  return <Component {...props} />;
};

export default Typography;
