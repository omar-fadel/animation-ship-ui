import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import { ContainerVariant } from '@customTypes/ContainerVariant';
import { WithClassName } from '@customTypes/WithClassName';

export interface StackProps extends WithClassName {
  component?: ContainerVariant;
  children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({
  children,
  className,
  component = 'div',
}) => {
  return (
    <VariableContainerComponent
      className={clsx('flex flex-col gap-[1.25rem]', className)}
      component={component}
    >
      {children}
    </VariableContainerComponent>
  );
};

export default Stack;
