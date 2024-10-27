import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';

export interface ContainerProps {
  backgroundImage: string;
  backgroundColor?: 'primary' | 'secondary' | 'white' | 'black' | 'grey';
  className?: string;
  childrenClassName?: string;
  children: React.ReactNode;
}

const BigContainer = styled.div.attrs<Pick<ContainerProps, 'backgroundColor'>>(
  (props) => ({
    className: clsx(
      'flex w-screen justify-center',
      {
        'bg-primary-main': props.backgroundColor === 'primary',
        'bg-secondary-main': props.backgroundColor === 'secondary',
        'bg-white': props.backgroundColor === 'white',
        'bg-black': props.backgroundColor === 'black',
        'bg-grey-light': props.backgroundColor === 'grey',
      },
      props.className
    ),
  })
)``;

const ChildrenContainer = styled.div<Omit<ContainerProps, 'backgroundColor'>>`
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
  backgroundColor,
  childrenClassName,
}) => {
  return (
    <BigContainer backgroundColor={backgroundColor} className={className}>
      <ChildrenContainer
        childrenClassName={childrenClassName}
        backgroundImage={backgroundImage}
      >
        {children}
      </ChildrenContainer>
    </BigContainer>
  );
};
