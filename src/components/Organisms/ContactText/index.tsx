import EmailIcon from '@icons/emailIcon.svg?react';
import PhoneIcon from '@icons/phoneIcon.svg?react';
import LocationIcon from '@icons/mapIcon.svg?react';
import Typography, { TypographyProps } from '@atoms/Typography';
import clsx from 'clsx';
import './contactText.css';
import { WithClassName } from 'src/types/WithClassName';
import Color from 'src/types/Color';
import { ContactType } from 'src/types/ContactTypes';

export interface ContactTextProps extends WithClassName {
  text: string;
  type: ContactType;
  color: Color;
  iconClassName?: string;
  textProps: Omit<TypographyProps, 'children'>;
}

const iconMap = {
  email: EmailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
};

const ContactText: React.FC<ContactTextProps> = ({
  text,
  type,
  color,
  className,
  iconClassName,
  textProps = {
    variant: 'body2',
    bold: true,
  },
}) => {
  const Icon = iconMap[type];

  return (
    <div
      className={clsx(
        'flex cursor-pointer items-center gap-[0.6875rem] transition-all duration-300 ease-in-out hover:scale-110',
        {
          contactTextWhite: color === 'white',
          contactTextBlack: color === 'black',
          contactTextPrimary: color === 'primary',
          contactTextSecondary: color === 'secondary',
        },
        className
      )}
    >
      <Icon
        id="icon"
        className={clsx(
          'w-[1rem h-[1rem]',
          {
            'fill-primary-main': color === 'primary',
            'fill-secondary-main': color === 'secondary',
            'fill-black': color === 'black',
            'fill-white': color === 'white',
          },
          iconClassName
        )}
      />
      <Typography color={color} {...textProps}>
        {text}
      </Typography>
    </div>
  );
};

export default ContactText;
