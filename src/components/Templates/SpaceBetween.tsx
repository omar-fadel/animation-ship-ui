import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import { ContainerVariant } from '@customTypes/ContainerVariant';
import { WithClassName } from '@customTypes/WithClassName';

export interface SpaceBetweenProps extends WithClassName {
  children: React.ReactNode;
  component?: ContainerVariant;
  gap?: string;
}

const SpaceBetween: React.FC<SpaceBetweenProps> = ({
  children,
  component = 'div',
  className,
}) => {
  return (
    <VariableContainerComponent
      component={component}
      className={clsx('flex justify-between', className)}
    >
      {children}
    </VariableContainerComponent>
  );
};

export default SpaceBetween;
