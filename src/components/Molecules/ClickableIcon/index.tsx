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
        className={clsx(
          'w-[3rem h-[3rem] transition-all hover:scale-110 hover:cursor-pointer',
          {
            'fill-primary-main hover:fill-primary-light': color === 'primary',
            'fill-secondary-main hover:fill-secondary-dark':
              color === 'secondary',
            'fill-black hover:fill-grey-main': color === 'black',
            'fill-white hover:fill-grey-light': color === 'white',
            'fill-grey-light hover:fill-grey-main': color === 'grey',
          },
          iconClassName
        )}
        {...restOfIconProps}
      />
    </button>
  );
};

export default ClickableIcon;
