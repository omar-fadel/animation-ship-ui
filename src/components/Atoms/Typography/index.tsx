import StyledTypography from './SyledTypography';
import { TypographyProps } from './TypographyProps';

const ComponentMap = {
  h1: StyledTypography('h1'),
  h2: StyledTypography('h2'),
  h3: StyledTypography('h3'),
  h4: StyledTypography('h4'),
  h5: StyledTypography('h5'),
  h6: StyledTypography('h6'),
  body1: StyledTypography('body1'),
  body2: StyledTypography('body2'),
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  align = 'left',
  color = 'black',
  bold = false,
  children,
  className,
}) => {
  const Component = ComponentMap[variant] || ComponentMap.body1;
  return (
    <Component
      className={className}
      variant={variant}
      align={align}
      bold={bold || ''}
      color={color}
    >
      {children}
    </Component>
  );
};

export default Typography;
