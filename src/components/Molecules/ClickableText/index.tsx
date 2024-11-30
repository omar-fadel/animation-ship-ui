import Typography, { TypographyProps } from '@atoms/Typography';
import Color from '@customTypes/Color';
import { TextVariant } from '@customTypes/TextVariant';
import { WithClassName } from '@customTypes/WithClassName';
import clsx from 'clsx';

export interface ClickableTextProps extends WithClassName {
  text: string;
  onClick?: () => void;
  color: Color;
  variant: TextVariant;
  textProps?: TypographyProps;
}

const ClickableText: React.FC<ClickableTextProps> = ({
  text,
  onClick = () => {},
  color,
  className,
  textProps = {},
  variant,
}) => {
  const {
    variant: textPropsVariant,
    className: textClassName,
    ...restOfTestProps
  } = textProps;
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={className}
    >
      <Typography
        variant={textPropsVariant || variant}
        color={color}
        className={clsx(
          'transition-all duration-300 hover:cursor-pointer',
          {
            'hover:text-primary-light': color === 'primary',
            'hover:text-secondary-dark': color === 'secondary',
            'hover:text-grey-main': color === 'black',
            'hover:text-grey-light': color === 'white',
            'hover:text-black': color === 'grey',
          },
          textClassName
        )}
        {...restOfTestProps}
      >
        {text}
      </Typography>
    </button>
  );
};

export default ClickableText;
