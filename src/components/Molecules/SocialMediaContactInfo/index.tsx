import SocialMediaIcon from '@atoms/SocialMediaIcon';
import AvailableSocialMedia from '@customTypes/AvailableSocialMedia';
import Color from '@customTypes/Color';
import SpaceBetween from '@templates/SpaceBetween';

export interface SocialMediaContactInfoProps {
  availableSocialMedia: AvailableSocialMedia;
  color: Color;
}

const SocialMediaContactInfo: React.FC<SocialMediaContactInfoProps> = ({
  color,
  availableSocialMedia,
}) => {
  return (
    <SpaceBetween gap="1rem">
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
