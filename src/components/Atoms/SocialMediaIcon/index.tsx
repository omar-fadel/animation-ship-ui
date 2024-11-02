import React from 'react';
import clsx from 'clsx';
import Color from 'src/types/Color';
import Icons, { IconName } from '@atoms/Icons';

type SocialMediaIcon = 'facebook' | 'instagram' | 'x' | 'linkedin' | 'snapchat';
export interface SocialMediaIconProps {
  icon: 'facebook' | 'instagram' | 'x' | 'linkedin' | 'snapchat';
  color?: Color;
  href: string;
  iconClassName?: string;
  anchorClassName?: string;
}

const iconMap: Record<SocialMediaIcon, IconName> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  x: 'X',
  linkedin: 'Linkedin',
  snapchat: 'SnapChat',
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  icon,
  href,
  color = 'white',
  anchorClassName,
  iconClassName,
}) => {
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
      <Icons
        name={iconMap[icon]}
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
