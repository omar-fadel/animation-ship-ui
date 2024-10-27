import clsx from 'clsx';
import styled from 'styled-components';

export interface BorderContainerProps {
  className?: string;
  color: 'primary' | 'secondary' | 'black' | 'white';
}

const BorderContainer = styled.div.attrs<BorderContainerProps>((props) => ({
  className: clsx(
    `flex items-center justify-center rounded-lg border-2`,
    {
      'border-primary-main': props.color === 'primary',
      'border-secondary-main': props.color === 'secondary',
      'border-black': props.color === 'black',
      'border-white': props.color === 'white',
    },
    props.className
  ),
}))``;

export default BorderContainer;
