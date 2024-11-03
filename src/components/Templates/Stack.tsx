import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import { ContainerVariant } from '@customTypes/ContainerVariant';
import { WithClassName } from '@customTypes/WithClassName';

export interface StackProps extends WithClassName {
  component?: ContainerVariant;
  children: React.ReactNode;
  gap?: string;
}

const Stack: React.FC<StackProps> = ({
  children,
  className,
  component = 'div',
  gap = '1.25rem',
}) => {
  return (
    <VariableContainerComponent
      className={clsx('flex flex-col', { [`gap-[${gap}]`]: gap }, className)}
      component={component}
    >
      {children}
    </VariableContainerComponent>
  );
};

export default Stack;
