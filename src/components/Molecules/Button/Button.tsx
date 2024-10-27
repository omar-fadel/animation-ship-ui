import Typography from '@atoms/Typography';
import { TypographyProps } from '@atoms/Typography/TypographyProps';
import clsx from 'clsx';
import styled from 'styled-components';

export interface ButtonProps {
  color: 'primary' | 'secondary' | 'white' | 'black';
  className?: string;
  text: string;
  textProps: Omit<TypographyProps, 'children'>;
  onClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => void;
}

const buttonClassName = 'rounded px-6 py-4';
const StyledButton = styled.button.attrs<Pick<ButtonProps, 'color'>>(
  (props) => ({
    className: clsx(
      buttonClassName,
      {
        'bg-primary-main hover:bg-primary-dark': props.color === 'primary',
        'bg-secondary-main hover:bg-secondary-dark':
          props.color === 'secondary',
        'hover:bg-grey-light bg-white': props.color === 'white',
        'hover:bg-grey-main bg-black': props.color === 'black',
      },
      props.className
    ),
  })
)``;

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
    <StyledButton onClick={onClick} className={className} color={color}>
      <Typography color={color === 'white' ? 'black' : 'white'} {...textProps}>
        {text}
      </Typography>
    </StyledButton>
  );
};

export default Button;
