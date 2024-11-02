// import clsx from 'clsx';
// import styled from 'styled-components';

import clsx from 'clsx';
import React, { useMemo } from 'react';
import Color from 'src/types/Color';

export interface BorderContainerProps {
  className?: string;
  color: Color;
  children: React.ReactNode;
}
const BorderContainer: React.FC<BorderContainerProps> = ({
  color,
  className: classNameProp,
}) => {
  const className = useMemo(() => {
    return clsx(
      `flex items-center justify-center rounded-lg border-2`,
      {
        'border-primary-main': color === 'primary',
        'border-secondary-main': color === 'secondary',
        'border-black': color === 'black',
        'border-white': color === 'white',
      },
      classNameProp
    );
  }, [color, classNameProp]);
  return <div className={className}></div>;
};

export default BorderContainer;
