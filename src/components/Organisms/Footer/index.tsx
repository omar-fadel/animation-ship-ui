import Typography from '@atoms/Typography';
import Button from '@molecules/Button';
import AvailableSocialMedia from '@customTypes/AvailableSocialMedia';
import Color from '@customTypes/Color';
import Contact from '@molecules/Contact';
import SocialMediaContactInfo from '@molecules/SocialMediaContactInfo';
import SpaceBetween from '@templates/SpaceBetween';
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
}

interface SectionProps {
  children: React.ReactNode;
  title: string;
  color: Color;
}

const Section: React.FC<SectionProps> = ({ children, title, color }) => (
  <Stack gap={'2rem'} component="section">
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
}) => {
  return (
    <Container backgroundColor="black">
      <div
        className={clsx('flex w-full flex-wrap gap-[6rem] p-[4rem]', {
          'bg-white': backgroundColor === 'white',
          'bg-black': backgroundColor === 'black',
        })}
      >
        <CenterChildren>{logo}</CenterChildren>
        <Section color={headerColor} title={followUs}>
          <SocialMediaContactInfo
            availableSocialMedia={socialMedia}
            color={textColor}
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
