import Icons, { IconName } from '@atoms/Icons';
import Color from '@customTypes/Color';
import clsx from 'clsx';

export interface ClickableIconProps {
  onClick: (iconName?: IconName) => void;
  iconName: IconName;
  buttonClassName?: string;
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
  color,
}) => {
  const { className: iconClassName, ...restOfIconProps } = iconProps;
  return (
    <button
      onClick={() => {
        onClick(iconName);
      }}
      {...buttonProps}
    >
      <Icons
        iconName={iconName}
        iconColor={color}
        width="3rem"
        height="3rem"
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
