import clsx from 'clsx';
import styled from 'styled-components';

export interface HeaderButtonProps {
  id?: string;
  isactive: boolean;
  text: string;
  onClick: (id?: string) => void;
}

const isActiveClassName = 'bg-primary-main font-bold text-white';

const normalClassName = ' text-black hover:bg-primary-light';

const commonClassName =
  'transition-all duration-300 hover:scale-110 ease-in-out px-6 py-2 rounded-full';

export const StyledHeaderButton = styled.button.attrs<
  Pick<HeaderButtonProps, 'isactive'>
>((props) => ({
  className: clsx(
    commonClassName,
    {
      [`${isActiveClassName}`]: props.isactive,
      [`${normalClassName}`]: !props.isactive,
    },
    props.className
  ),
}))``;
