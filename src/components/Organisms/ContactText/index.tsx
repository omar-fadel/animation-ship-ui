import styled from 'styled-components';
import EmailIcon from '@icons/emailIcon.svg?react';
import PhoneIcon from '@icons/phoneIcon.svg?react';
import LocationIcon from '@icons/mapIcon.svg?react';
import Typography from '@atoms/Typography';
import clsx from 'clsx';
import './contactText.css';

const ContactTextContainer = styled.a`
  display: flex;
  gap: 0.6875rem;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export interface ContactTextProps {
  text: string;
  type: 'email' | 'phone' | 'location';
  color: 'primary' | 'secondary' | 'black' | 'white';
}

const iconMap = {
  email: EmailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
};

const ContactText: React.FC<ContactTextProps> = ({ text, type, color }) => {
  const Icon = iconMap[type];
  const className = clsx({
    contactTextWhite: color === 'white',
    contactTextBlack: color === 'black',
    contactTextPrimary: color === 'primary',
    contactTextSecondary: color === 'secondary',
  });
  const iconClassName = clsx({
    'fill-primary-main': color === 'primary',
    'fill-secondary-main': color === 'secondary',
    'fill-black': color === 'black',
    'fill-white': color === 'white',
  });

  return (
    <ContactTextContainer className={`contactText ${className}`}>
      <Icon
        id="icon"
        className={iconClassName}
        style={{ width: '1rem', height: '1rem' }}
      />
      <Typography color={color} variant="body2" bold="true">
        {text}
      </Typography>
    </ContactTextContainer>
  );
};

export default ContactText;
