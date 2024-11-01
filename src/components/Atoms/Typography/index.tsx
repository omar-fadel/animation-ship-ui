import VariableTextComponent from '@atoms/VariableTextComponent';
import clsx from 'clsx';
import { TextComponent, TextVariant } from 'src/types/TextVariant';

export interface TypographyProps
  extends React.ReactHTMLElement<HTMLHeadingElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'black' | 'white';
  align?: 'left' | 'center' | 'right';
  bold?: 'true' | 'false';
  className?: string;
}

const componentMap: Record<TextVariant, TextComponent> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  align,
  bold,
  className,
  color,
  ...restOfProps
}) => {
  return (
    <VariableTextComponent
      {...restOfProps}
      component={componentMap[variant]}
      className={clsx(className, {
        'text-h1': variant === 'h1',
        'text-h2': variant === 'h2',
        'text-h3': variant === 'h3',
        'text-h4': variant === 'h4',
        'text-h5': variant === 'h5',
        'text-h6': variant === 'h6',
        'text-body1': variant === 'body1',
        'text-body2': variant === 'body2',
        'text-primary-main': color === 'primary',
        'text-secondary-main': color === 'secondary',
        'text-start': align === 'left',
        'text-center': align === 'center',
        'text-end': align === 'right',
        'font-bold': bold === 'true',
        'text-white': color === 'white',
        'text-black': color === 'black',
      })}
    >
      {children}
    </VariableTextComponent>
  );
};

export default Typography;
