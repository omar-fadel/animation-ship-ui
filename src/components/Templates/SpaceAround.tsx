import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import { ContainerVariant } from 'src/types/ContainerVariant';
import { WithClassName } from 'src/types/WithClassName';

export interface SpaceAroundProps extends WithClassName {
  children: React.ReactNode;
  component?: ContainerVariant;
}

const SpaceAround: React.FC<SpaceAroundProps> = ({
  children,
  component = 'div',
  className,
}) => {
  return (
    <VariableContainerComponent
      component={component}
      className={clsx('flex items-center justify-around', className)}
    >
      {children}
    </VariableContainerComponent>
  );
};

export default SpaceAround;
