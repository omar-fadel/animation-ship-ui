import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import React from 'react';
import Color from 'src/types/Color';
import { ContainerVariant } from 'src/types/ContainerVariant';
import { WithClassName } from 'src/types/WithClassName';

export interface ContainerProps extends WithClassName {
  backgroundImage?: string;
  backgroundColor?: Color;
  component?: ContainerVariant;
  childrenContainerClassName?: string;
  childrenContainerElement?: ContainerVariant;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  backgroundImage,
  backgroundColor,
  childrenContainerClassName,
  childrenContainerElement = 'div',
  component = 'div',
}) => {
  return (
    <VariableContainerComponent
      component={component}
      className={clsx(
        'flex w-screen justify-center',
        {
          'bg-primary-main': backgroundColor === 'primary',
          'bg-secondary-main': backgroundColor === 'secondary',
          'bg-white': backgroundColor === 'white',
          'bg-black': backgroundColor === 'black',
          'bg-grey-light': backgroundColor === 'grey',
        },
        className
      )}
    >
      <VariableContainerComponent
        component={childrenContainerElement}
        className={clsx(
          'w-full max-w-[90rem] bg-cover bg-center',
          `bg-[url(${backgroundImage})]`,
          childrenContainerClassName
        )}
      >
        {children}
      </VariableContainerComponent>
    </VariableContainerComponent>
  );
};
