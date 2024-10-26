import {
  HeaderButtonProps,
  StyledHeaderButton,
} from './HeaderButtonComponents';

const HeaderButton: React.FC<HeaderButtonProps> = ({
  isActive,
  text,
  onClick,
  id,
}) => {
  return (
    <StyledHeaderButton
      onClick={() => {
        onClick(id);
      }}
      isActive={isActive}
    >
      {text}
    </StyledHeaderButton>
  );
};

export default HeaderButton;
