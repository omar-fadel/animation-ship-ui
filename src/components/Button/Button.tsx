import styled from 'styled-components';

export interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
  @apply rounded px-4 py-2;
`;
const Button: React.FC<ButtonProps> = ({ label }) => {
  return <StyledButton className="bg-teal-400">{label}</StyledButton>;
};

export default Button;
