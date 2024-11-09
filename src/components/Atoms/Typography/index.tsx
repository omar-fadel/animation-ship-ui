import VariableTextComponent from '@atoms/VariableTextComponent';
import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';
import Color from '@customTypes/Color';
import { TextAlign } from '@customTypes/TextAlign';
import { TextComponent, TextVariant } from '@customTypes/TextVariant';
import { WithClassName } from '@customTypes/WithClassName';

export interface TypographyProps extends WithClassName {
  variant: TextVariant;
  color?: Color;
  align?: TextAlign;
  bold?: boolean;
  children: React.ReactNode;
  props?: HtmlHTMLAttributes<HTMLHeadingElement>;
  inverseColor?: boolean;
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
  label: 'label',
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  align,
  bold,
  className,
  color,
  props = {},
  children,
  inverseColor,
}) => {
  const { className: classNameInProps, ...restProps } = props;
  return (
    <VariableTextComponent
      {...restProps}
      component={componentMap[variant]}
      className={clsx(
        {
          'text-h1': variant === 'h1',
          'text-h2': variant === 'h2',
          'text-h3': variant === 'h3',
          'text-h4': variant === 'h4',
          'text-h5': variant === 'h5',
          'text-h6': variant === 'h6',
          'text-body1': variant === 'body1',
          'text-body2': variant === 'body2',
        },
        {
          'text-primary-main': color === 'primary' && !inverseColor,
          'text-secondary-main': color === 'secondary' && !inverseColor,
          'text-white': color === 'white' && !inverseColor,
          'text-black': color === 'black' && !inverseColor,
          'text-grey-main': color === 'grey' && !inverseColor,
        },
        {
          'text-white':
            (color === 'primary' ||
              color === 'secondary' ||
              color === 'black' ||
              color === 'grey') &&
            inverseColor,
          'text-black': color === 'white' && inverseColor,
        },
        {
          'text-start': align === 'left',
          'text-center': align === 'center',
          'text-end': align === 'right',
          'font-bold': bold,
        },
        classNameInProps,
        className
      )}
    >
      {children}
    </VariableTextComponent>
  );
};

export default Typography;
