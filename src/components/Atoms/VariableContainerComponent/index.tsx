import { ContainerVariant } from 'src/types/ContainerVariant';

export interface VariableContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  component?: ContainerVariant;
  children?: React.ReactNode;
}

const VariableContainerComponent: React.FC<VariableContainerProps> = ({
  children,
  component = 'div',
  ...restOfProps
}) => {
  const Component = component;
  return <Component {...restOfProps}>{children}</Component>;
};

export default VariableContainerComponent;
