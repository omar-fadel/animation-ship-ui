import Icons, { IconName } from '@atoms/Icons';
import Color from '@customTypes/Color';
import { WithClassName } from '@customTypes/WithClassName';
import clsx from 'clsx';

export interface ClickableIconProps extends WithClassName {
  onClick: (iconName?: IconName) => void;
  iconName: IconName;
  iconClassName?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  iconProps?: React.SVGProps<SVGSVGElement>;
  color: Color;
}

const ClickableIcon: React.FC<ClickableIconProps> = ({
  onClick,
  iconName,
  buttonProps = {},
  iconProps = {},
  className,
  color,
}) => {
  const { className: iconClassName, ...restOfIconProps } = iconProps;
  const { className: buttonClassName, ...restOfButtonProps } = buttonProps;
  return (
    <button
      onClick={() => {
        onClick(iconName);
      }}
      className={clsx('h-fit w-fit', className, buttonClassName)}
      {...restOfButtonProps}
    >
      <Icons
        iconName={iconName}
        iconColor={color}
        className={clsx(
          'transition-all hover:scale-110 hover:cursor-pointer',
          iconClassName
        )}
        {...restOfIconProps}
      />
    </button>
  );
};

export default ClickableIcon;
