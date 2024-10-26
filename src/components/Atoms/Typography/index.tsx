import StyledTypography from './SyledTypography';
import { TypographyProps } from './TypographyProps';

const Typography: React.FC<TypographyProps> = ({
  variant,
  align = 'left',
  bold = false,
  color = 'black',
  children,
  className,
}) => {
  const Component = StyledTypography(variant);
  return (
    <Component
      className={className}
      variant={variant}
      align={align}
      bold={bold}
      color={color}
    >
      {children}
    </Component>
  );
};

export default Typography;
