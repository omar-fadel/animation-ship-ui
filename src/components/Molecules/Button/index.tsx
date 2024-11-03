import Typography, { TypographyProps } from '@atoms/Typography';
import clsx from 'clsx';
import Color from '@customTypes/Color';
import { WithClassName } from '@customTypes/WithClassName';

export interface ButtonProps extends WithClassName {
  color: Color;
  text: string;
  textProps?: TypographyProps;
  onClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => void;
}

const buttonClassName = 'rounded px-6 py-4';

const Button: React.FC<ButtonProps> = ({
  className,
  color = 'white',
  text,
  textProps = {
    variant: 'h5',
  },
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(className, buttonClassName, {
        'bg-primary-main hover:bg-primary-dark': color === 'primary',
        'bg-secondary-main hover:bg-secondary-dark': color === 'secondary',
        'bg-white hover:bg-grey-light': color === 'white',
        'bg-black hover:bg-grey-main': color === 'black',
      })}
      color={color}
    >
      <Typography color={color === 'white' ? 'black' : 'white'} {...textProps}>
        {text}
      </Typography>
    </button>
  );
};

export default Button;
