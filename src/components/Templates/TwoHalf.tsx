import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { ContainerVariant } from 'src/types/ContainerVariant';
import { WithClassName } from 'src/types/WithClassName';

export interface TwoHalfProps extends WithClassName {
  startComponent: ReactNode;
  endComponent: ReactNode;
  className?: string;
  startComponentContainerClassName?: string;
  endComponentContainerClassName?: string;
  component?: ContainerVariant;
  startComponentElement?: ContainerVariant;
  endComponentElement?: ContainerVariant;
}

const commonChildrenClassName = 'flex items-center w-full h-full';

const TwoHalf: React.FC<TwoHalfProps> = ({
  startComponent,
  endComponent,
  className,
  component = 'div',
  endComponentContainerClassName,
  endComponentElement = 'div',
  startComponentContainerClassName,
  startComponentElement = 'div',
}) => {
  return (
    <VariableContainerComponent
      component={component}
      className={clsx(
        'grid h-full grid-cols-2 grid-rows-1 gap-[3.5rem]',
        className
      )}
    >
      <VariableContainerComponent
        component={startComponentElement}
        className={clsx(
          commonChildrenClassName,
          'justify-end',
          startComponentContainerClassName
        )}
      >
        {startComponent}
      </VariableContainerComponent>
      <VariableContainerComponent
        className={clsx(
          commonChildrenClassName,
          'justify-start',
          endComponentContainerClassName
        )}
        component={endComponentElement}
      >
        {endComponent}
      </VariableContainerComponent>
    </VariableContainerComponent>
  );
};

export default TwoHalf;
