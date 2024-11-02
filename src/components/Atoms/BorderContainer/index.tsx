import clsx from 'clsx';
import React, { useMemo } from 'react';
import Color from 'src/types/Color';
import { WithClassName } from 'src/types/WithClassName';

export interface BorderContainerProps extends WithClassName {
  color: Color;
  children: React.ReactNode;
}
const BorderContainer: React.FC<BorderContainerProps> = ({
  color,
  className: classNameProp,
  children,
}) => {
  const className = useMemo(() => {
    return clsx(
      `flex items-center justify-center rounded-lg border-2`,
      {
        'border-primary-main': color === 'primary',
        'border-secondary-main': color === 'secondary',
        'border-black': color === 'black',
        'border-white': color === 'white',
        'border-grey-main': color === 'grey',
      },
      classNameProp
    );
  }, [color, classNameProp]);
  return <div className={className}>{children}</div>;
};

export default BorderContainer;
