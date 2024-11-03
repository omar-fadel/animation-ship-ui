import { HeaderListProps } from '@organisms/HeaderList';
import EndChildren from '@templates/EndChildren';
import { useState } from 'react';

const HeaderMenu: React.FC<HeaderListProps> = ({
  activeItem,
  items,
  onChangeActiveItem,
  buttonClassName,
  containerClassName,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  return <EndChildren>
    
  </EndChildren>;
};

export default HeaderMenu;
