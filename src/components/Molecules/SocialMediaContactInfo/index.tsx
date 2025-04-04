import SocialMediaIcon from '@atoms/SocialMediaIcon';
import AvailableSocialMedia from '@customTypes/AvailableSocialMedia';
import Color from '@customTypes/Color';
import { WithClassName } from '@customTypes/WithClassName';
import SpaceBetween from '@templates/SpaceBetween';
import clsx from 'clsx';

export interface SocialMediaContactInfoProps extends WithClassName {
  availableSocialMedia: AvailableSocialMedia;
  color: Color;
  privacyPolicy?: string;
  termsAndConditions?: string;
  privacyPolicyHref?: string;
  termsAndConditionsHref?: string;
}

const SocialMediaContactInfo: React.FC<SocialMediaContactInfoProps> = ({
  color,
  availableSocialMedia,
  className,
  privacyPolicy,
  termsAndConditions,
  privacyPolicyHref,
  termsAndConditionsHref,
}) => {
  return (
    <>
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
      {privacyPolicy ? (
        <div className={'mt-4 flex items-center gap-[0.8rem]'}>
          <a
            className="block cursor-pointer text-white hover:text-primary-main"
            href={privacyPolicyHref}
            target="_blank"
          >
            {privacyPolicy}
          </a>
          <a
            className="block cursor-pointer text-white hover:text-primary-main"
            href={termsAndConditionsHref}
            target="_blank"
          >
            {termsAndConditions}
          </a>
        </div>
      ) : null}
    </>
  );
};

export default SocialMediaContactInfo;
