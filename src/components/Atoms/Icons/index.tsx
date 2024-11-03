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
import Close from '@icons/close.svg?react';
import Color from '@customTypes/Color';
import clsx from 'clsx';

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
  Close,
};
export type IconName = keyof typeof IconsMap;
interface Icon extends React.SVGProps<SVGSVGElement> {
  iconName: IconName;
  iconColor?: Color;
}

const Icons: React.FC<Icon> = ({
  iconName,
  className,
  iconColor,
  width = '3rem',
  height = '3rem',
  ...props
}) => {
  const Component = IconsMap[iconName];
  return (
    <Component
      className={clsx(
        `w-[${width}] h-[${height}]`,
        {
          'fill-primary-main hover:fill-primary-light': iconColor === 'primary',
          'fill-secondary-main hover:fill-secondary-dark':
            iconColor === 'secondary',
          'fill-black hover:fill-grey-main': iconColor === 'black',
          'fill-white hover:fill-grey-light': iconColor === 'white',
          'fill-grey-light hover:fill-grey-main': iconColor === 'grey',
        },
        className
      )}
      {...props}
    />
  );
};

export default Icons;
