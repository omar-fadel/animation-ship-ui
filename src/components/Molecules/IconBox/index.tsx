import BorderContainer from '@atoms/BorderContainer';
import Typography, { TypographyProps } from '@atoms/Typography';
import Stack from '@templates/Stack';
import clsx from 'clsx';

export interface IconBoxProps {
  color: 'primary' | 'secondary' | 'white' | 'black';
  text: string;
  icon: React.ReactNode;
  textProps?: Omit<TypographyProps, 'children'>;
  containerClassName?: string;
  borderContainerClassName?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  color,
  icon,
  text,
  textProps = {
    variant: 'body1',
    align: 'center',
  },
  borderContainerClassName,
  containerClassName,
}) => {
  return (
    <Stack className={containerClassName} justify="center">
      <BorderContainer
        color={color}
        className={clsx('w-[3.875rem h-[4.1875rem]', borderContainerClassName)}
      >
        {icon}
      </BorderContainer>
      <Typography {...textProps} color={color}>
        {text}
      </Typography>
    </Stack>
  );
};

export default IconBox;
