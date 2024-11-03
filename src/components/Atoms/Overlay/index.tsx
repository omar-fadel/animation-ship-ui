import VariableContainerComponent from '@atoms/VariableContainerComponent';
import Color from '@customTypes/Color';
import { ContainerVariant } from '@customTypes/ContainerVariant';
import { WithClassName } from '@customTypes/WithClassName';
import ClickableIcon from '@molecules/ClickableIcon';
import EndChildren from '@templates/EndChildren';
import clsx from 'clsx';

export interface Overlay extends WithClassName {
  children: React.ReactNode;
  open: boolean;
  color: Color;
  component?: ContainerVariant;
  onClose: () => void;
  closeIconClassName?: string;
}

const CloseIconColorMap: Record<Color, Color> = {
  primary: 'white',
  secondary: 'white',
  white: 'black',
  black: 'white',
  grey: 'black',
};

const Overlay: React.FC<Overlay> = ({
  children,
  open,
  color,
  component,
  className,
  onClose,
  closeIconClassName,
}) => {
  return (
    <VariableContainerComponent
      component={component}
      className={clsx(
        'fixed inset-0 z-50 h-screen w-screen transition-all duration-300 ease-in-out',
        {
          'bg-primary-main': color === 'primary',
          'bg-secondary-main': color === 'secondary',
          'bg-white': color === 'white',
          'bg-black': color === 'black',
          'bg-grey-light': color === 'grey',
          '-left-[100%]': !open,
          'rtl:left-[100%]': !open,
        },
        className
      )}
    >
      <EndChildren className="p-2">
        <ClickableIcon
          iconName="Close"
          color={CloseIconColorMap[color]}
          className={clsx(closeIconClassName)}
          onClick={onClose}
        />
      </EndChildren>
      {children}
    </VariableContainerComponent>
  );
};

export default Overlay;
