import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import { ContainerVariant } from 'src/types/ContainerVariant';

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
      className={clsx('grid grid-cols-10', className)}
    >
      <VariableContainerComponent
        component={startComponentElement}
        className={clsx(
          'col-span-3 flex items-center',
          startComponentContainerClassName
        )}
      >
        {startComponent}
      </VariableContainerComponent>
      <VariableContainerComponent
        component={middleComponentElement}
        className={clsx(
          'col-span-6 flex justify-center gap-[1rem]',
          middleComponentContainerClassName
        )}
      >
        {middleComponent}
      </VariableContainerComponent>
      <VariableContainerComponent
        component={endComponentElement}
        className={clsx(
          'col-span-1 flex items-center justify-end',
          endComponentContainerClassName
        )}
      >
        {endComponent}
      </VariableContainerComponent>
    </VariableContainerComponent>
  );
};

export default ThreeColumnFullSizeMid;
