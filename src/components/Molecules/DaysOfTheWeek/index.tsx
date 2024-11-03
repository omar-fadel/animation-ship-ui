import Typography from '@atoms/Typography';
import Color from '@customTypes/Color';
import { TextVariant } from '@customTypes/TextVariant';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ar-sa';
import 'dayjs/locale/en';
import { useEffect } from 'react';
import DateLocals from '@customTypes/DateLocales';

dayjs.extend(localeData);

export interface DaysOfTheWeekProps {
  color?: Color;
  variant?: TextVariant;
  locale: DateLocals;
}

const DaysOfTheWeek: React.FC<DaysOfTheWeekProps> = ({
  color = 'white',
  variant = 'body2',
  locale,
}) => {
  useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);
  return (
    <>
      {dayjs.weekdays().map((day) => (
        <Typography variant={variant} color={color}>
          {day}
        </Typography>
      ))}
    </>
  );
};

export default DaysOfTheWeek;
