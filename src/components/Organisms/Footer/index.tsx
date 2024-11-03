import Color from '@customTypes/Color';
import SpaceBetween from '@templates/SpaceBetween';
import Stack from '@templates/Stack';

export interface FooterProps {
  followUsText: string;
  logo: React.ReactNode;
  facebookHref?: string;
  xHref?: string;
  snapchatHref?: string;
  instagramHref?: string;
  linkedinHref?: string;
  contactUsText: string;
  contactNumber?: string;
  contactEmail?: string;
  contactAddress?: string;
  reservedText: string;
  reserveDescription: string;
  buttonText?: string;
  footerColor?: Color;
  textColor?: Color;
  headerColor?: Color;
}

const Footer: React.FC<FooterProps> = ({
  contactUsText,
  followUsText,
  logo,
  reserveDescription,
  reservedText,
  buttonText,
  contactAddress,
  contactEmail,
  contactNumber,
  facebookHref,
  footerColor,
  headerColor,
  instagramHref,
  linkedinHref,
  snapchatHref,
  textColor,
  xHref,
}) => {
  return (
    <SpaceBetween className="bg-black">
      {logo}
      <Stack></Stack>
    </SpaceBetween>
  );
};

export default Footer;
