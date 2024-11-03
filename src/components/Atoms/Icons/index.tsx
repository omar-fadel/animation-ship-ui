import Cup from '@icons/cup.svg?react';
import Email from '@icons/emailIcon.svg?react';
import Facebook from '@icons/facebook.svg?react';
import Instagram from '@icons/instagram.svg?react';
import Linkedin from '@icons/linkedIn.svg?react';
import Phone from '@icons/phoneIcon.svg?react';
import Face from '@icons/faces.svg?react';
import Fist from '@icons/fist.svg?react';
import Heart from '@icons/heart.svg?react';
import Map from '@icons/mapIcon.svg?react';
import PrimeXLogo from '@icons/prime-x-logo.svg?react';
import SnapChat from '@icons/snapchat.svg?react';
import X from '@icons/x.svg?react';
import Hamburger from '@icons/hamburger.svg?react';

const IconsMap = {
  Cup,
  Email,
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Face,
  Fist,
  Heart,
  Map,
  PrimeXLogo,
  SnapChat,
  X,
  Hamburger,
};
export type IconName = keyof typeof IconsMap;
interface Icon extends React.SVGProps<SVGSVGElement> {
  iconName: IconName;
}

const Icons: React.FC<Icon> = ({ iconName, ...props }) => {
  const Component = IconsMap[iconName];
  return <Component {...props} />;
};

export default Icons;
