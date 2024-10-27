import BorderContainer from '@atoms/BorderContainer';
import SocialMediaIcon from '@atoms/SocialMediaIcon';
import Typography from '@atoms/Typography';
import Button from '@molecules/Button/Button';
import HeaderButton from '@molecules/HeaderButton';
import IconBox from '@molecules/IconBox';
import LanguageButton from '@molecules/LanguageButton';
import ContactText from '@organisms/ContactText';
import AlignChildrenMid from '@templates/AlignChildrenMid';
import CenterChildren from '@templates/CenterChildren';
import { Container } from '@templates/Container';
import SpaceAround from '@templates/SpaceAround';
import SpaceBetween from '@templates/SpaceBetween';
import Stack from '@templates/Stack';
import ThreeColumnFullSizeMid from '@templates/ThreeColumnFullSizeMid';
import TwoHalf from '@templates/TwoHalfs';
import primeX from './themes/primeX';

const Library = {
  Atoms: {
    Typography,
    BorderContainer,
    SocialMediaIcon,
  },
  Molecules: {
    Button,
    HeaderButton,
    IconBox,
    LanguageButton,
  },
  Organisms: {
    ContactText,
  },
  Templates: {
    ThreeColumnFullSizeMid,
    AlignChildrenMid,
    CenterChildren,
    Container,
    SpaceAround,
    SpaceBetween,
    Stack,
    TwoHalf,
  },
  Themes: {
    primeX,
  },
};

export default Library;
