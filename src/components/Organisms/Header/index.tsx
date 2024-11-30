import LanguageButton from '@molecules/LanguageButton';
import HeaderList, { HeaderListProps } from '@organisms/HeaderList';
import HeaderMenu from '@organisms/HeaderMenu';
import ThreeColumnFullSizeMid from '@templates/ThreeColumnFullSizeMid';
import { ReactNode } from 'react';

export interface HeaderProps {
  logo: ReactNode;
  headerList: HeaderListProps;
  currentLanguage: 'en' | 'ar';
  onLanguageChange: () => void;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  headerList,
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <nav className="p-[2rem]">
      <ThreeColumnFullSizeMid
        startComponent={
          <button className="transition-all duration-200 ease-in">
            {logo}
          </button>
        }
        middleComponent={
          <>
            <HeaderList {...headerList} />
            <HeaderMenu {...headerList} />
          </>
        }
        endComponent={
          <LanguageButton
            language={currentLanguage}
            onClick={onLanguageChange}
          />
        }
      />
    </nav>
  );
};

export default Header;
