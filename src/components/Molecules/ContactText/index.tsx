import Typography, { TypographyProps } from '@atoms/Typography';
import clsx from 'clsx';
import './contactText.css';
import { WithClassName } from '@customTypes/WithClassName';
import Color from '@customTypes/Color';
import { ContactType } from '@customTypes/ContactTypes';
import Icons, { IconName } from '@atoms/Icons';

export interface ContactTextProps extends WithClassName {
  text: string;
  type: ContactType;
  color: Color;
  iconClassName?: string;
  textProps?: Omit<TypographyProps, 'children'>;
}

const iconMap: Record<ContactType, IconName> = {
  email: 'Email',
  phone: 'Phone',
  location: 'Map',
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
      <Icons
        iconName={iconMap[type]}
        height="1rem"
        width="1rem"
        id="icon"
        className={clsx(
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
