import clsx from 'clsx';
import styled from 'styled-components';

export interface ButtonProps {
  isRed: boolean;
  children: string;
}

const styledClassName = 'bg-red-500';
const greenClassName = 'bg-green-500';

const StyledButton = styled.button.attrs<ButtonProps>((props) => ({
  className: clsx({
    [`${styledClassName}`]: props.isRed,
    [`${greenClassName}`]: !props.isRed,
  }),
}))``;

const Button: React.FC<ButtonProps> = ({ children, isRed }) => {
  return <StyledButton isRed={isRed}>{children}</StyledButton>;
};

export default Button;
