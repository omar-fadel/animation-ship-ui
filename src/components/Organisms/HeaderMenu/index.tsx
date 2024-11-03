import ClickableIcon from '@molecules/ClickableIcon';
import { HeaderListProps } from '@organisms/HeaderList';
import EndChildren from '@templates/EndChildren';
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
      className={clsx('flex w-full px-[1rem] sm:hidden', containerClassName)}
    >
      <ClickableIcon
        buttonClassName={buttonClassName}
        onClick={handleToggleMenu}
        color="primary"
        iconName="Hamburger"
      />
    </EndChildren>
  );
};

export default HeaderMenu;
