import React from 'react';
import { TextComponent } from '@customTypes/TextVariant';

export interface VariableComponentProps
  extends React.HTMLProps<
    HTMLHeadingElement & HTMLLabelElement & HTMLParagraphElement
  > {
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
