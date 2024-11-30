import clsx from 'clsx';
import { WithClassName } from '@customTypes/WithClassName';

export interface HeaderButtonProps extends WithClassName {
  id?: string;
  isActive: boolean;
  text: string;
  onClick: (id?: string) => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  isActive,
  onClick,
  text,
  id,
  className,
}) => {
  return (
    <button
      onClick={() => {
        onClick(id);
      }}
      className={clsx(
        'px-6 py-2 text-black hover:font-black',
        {
          'font-black': isActive,
        },
        className
      )}
    >
      {text}
    </button>
  );
};

export default HeaderButton;
