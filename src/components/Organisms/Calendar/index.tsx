import Divider from '@atoms/Divider';
import Icons from '@atoms/Icons';
import Typography from '@atoms/Typography';
import DateLocals from '@customTypes/DateLocales';
import DaysNumbers from '@molecules/DaysNumbers';
import DaysOfTheWeek from '@molecules/DaysOfTheWeek';
import MonthSelector from '@molecules/MonthSelector';
import TimeSelection from '@molecules/TimeSelection';
import dayjs, { Dayjs } from 'dayjs';

export interface CalendarProps {
  selectedDate: Dayjs;
  onChangeSelectedDate: (date: Dayjs) => void;
  times: string[];
  onChangeTime: (time: string) => void;
  selectedTime: string;
  timeHeader: string;
  locale?: DateLocals;
}

const Calendar: React.FC<CalendarProps> = ({
  onChangeSelectedDate,
  onChangeTime,
  selectedDate,
  selectedTime,
  timeHeader,
  times,
  locale = 'en-us',
}) => {
  const handleGoNextMonth = () => {
    const today = dayjs();
    if (selectedDate.month() - today.month() === 1) return;
    onChangeSelectedDate(selectedDate.add(1, 'month'));
  };

  const handleGoPreviousMonth = () => {
    const today = dayjs();
    if (selectedDate.month() - today.month() === -1) return;
    onChangeSelectedDate(selectedDate.subtract(1, 'month'));
  };
  return (
    <div className="relative flex flex-col items-center justify-center gap-[2rem] rounded-2xl bg-primary-main p-[1rem]">
      <Icons
        iconName="Date"
        width={'0.9375rem'}
        height={'1.0625rem'}
        className="absolute end-[1.5rem] top-[1.5rem]"
      />
      <MonthSelector
        month={selectedDate.format('MMMM')}
        onGoNext={handleGoNextMonth}
        onGoPrev={handleGoPreviousMonth}
      />
      <div className="grid w-full grid-cols-7 grid-rows-7">
        <DaysOfTheWeek className="col-span-1" color="white" />
        <DaysNumbers
          month={selectedDate.month()}
          year={selectedDate.year()}
          onChangeSelectedDay={(day) => {
            onChangeSelectedDate(selectedDate.date(day));
          }}
          locale={locale}
          selectedDate={selectedDate}
        />
      </div>
      <Divider width="40%" height={'0.5rem'} color="white" />
      <Typography color="white" variant="h5">
        {timeHeader}
      </Typography>
      <TimeSelection
        locale={locale}
        color="white"
        selectedTime={selectedTime}
        onChangeSelectedTime={onChangeTime}
        times={times}
      />
    </div>
  );
};

export default Calendar;
