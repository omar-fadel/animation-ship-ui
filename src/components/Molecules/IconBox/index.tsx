import BorderContainer from '@atoms/BorderContainer';
import Typography from '@atoms/Typography';
import { TypographyProps } from '@atoms/Typography/TypographyProps';
import Stack from '@templates/Stack';
import styled from 'styled-components';

export interface IconBoxProps {
  width?: string;
  height?: string;
  color: 'primary' | 'secondary' | 'white' | 'black';
  text: string;
  icon: React.ReactNode;
  textProps?: Omit<TypographyProps, 'children'>;
}
const StyledBorderContainer = styled(BorderContainer)<
  Omit<IconBoxProps, 'icon' | 'text'>
>`
  width: ${(props) => props.width || '3.875rem'};
  height: ${(props) => props.height || '4.1875rem'};
`;

const IconBox: React.FC<IconBoxProps> = ({
  height,
  width,
  color,
  icon,
  text,
  textProps = {
    variant: 'body1',
    align: 'center',
  },
}) => {
  return (
    <Stack justifyEnd={false}>
      <StyledBorderContainer color={color} width={width} height={height}>
        {icon}
      </StyledBorderContainer>
      <Typography {...textProps} color={color}>
        {text}
      </Typography>
    </Stack>
  );
};

export default IconBox;
