import VariableContainerComponent from '@atoms/VariableContainerComponent';
import { ContainerVariant } from '@customTypes/ContainerVariant';
import { WithClassName } from '@customTypes/WithClassName';
import clsx from 'clsx';

export interface EndChildrenProps extends WithClassName {
  children: React.ReactNode;
  component?: ContainerVariant;
}

const EndChildren: React.FC<EndChildrenProps> = ({
  children,
  className,
  component,
}) => {
  return (
    <VariableContainerComponent
      component={component}
      className={clsx('flex items-center justify-end', className)}
    >
      {children}
    </VariableContainerComponent>
  );
};

export default EndChildren;
