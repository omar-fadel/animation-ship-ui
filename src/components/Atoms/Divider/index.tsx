import VariableContainerComponent from '@atoms/VariableContainerComponent';
import Color from '@customTypes/Color';
import { ContainerVariant } from '@customTypes/ContainerVariant';
import clsx from 'clsx';

export interface DividerProps {
  width: string | number;
  height: string | number;
  color?: Color;
  component?: ContainerVariant;
}

const Divider: React.FC<DividerProps> = ({
  color,
  component,
  height,
  width,
}) => {
  return (
    <VariableContainerComponent
      style={{
        width,
        height,
      }}
      component={component}
      className={clsx('rounded-lg', {
        'bg-primary-main': color === 'primary',
        'bg-secondary-main': color === 'secondary',
        'bg-black': color === 'black',
        'bg-white': color === 'white',
        'bg-grey-main': color === 'grey',
      })}
    />
  );
};

export default Divider;