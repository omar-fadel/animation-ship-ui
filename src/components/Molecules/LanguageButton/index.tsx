import React from 'react';
import styled from 'styled-components';
import CenteredChildren from '@templates/CenterChildren';
import Typography from '@atoms/Typography';
import { TypographyProps } from '@atoms/Typography/TypographyProps';

export interface LanguageButtonProps {
  language: 'ar' | 'en';
  onClick: () => void;
  buttonClassName?: string;
  textProps?: TypographyProps;
}
const LanguageButtonContainer = styled(CenteredChildren)`
  width: 2.375rem;
  height: 2.375rem;
`;

const LanguageButton: React.FC<LanguageButtonProps> = ({
  language,
  onClick,
  buttonClassName,
  textProps = {
    variant: 'h6',
    color: 'primary',
  },
}) => {
  return (
    <LanguageButtonContainer className={buttonClassName}>
      <button
        className="transition-all duration-100 ease-in-out hover:scale-110"
        onClick={onClick}
      >
        <Typography {...textProps}>{language.toUpperCase()}</Typography>
      </button>
    </LanguageButtonContainer>
  );
};

export default LanguageButton;
