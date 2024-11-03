import LanguageButton from '@molecules/LanguageButton';
import HeaderList, { HeaderListProps } from '@organisms/HeaderList';
import { Container } from '@templates/Container';
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
    <nav>
      <Container component="nav" backgroundColor="white" className="px-4 py-6">
        <ThreeColumnFullSizeMid
          startComponent={
            <button className="transition-all duration-200 ease-in hover:scale-105">
              {logo}
            </button>
          }
          middleComponent={<HeaderList {...headerList} />}
          endComponent={
            <LanguageButton
              language={currentLanguage}
              onClick={onLanguageChange}
            />
          }
        />
      </Container>
    </nav>
  );
};

export default Header;
