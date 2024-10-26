import clsx from 'clsx';
import styled from 'styled-components';

export interface HeaderButtonProps {
  id?: string;
  isActive: boolean;
  text: string;
  onClick: (id?: string) => void;
}

const isActiveClassName = 'bg-primary-main font-bold text-white rounded-lg';
const normalClassName = 'px-2 py-2 text-black';
export const StyledHeaderButton = styled.button.attrs<
  Pick<HeaderButtonProps, 'isActive'>
>((props) => ({
  className: clsx(normalClassName, {
    [`${isActiveClassName}`]: props.isActive,
  }),
}))``;
