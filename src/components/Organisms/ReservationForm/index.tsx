import Divider from '@atoms/Divider';
import Typography from '@atoms/Typography';
import Calendar, { CalendarProps } from '@organisms/Calendar';
import ReservationInfo, {
  ReservationData,
  ReservationInfoProps,
} from '@organisms/ReservationInfo';
import CenterChildren from '@templates/CenterChildren';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useState } from 'react';

export interface ReservationFormProps
  extends Pick<
      ReservationInfoProps,
      | 'emailLabel'
      | 'firstNameLabel'
      | 'formTitle'
      | 'inputsProps'
      | 'lastNameLabel'
      | 'phoneLabel'
      | 'yearOfBirthLabel'
      | 'submitText'
    >,
    Pick<CalendarProps, 'times' | 'timeHeader' | 'locale'> {
  onSubmit: (
    info: ReservationData & { selectedDate: string; selectedTime: string }
  ) => void;
  calendarTitle: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  emailLabel,
  firstNameLabel,
  formTitle,
  inputsProps,
  lastNameLabel,
  phoneLabel,
  submitText,
  yearOfBirthLabel,
  timeHeader,
  times,
  onSubmit,
  locale,
  calendarTitle,
}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleFormSubmit = useCallback(
    (reservationInfo: ReservationData) => {
      onSubmit({
        ...reservationInfo,
        selectedDate: selectedDate.format('DD-MM-YYYY'),
        selectedTime: selectedTime,
      });
    },
    [onSubmit, selectedDate, selectedTime]
  );

  const handleCalendarChange = useCallback((date: Dayjs) => {
    setSelectedDate(date);
  }, []);

  const handleChangeTime = useCallback((time: string) => {
    setSelectedTime(time);
  }, []);

  return (
    <div className="grid grid-cols-6 p-[2rem]">
      <CenterChildren className="col-span-6 md:col-span-3">
        <Typography variant="h3">{calendarTitle}</Typography>
        <Calendar
          onChangeSelectedDate={handleCalendarChange}
          onChangeTime={handleChangeTime}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          timeHeader={timeHeader}
          times={times}
          locale={locale}
        />
      </CenterChildren>
      <CenterChildren className="none col-span-1 md:flex">
        <Divider height={'100%'} width={'0.5rem'} color="secondary" />
      </CenterChildren>
      <CenterChildren className="col-span-6 md:col-span-2">
        <ReservationInfo
          emailLabel={emailLabel}
          firstNameLabel={firstNameLabel}
          formTitle={formTitle}
          inputsProps={inputsProps}
          lastNameLabel={lastNameLabel}
          phoneLabel={phoneLabel}
          submitText={submitText}
          yearOfBirthLabel={yearOfBirthLabel}
          onReservation={handleFormSubmit}
        />
      </CenterChildren>
    </div>
  );
};

export default ReservationForm;
