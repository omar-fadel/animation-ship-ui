import ConditionalRender from '@atoms/ConditionalRender';
import Typography from '@atoms/Typography';
import Color from '@customTypes/Color';
import ClickableIcon from '@molecules/ClickableIcon';
import ClickableText from '@molecules/ClickableText';
import SpaceBetween from '@templates/SpaceBetween';
import Stack from '@templates/Stack';

export interface ContactProps {
  number?: string;
  email?: string;
  address?: string;
  color: Color;
}

const Contact: React.FC<ContactProps> = ({ number, email, address, color }) => {
  return (
    <Stack gap="2rem">
      <ConditionalRender condition={!!number}>
        <a>
          <SpaceBetween gap="1rem">
            <ClickableIcon color={color} iconName="Phone" onClick={() => {}} />
            <ClickableText color={color} text={number!} variant="body1" />
          </SpaceBetween>
        </a>
      </ConditionalRender>
    </Stack>
  );
};

export default Contact;
