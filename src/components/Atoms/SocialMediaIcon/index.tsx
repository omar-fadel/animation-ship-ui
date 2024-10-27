import React from 'react';
import FacebookIcon from './facebook.svg?react';
import InstagramIcon from './instagram.svg?react';
import XIcon from './x.svg?react';
import LinkedinIcon from './linkedIn.svg?react';
import SnapchatIcon from './snapchat.svg?react';
import clsx from 'clsx';

export interface SocialMediaIconProps {
  icon: 'facebook' | 'instagram' | 'x' | 'linkedin' | 'snapchat';
  color?: 'primary' | 'secondary' | 'black' | 'white';
  href: string;
}

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  linkedin: LinkedinIcon,
  snapchat: SnapchatIcon,
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  icon,
  href,
  color = 'white',
}) => {
  const IconComponent = iconMap[icon];
  const className = clsx(
    'transition-all duration-300 ease-in-out hover:scale-110',
    {
      'hover:fill-primary-main fill-white': color === 'white',
      'hover:fill-grey-main fill-black': color === 'black',
      'hover:fill-primary-light fill-primary-main': color === 'primary',
      'hover:fill-secondary-light fill-secondary-main': color === 'secondary',
    }
  );
  return (
    <a
      style={{ width: '1.5rem', height: '1.5rem', display: 'block' }}
      href={href}
      className="w-fit"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconComponent
        className={className}
        style={{
          width: '1.5rem',
          height: '1.5rem',
        }}
      />
    </a>
  );
};

export default SocialMediaIcon;
