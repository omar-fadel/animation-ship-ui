import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import { ContainerVariant } from 'src/types/ContainerVariant';
import { WithClassName } from 'src/types/WithClassName';

interface CenterChildrenProps extends WithClassName {
  children: React.ReactNode;
  component?: ContainerVariant;
  orientation?: 'column' | 'row';
}

const CenterChildren: React.FC<CenterChildrenProps> = ({
  children,
  className,
  component = 'div',
  orientation = 'row',
}) => {
  return (
    <VariableContainerComponent
      component={component}
      className={clsx(
        'flex items-center justify-center',
        {
          'flex-row': orientation === 'row',
          'flex-col': orientation === 'column',
        },
        className
      )}
    >
      {children}
    </VariableContainerComponent>
  );
};

export default CenterChildren;
