import clsx from 'clsx';
import { WithClassName } from '@customTypes/WithClassName';
import Divider from '@atoms/Divider';
import { useState } from 'react';

export interface HeaderButtonProps extends WithClassName {
  id?: string;
  isActive: boolean;
  text: string;
  onClick: (id?: string) => void;
  disableUnderline?: boolean;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  isActive,
  onClick,
  text,
  id,
  className,
  disableUnderline,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOnMouseOver = () => {
    setIsHovered(true);
  };

  const handleOnMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col"
      onMouseLeave={handleOnMouseOut}
      onMouseOver={handleOnMouseOver}
    >
      <button
        onClick={() => {
          onClick(id);
        }}
        className={clsx(
          'px-6 py-2 text-black',
          {
            'font-black': isActive,
          },
          className
        )}
      >
        {text}
      </button>
      {!disableUnderline ? (
        <Divider
          width={isHovered ? '100%' : '0'}
          height={'0.25rem'}
          color="primary"
          className="transition-all duration-300 ease-in"
        />
      ) : null}
    </div>
  );
};

export default HeaderButton;
