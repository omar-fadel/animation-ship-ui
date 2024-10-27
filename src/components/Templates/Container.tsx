import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';

export interface ContainerProps {
  backgroundImage?: string;
  backgroundcolor?: 'primary' | 'secondary' | 'white' | 'black' | 'grey';
  className?: string;
  childrenClassName?: string;
  children: React.ReactNode;
}

const BigContainer = styled.div.attrs<Pick<ContainerProps, 'backgroundcolor'>>(
  (props) => ({
    className: clsx(
      'flex w-screen justify-center',
      {
        'bg-primary-main': props.backgroundcolor === 'primary',
        'bg-secondary-main': props.backgroundcolor === 'secondary',
        'bg-white': props.backgroundcolor === 'white',
        'bg-black': props.backgroundcolor === 'black',
        'bg-grey-light': props.backgroundcolor === 'grey',
      },
      props.className
    ),
  })
)``;

const ChildrenContainer = styled.div<Omit<ContainerProps, 'backgroundcolor'>>`
  max-width: 90rem;
  width: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  backgroundImage,
  backgroundcolor,
  childrenClassName,
}) => {
  return (
    <BigContainer backgroundcolor={backgroundcolor} className={className}>
      <ChildrenContainer
        childrenClassName={childrenClassName}
        backgroundImage={backgroundImage}
      >
        {children}
      </ChildrenContainer>
    </BigContainer>
  );
};
