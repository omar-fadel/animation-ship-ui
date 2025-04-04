import Typography from '@atoms/Typography';
import Button from '@molecules/Button';
import AvailableSocialMedia from '@customTypes/AvailableSocialMedia';
import Color from '@customTypes/Color';
import Contact from '@molecules/Contact';
import SocialMediaContactInfo from '@molecules/SocialMediaContactInfo';

import Stack from '@templates/Stack';
import clsx from 'clsx';
import CenterChildren from '@templates/CenterChildren';
import { Container } from '@templates/Container';

export interface FooterProps {
  logo: React.ReactNode;
  textColor?: Color;
  backgroundColor?: Color;
  headerColor?: Color;
  followUs: string;
  contactUs: string;
  socialMedia: AvailableSocialMedia;
  address?: string;
  email?: string;
  number?: string;
  mapHref?: string;
  reserveNow: string;
  reserveDescription: string;
  reserveButton: string;
  reserveButtonColor?: Color;
  onReserveClick?: () => void;
  privacyPolicy?: string;
  termsAndConditions?: string;
  termsAndConditionsHref?: string;
  privacyPolicyHref?: string;
}

interface SectionProps {
  children: React.ReactNode;
  title: string;
  color: Color;
}

const Section: React.FC<SectionProps> = ({ children, title, color }) => (
  <Stack className="gap-[0.5rem]" component="section">
    <Typography color={color} variant="h6">
      {title}
    </Typography>
    {children}
  </Stack>
);

const Footer: React.FC<FooterProps> = ({
  followUs,
  logo,
  contactUs,
  backgroundColor = 'black',
  socialMedia,
  headerColor = 'primary',
  textColor = 'white',
  address,
  email,
  mapHref,
  number,
  reserveNow,
  reserveButton,
  reserveButtonColor = 'white',
  reserveDescription,
  onReserveClick = () => {},
  privacyPolicy,
  termsAndConditions,
  privacyPolicyHref,
  termsAndConditionsHref,
}) => {
  return (
    <Container backgroundColor="black">
      <div
        className={clsx(
          'grid grid-cols-1 gap-[4rem] px-[2rem] py-[4rem] md:grid-cols-2 lg:grid-cols-4',
          {
            'bg-white': backgroundColor === 'white',
            'bg-black': backgroundColor === 'black',
          }
        )}
      >
        <CenterChildren>{logo}</CenterChildren>
        <Section color={headerColor} title={followUs}>
          <SocialMediaContactInfo
            className="max-w-[12rem]"
            availableSocialMedia={socialMedia}
            color={textColor}
            privacyPolicy={privacyPolicy}
            termsAndConditions={termsAndConditions}
            privacyPolicyHref={privacyPolicyHref}
            termsAndConditionsHref={termsAndConditionsHref}
          />
        </Section>
        <Section color={headerColor} title={contactUs}>
          <Contact
            color={textColor}
            address={address}
            email={email}
            mapHref={mapHref}
            number={number}
          />
        </Section>
        <Section color={headerColor} title={reserveNow}>
          <Typography color={textColor} variant="body1">
            {reserveDescription}
          </Typography>
          <Button
            text={reserveButton}
            color={reserveButtonColor}
            onClick={onReserveClick}
          />
        </Section>
      </div>
    </Container>
  );
};

export default Footer;
