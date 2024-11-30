import Typography from '@atoms/Typography';
import Color from '@customTypes/Color';
import DateLocals from '@customTypes/DateLocales';
import CenterChildren from '@templates/CenterChildren';
import englishToArabicNumerals from '@utils/englishToArabicNumerals';
import clsx from 'clsx';
import dayjs, { Dayjs } from 'dayjs';
import { useMemo } from 'react';

export interface DaysNumbersProps {
  month: number;
  year: number;
  color?: Color;
  selectedDate?: Dayjs;
  buttonClassName?: string;
  onChangeSelectedDay: (day: number) => void;
  locale?: DateLocals;
}

const DaysNumbers: React.FC<DaysNumbersProps> = ({
  month,
  year,
  onChangeSelectedDay,
  selectedDate,
  color = 'white',
  buttonClassName,
  locale = 'en-us',
}) => {
  const firstDayInTheMonth = useMemo(() => {
    const date = dayjs().month(month).date(1).year(year);
    return date.day();
  }, [month, year]);

  const daysInMonth = useMemo(() => {
    return dayjs().month(month).year(year).daysInMonth();
  }, [month, year]);

  const isToday = (day: number) => {
    return (
      day === dayjs().date() &&
      month === dayjs().month() &&
      year === dayjs().year()
    );
  };

  const isActive = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.date() === day &&
      selectedDate.month() === month &&
      selectedDate.year() === year
    );
  };

  const isDisabled = (day: number) => {
    const today = dayjs();
    return (
      day < today.date() && month === today.month() && year === today.year()
    );
  };

  return (
    <>
      {Array.from({ length: firstDayInTheMonth }).map((_, index) => (
        <div className="col-span-1" key={index} />
      ))}
      {Array.from({ length: daysInMonth }).map((_, index) => (
        <CenterChildren key={`col-${index}`} className="col-span-1">
          <button
            id={`index-${index}`}
            onClick={() => {
              onChangeSelectedDay(index + 1);
            }}
            disabled={isDisabled(index + 1)}
            className={clsx(
              'h-[3rem] w-[3rem] rounded-full',
              {
                'hover:border-[0.10rem] hover:border-white': !isDisabled(
                  index + 1
                ),
              },
              {
                'border-2': isToday(index + 1),
              },
              {
                'bg-white': color === 'white' && isActive(index + 1),
                'bg-black': color === 'black' && isActive(index + 1),
                'bg-primary-main': color === 'primary' && isActive(index + 1),
                'bg-secondary-main':
                  color === 'secondary' && isActive(index + 1),
                'bg-grey-main': color === 'grey' && isActive(index + 1),
              },
              {
                'border-white': color === 'white',
                'border-black': color === 'black',
                'border-primary-main': color === 'primary',
                'border-secondary-main': color === 'secondary',
                'border-grey-main': color === 'grey',
              },
              buttonClassName
            )}
          >
            <Typography
              className={clsx(
                {
                  'text-black':
                    (color === 'white' || color === 'grey') &&
                    isActive(index + 1) &&
                    !isDisabled(index + 1),
                  'text-white':
                    (color === 'black' ||
                      color === 'primary' ||
                      color === 'secondary') &&
                    isActive(index + 1) &&
                    !isDisabled(index + 1),
                },
                {
                  'text-black': isDisabled(index + 1),
                },
                {
                  'text-white':
                    color === 'white' &&
                    !isActive(index + 1) &&
                    !isDisabled(index + 1),
                  'text-black':
                    color === 'black' &&
                    !isActive(index + 1) &&
                    !isDisabled(index + 1),
                  'text-primary-main':
                    color === 'primary' &&
                    !isActive(index + 1) &&
                    !isDisabled(index + 1),
                  'text-secondary-main':
                    color === 'secondary' &&
                    !isActive(index + 1) &&
                    !isDisabled(index + 1),
                  'text-grey-main':
                    color === 'grey' &&
                    !isActive(index + 1) &&
                    !isDisabled(index + 1),
                }
              )}
              variant="body1"
            >
              {locale === 'ar-sa'
                ? englishToArabicNumerals(index + 1)
                : index + 1}
            </Typography>
          </button>
        </CenterChildren>
      ))}
    </>
  );
};

export default DaysNumbers;
