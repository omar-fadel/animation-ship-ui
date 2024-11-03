import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import { ContainerVariant } from '@customTypes/ContainerVariant';

export interface ThreeColumnFullSizeMidProps {
  startComponent: React.ReactNode;
  endComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  className?: string;
  startComponentContainerClassName?: string;
  endComponentContainerClassName?: string;
  middleComponentContainerClassName?: string;
  component?: ContainerVariant;
  startComponentElement?: ContainerVariant;
  endComponentElement?: ContainerVariant;
  middleComponentElement?: ContainerVariant;
}
const ThreeColumnFullSizeMid: React.FC<ThreeColumnFullSizeMidProps> = ({
  endComponent,
  middleComponent,
  startComponent,
  className,
  middleComponentElement = 'div',
  startComponentElement = 'div',
  endComponentElement = 'div',
  component = 'div',
  endComponentContainerClassName,
  middleComponentContainerClassName,
  startComponentContainerClassName,
}) => {
  return (
    <VariableContainerComponent
      component={component}
      className={clsx('flex items-center', className)}
    >
      <VariableContainerComponent
        component={startComponentElement}
        className={clsx(startComponentContainerClassName)}
      >
        {startComponent}
      </VariableContainerComponent>
      <VariableContainerComponent
        component={middleComponentElement}
        className={clsx(
          'flex flex-1 justify-center',
          middleComponentContainerClassName
        )}
      >
        {middleComponent}
      </VariableContainerComponent>
      <VariableContainerComponent
        component={endComponentElement}
        className={clsx(endComponentContainerClassName)}
      >
        {endComponent}
      </VariableContainerComponent>
    </VariableContainerComponent>
  );
};

export default ThreeColumnFullSizeMid;
