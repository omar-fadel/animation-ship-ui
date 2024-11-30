import Typography, { TypographyProps } from '@atoms/Typography';
import clsx from 'clsx';
import Color from '@customTypes/Color';
import { WithClassName } from '@customTypes/WithClassName';

export interface ButtonProps extends WithClassName {
  color: Color;
  text: string;
  textProps?: Omit<TypographyProps, 'children'>;
  onClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  color = 'white',
  text,
  textProps = {
    variant: 'h5',
    color: 'black',
  },
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'rounded px-6 py-4',
        {
          'bg-primary-main hover:bg-primary-dark':
            color === 'primary' && !disabled,
          'bg-secondary-main hover:bg-secondary-dark':
            color === 'secondary' && !disabled,
          'bg-white hover:bg-grey-light': color === 'white' && !disabled,
          'bg-black hover:bg-grey-main': color === 'black' && !disabled,
          'cursor-not-allowed bg-grey-main': disabled,
          'bg-grey-light': color === 'grey' && !disabled,
        },
        className
      )}
      color={color}
    >
      <Typography
        {...textProps}
        className={clsx(
          {
            'text-white':
              color === 'black' || color === 'primary' || color === 'secondary',
            'text-black': color === 'white',
          },
          textProps.className
        )}
      >
        {text}
      </Typography>
    </button>
  );
};

export default Button;
