import HeaderButton from '@molecules/HeaderButton';
import SpaceBetween from '@templates/SpaceBetween';
import clsx from 'clsx';

export type HeaderItem = {
  text: string;
  id: string;
};

export interface HeaderListProps {
  items: HeaderItem[];
  callToAction: HeaderItem;
  activeItem: string;
  containerClassName?: string;
  buttonClassName?: string;
  onChangeActiveItem: (id: string) => void;
}

const HeaderList: React.FC<HeaderListProps> = ({
  items,
  containerClassName,
  activeItem,
  onChangeActiveItem,
  callToAction,
}) => {
  return (
    <SpaceBetween
      className={clsx('hidden gap-[0.5rem] sm:flex', containerClassName)}
    >
      {items.map((item) => (
        <HeaderButton
          isActive={activeItem === item.id}
          key={item.id}
          id={item.id}
          onClick={() => {
            onChangeActiveItem(item.id);
          }}
          text={item.text}
        />
      ))}
      <HeaderButton
        id={callToAction.id}
        onClick={() => {
          onChangeActiveItem(callToAction.id);
        }}
        disableUnderline
        text={callToAction.text}
        isActive={false}
        className="rounded-full bg-primary-main font-black text-white hover:bg-primary-dark"
      />
    </SpaceBetween>
  );
};

export default HeaderList;
