import React from 'react';
import { TextComponent } from '@customTypes/TextVariant';

export interface VariableComponentProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  component: TextComponent;
  children?: React.ReactNode;
}

const VariableTextComponent: React.FC<VariableComponentProps> = ({
  component,
  children,
  ...restOfProps
}) => {
  const Component = component;
  return <Component {...restOfProps}>{children}</Component>;
};

export default VariableTextComponent;
