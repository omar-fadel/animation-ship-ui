import React from 'react';
import CenteredChildren from '@templates/CenterChildren';
import Typography, { TypographyProps } from '@atoms/Typography';
import clsx from 'clsx';
import { WithClassName } from '@customTypes/WithClassName';

export interface LanguageButtonProps extends WithClassName {
  language: 'ar' | 'en';
  onClick: () => void;
  buttonClassName?: string;
  textProps?: TypographyProps;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  language,
  onClick,
  buttonClassName,
  className,
  textProps = {
    variant: 'h6',
    color: 'primary',
  },
}) => {
  return (
    <CenteredChildren className={clsx(`h-[2.375rem] w-[2.375rem]`, className)}>
      <button
        className={clsx(
          'transition-all duration-100 ease-in-out hover:scale-110',
          buttonClassName
        )}
        onClick={onClick}
      >
        <Typography {...textProps}>{language.toUpperCase()}</Typography>
      </button>
    </CenteredChildren>
  );
};

export default LanguageButton;
