import HeaderButton from '@molecules/HeaderButton';
import SpaceBetween from '@templates/SpaceBetween';

export type HeaderItem = {
  text: string;
  id: string;
};

export interface HeaderListProps {
  items: HeaderItem[];
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
}) => {
  return (
    <SpaceBetween className={containerClassName}>
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
    </SpaceBetween>
  );
};

export default HeaderList;
