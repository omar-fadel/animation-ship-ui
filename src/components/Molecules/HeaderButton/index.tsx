import {
  HeaderButtonProps,
  StyledHeaderButton,
} from './HeaderButtonComponents';

const HeaderButton: React.FC<HeaderButtonProps> = ({
  isactive,
  text,
  onClick,
  id,
}) => {
  return (
    <StyledHeaderButton
      onClick={() => {
        onClick(id);
      }}
      isactive={isactive}
    >
      {text}
    </StyledHeaderButton>
  );
};

export default HeaderButton;
