import SocialMediaIcon from '@atoms/SocialMediaIcon';
import AvailableSocialMedia from '@customTypes/AvailableSocialMedia';
import Color from '@customTypes/Color';
import { WithClassName } from '@customTypes/WithClassName';
import SpaceBetween from '@templates/SpaceBetween';
import clsx from 'clsx';

export interface SocialMediaContactInfoProps extends WithClassName {
  availableSocialMedia: AvailableSocialMedia;
  color: Color;
}

const SocialMediaContactInfo: React.FC<SocialMediaContactInfoProps> = ({
  color,
  availableSocialMedia,
  className,
}) => {
  return (
    <SpaceBetween className={clsx('gap-[1.5rem]', className)}>
      {availableSocialMedia.map((socialMedia) => (
        <SocialMediaIcon
          key={socialMedia.href}
          color={color}
          href={socialMedia.href}
          icon={socialMedia.socialMedia}
        />
      ))}
    </SpaceBetween>
  );
};

export default SocialMediaContactInfo;
