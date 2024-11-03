import Divider from '@atoms/Divider';
import Typography from '@atoms/Typography';
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
}

const Calendar: React.FC<CalendarProps> = ({
  onChangeSelectedDate,
  onChangeTime,
  selectedDate,
  selectedTime,
  timeHeader,
  times,
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
    <div className="flex flex-col items-center justify-center gap-[2rem] rounded-2xl bg-primary-main p-[1rem]">
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
          selectedDate={selectedDate}
        />
      </div>
      <Divider width="40%" height={'0.5rem'} color="white" />
      <Typography color="white" variant="h5">
        {timeHeader}
      </Typography>
      <TimeSelection
        color="white"
        selectedTime={selectedTime}
        onChangeSelectedTime={onChangeTime}
        times={times}
      />
    </div>
  );
};

export default Calendar;
