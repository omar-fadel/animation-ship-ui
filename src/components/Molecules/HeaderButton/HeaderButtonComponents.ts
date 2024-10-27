import clsx from 'clsx';
import styled from 'styled-components';

export interface HeaderButtonProps {
  id?: string;
  isActive: boolean;
  text: string;
  onClick: (id?: string) => void;
}

const isActiveClassName = 'bg-primary-main font-bold text-white';

const normalClassName = ' text-black hover:bg-primary-light';

const commonClassName =
  'transition-all duration-300 ease-in-out px-6 py-2 rounded-full';

export const StyledHeaderButton = styled.button.attrs<
  Pick<HeaderButtonProps, 'isActive'>
>((props) => ({
  className: clsx(
    commonClassName,
    {
      [`${isActiveClassName}`]: props.isActive,
      [`${normalClassName}`]: !props.isActive,
    },
    props.className
  ),
}))``;
