import Icons from '@atoms/Icons';
import Overlay from '@atoms/Overlay';
import Typography from '@atoms/Typography';
import ClickableIcon from '@molecules/ClickableIcon';
import { HeaderListProps } from '@organisms/HeaderList';
import EndChildren from '@templates/EndChildren';
import Stack from '@templates/Stack';
import clsx from 'clsx';
import { useCallback, useState } from 'react';

const HeaderMenu: React.FC<HeaderListProps> = ({
  activeItem,
  items,
  onChangeActiveItem,
  buttonClassName,
  containerClassName,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setShowMenu((s) => !s);
  }, []);

  return (
    <EndChildren
      className={clsx(
        'relative flex w-full px-[1rem] sm:hidden',
        containerClassName
      )}
    >
      <Icons iconName="Close" className="fill-black " />
      <ClickableIcon
        buttonClassName={buttonClassName}
        onClick={handleToggleMenu}
        color="primary"
        iconName="Hamburger"
      />
      <Overlay open={showMenu} color="primary">
        <Stack>
          {items.map((item) => (
            <button>
              <Typography variant="h4">{item.text}</Typography>
            </button>
          ))}
        </Stack>
      </Overlay>
    </EndChildren>
  );
};

export default HeaderMenu;
