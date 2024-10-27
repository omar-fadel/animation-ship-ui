import styled from 'styled-components';
import { TypographyProps } from './TypographyProps';
import clsx from 'clsx';

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
const mapVariantToComponent = {
  h1: styled.h1,
  h2: styled.h2,
  h3: styled.h3,
  h4: styled.h4,
  h5: styled.h5,
  h6: styled.h6,
  body1: styled.p,
  body2: styled.p,
};

const StyledTypography = (variants: Variants) =>
  mapVariantToComponent[variants].attrs<TypographyProps>((props) => ({
    className: clsx(props.className, {
      'text-h1': props.variant === 'h1',
      'text-h2': props.variant === 'h2',
      'text-h3': props.variant === 'h3',
      'text-h4': props.variant === 'h4',
      'text-h5': props.variant === 'h5',
      'text-h6': props.variant === 'h6',
      'text-body1': props.variant === 'body1',
      'text-body2': props.variant === 'body2',
      'text-primary-main': props.color === 'primary',
      'text-secondary-main': props.color === 'secondary',
      'text-left': props.align === 'left',
      'text-center': props.align === 'center',
      'text-right': props.align === 'right',
      'font-bold': props.bold === 'true',
      'text-white': props.color === 'white',
      'text-black': props.color === 'black',
    }),
  }))``;

export default StyledTypography;
