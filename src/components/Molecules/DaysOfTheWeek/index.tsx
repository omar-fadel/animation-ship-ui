import Typography from '@atoms/Typography';
import Color from '@customTypes/Color';
import { TextVariant } from '@customTypes/TextVariant';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ar-sa';
import 'dayjs/locale/en';
import { WithClassName } from '@customTypes/WithClassName';

dayjs.extend(localeData);

export interface DaysOfTheWeekProps extends WithClassName {
  color?: Color;
  variant?: TextVariant;
}

const DaysOfTheWeek: React.FC<DaysOfTheWeekProps> = ({
  color = 'white',
  variant = 'body2',
  className,
}) => {
  return (
    <>
      {dayjs.weekdays().map((day) => (
        <Typography
          key={`day-${day}`}
          align="center"
          className={className}
          variant={variant}
          color={color}
        >
          {day}
        </Typography>
      ))}
    </>
  );
};

export default DaysOfTheWeek;
