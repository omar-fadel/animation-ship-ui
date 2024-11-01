import clsx from 'clsx';
import { WithClassName } from 'src/types/WithClassName';

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
        className,
        'rounded-full px-6 py-2 transition-all duration-300 ease-in-out hover:scale-110',
        {
          'bg-primary-main font-bold text-white': isActive,
          'text-black hover:bg-primary-light': !isActive,
        }
      )}
    >
      {text}
    </button>
  );
};

export default HeaderButton;
