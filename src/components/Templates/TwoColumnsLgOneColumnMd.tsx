import clsx from 'clsx';
import { ReactNode } from 'react';

export interface TwoColumnsLgOneColumnMdProps
  extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode[];
  childContainerClassName?: string;
  gap?: string;
}

const TwoColumnsLgOneColumnMd: React.FC<TwoColumnsLgOneColumnMdProps> = ({
  children,
  className,
  childContainerClassName,
  ...props
}) => {
  return (
    <div className={clsx('grid grid-cols-2', className)} {...props}>
      {children.map((child, index) => (
        <div
          key={index}
          className={clsx('col-span-2 md:col-span-1', childContainerClassName)}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default TwoColumnsLgOneColumnMd;
