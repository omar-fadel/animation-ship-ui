import ConditionalRender from '@atoms/ConditionalRender';
import Color from '@customTypes/Color';
import Stack from '@templates/Stack';
import ContactText from '@molecules/ContactText';

export interface ContactProps {
  number?: string;
  email?: string;
  address?: string;
  mapHref?: string;
  color: Color;
}

const Contact: React.FC<ContactProps> = ({
  number,
  email,
  address,
  color,
  mapHref,
}) => {
  return (
    <Stack gap="2rem">
      <ConditionalRender condition={!!number}>
        <a href={`tel:${number}`}>
          <ContactText type="phone" color={color} text={number!} />
        </a>
      </ConditionalRender>
      <ConditionalRender condition={!!email}>
        <a href={`mailto:${email}`}>
          <ContactText type="email" color={color} text={email!} />
        </a>
      </ConditionalRender>
      <ConditionalRender condition={!!address && !!mapHref}>
        <a href={mapHref}>
          <ContactText type="location" color={color} text={address!} />
        </a>
      </ConditionalRender>
    </Stack>
  );
};

export default Contact;
