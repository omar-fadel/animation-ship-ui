import Icons, { IconName } from '@atoms/Icons';
import Overlay from '@atoms/Overlay';
import Typography from '@atoms/Typography';
import Color from '@customTypes/Color';
import ClickableIcon from '@molecules/ClickableIcon';
import { HeaderListProps } from '@organisms/HeaderList';
import EndChildren from '@templates/EndChildren';
import Stack from '@templates/Stack';
import clsx from 'clsx';
import { useCallback, useState } from 'react';

export interface HeaderMenuProps
  extends Pick<HeaderListProps, 'activeItem' | 'items' | 'onChangeActiveItem'> {
  hamburgerIconName?: IconName;
  hamburgerIconProps?: React.SVGProps<SVGSVGElement>;
  hamburgerIconColor?: Color;
  menuContainerClassName?: string;
  overlayColor?: Color;
  textColor?: Color;
  activeBgColor?: Color;
  activeTextColor?: Color;
  menuItemClassName?: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  activeItem,
  items,
  onChangeActiveItem,
  hamburgerIconName = 'Hamburger',
  hamburgerIconProps = {},
  activeBgColor = 'white',
  menuContainerClassName,
  overlayColor = 'primary',
  textColor = 'white',
  activeTextColor = 'black',
  hamburgerIconColor = 'primary',
  menuItemClassName,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setShowMenu((s) => !s);
  }, []);

  return (
    <EndChildren
      className={clsx(
        'relative flex w-full px-[1rem] sm:hidden',
        menuContainerClassName
      )}
    >
      <ClickableIcon
        onClick={handleToggleMenu}
        color={hamburgerIconColor}
        iconName={hamburgerIconName}
        iconProps={{
          width: '2rem',
          height: '2rem',
          ...hamburgerIconProps,
        }}
      />
      <Overlay onClose={handleToggleMenu} open={showMenu} color={overlayColor}>
        <Stack className="gap-0">
          {items.map((item) => (
            <button
              onClick={() => {
                onChangeActiveItem(item.id);
              }}
            >
              <Typography
                className={clsx(
                  'my-2 p-4 transition-all duration-300 ease-in-out hover:scale-110',
                  {
                    'hover:bg-white': activeBgColor === 'white',
                    'hover:bg-black': activeBgColor === 'black',
                    'hover:bg-grey-light': activeBgColor === 'grey',
                    'hover:bg-primary-main': activeBgColor === 'primary',
                    'hover:bg-secondary-main': activeBgColor === 'secondary',
                    'bg-white text-black':
                      activeItem === item.id && activeBgColor === 'white',
                    'bg-black text-white':
                      activeItem === item.id && activeBgColor === 'black',
                    'bg-grey-light text-black':
                      activeItem === item.id && activeBgColor === 'grey',
                    'bg-primary-main text-white':
                      activeItem === item.id && activeBgColor === 'primary',
                    'bg-secondary-main text-white':
                      activeItem === item.id && activeBgColor === 'secondary',
                    'hover:text-white': activeTextColor === 'white',
                    'hover:text-black': activeTextColor === 'black',
                    'hover:text-grey-light': activeTextColor === 'grey',
                    'hover:text-primary-main': activeTextColor === 'primary',
                    'text-white':
                      activeItem !== item.id && textColor === 'white',
                    'text-black':
                      activeItem !== item.id && textColor === 'black',
                    'text-grey-light':
                      activeItem !== item.id && textColor === 'grey',
                    'text-primary-main':
                      activeItem !== item.id && textColor === 'primary',
                    'text-secondary-main':
                      activeItem !== item.id && textColor === 'secondary',
                  },
                  menuItemClassName
                )}
                variant="h2"
              >
                {item.text}
              </Typography>
            </button>
          ))}
        </Stack>
      </Overlay>
    </EndChildren>
  );
};

export default HeaderMenu;
