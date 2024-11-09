import Typography from '@atoms/Typography';
import Color from '@customTypes/Color';
import DateLocals from '@customTypes/DateLocales';
import ClickableIcon from '@molecules/ClickableIcon';
import SpaceBetween from '@templates/SpaceBetween';
import clsx from 'clsx';

export interface MonthSelectorProps {
  month: string;
  onGoNext: () => void;
  onGoPrev: () => void;
  iconColor?: Color;
  textColor?: Color;
  iconWidth?: string;
  iconHeight?: string;
  locale?: DateLocals;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({
  month,
  onGoNext,
  onGoPrev,
  iconColor = 'white',
  textColor = 'white',
  iconWidth = '1.5rem',
  iconHeight = '1.5rem',
}) => {
  return (
    <SpaceBetween className="max-w-[12rem] items-center gap-[2rem]">
      <ClickableIcon
        color={iconColor}
        iconName="Arrow"
        onClick={onGoPrev}
        iconProps={{
          width: iconWidth,
          height: iconHeight,
          className: 'rotate-90 rtl:-rotate-90',
        }}
      />
      <Typography color={textColor} variant="body1">
        {month}
      </Typography>
      <ClickableIcon
        color={iconColor}
        iconName="Arrow"
        iconClassName="-rotate-180"
        onClick={onGoNext}
        iconProps={{
          width: iconWidth,
          height: iconHeight,
          className: '-rotate-90 rtl:rotate-90',
        }}
      />
    </SpaceBetween>
  );
};

export default MonthSelector;
