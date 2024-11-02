// import styled from 'styled-components';

import VariableContainerComponent from '@atoms/VariableContainerComponent';
import clsx from 'clsx';
import { ContainerVariant } from '@customTypes/ContainerVariant';
import { WithClassName } from '@customTypes/WithClassName';

export interface AlignChildrenMidProps extends WithClassName {
  children: React.ReactNode;
  component?: ContainerVariant;
}

const AlignChildrenMid: React.FC<AlignChildrenMidProps> = ({
  className,
  children,
  component = 'div',
}) => {
  return (
    <VariableContainerComponent
      component={component}
      className={clsx('flex flex-row justify-center gap-[3.125rem]', className)}
    >
      {children}
    </VariableContainerComponent>
  );
};

export default AlignChildrenMid;
