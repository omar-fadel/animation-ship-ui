import React from 'react';
import FacebookIcon from '@icons/facebook.svg?react';
import InstagramIcon from '@icons/instagram.svg?react';
import XIcon from '@icons/x.svg?react';
import LinkedinIcon from '@icons/linkedIn.svg?react';
import SnapchatIcon from '@icons/snapchat.svg?react';
import clsx from 'clsx';
import Color from 'src/types/Color';

export interface SocialMediaIconProps {
  icon: 'facebook' | 'instagram' | 'x' | 'linkedin' | 'snapchat';
  color?: Color;
  href: string;
  iconClassName?: string;
  anchorClassName?: string;
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
  anchorClassName,
  iconClassName,
}) => {
  const IconComponent = iconMap[icon];
  const className = clsx(
    'transition-all duration-300 ease-in-out hover:scale-110',
    {
      'fill-white hover:fill-primary-main': color === 'white',
      'fill-black hover:fill-grey-main': color === 'black',
      'fill-primary-main hover:fill-primary-light': color === 'primary',
      'fill-secondary-main hover:fill-secondary-light': color === 'secondary',
    }
  );
  return (
    <a
      style={{ width: '1.5rem', height: '1.5rem', display: 'block' }}
      href={href}
      className={clsx('w-fit', anchorClassName)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconComponent
        className={clsx(className, iconClassName)}
        style={{
          width: '1.5rem',
          height: '1.5rem',
        }}
      />
    </a>
  );
};

export default SocialMediaIcon;
