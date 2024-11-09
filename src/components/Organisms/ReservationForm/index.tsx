import Divider from '@atoms/Divider';
import Typography from '@atoms/Typography';
import Calendar, { CalendarProps } from '@organisms/Calendar';
import ReservationInfo, {
  ReservationData,
  ReservationInfoProps,
} from '@organisms/ReservationInfo';
import CenterChildren from '@templates/CenterChildren';
import clsx from 'clsx';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import 'dayjs/locale/ar-sa';
import 'dayjs/locale/en';

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

  useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);

  const formIsVisible = useMemo(() => !!selectedTime, [selectedTime]);

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
    <div
      className={
        'grid grid-cols-6 gap-[0.5rem] rounded-3xl border-[0.25rem] border-secondary-main bg-white p-[2rem]'
      }
    >
      <CenterChildren
        className={clsx('col-span-6 flex-col gap-[0.5rem]', {
          'md:col-span-3': formIsVisible,
          'md:col-span-6': !formIsVisible,
        })}
      >
        <Typography bold variant="h3">
          {calendarTitle}
        </Typography>
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
      <CenterChildren
        className={clsx('none', {
          'md:col-span-1 md:flex': formIsVisible,
          hidden: !formIsVisible,
        })}
      >
        <Divider height={'70%'} width={'0.25rem'} color="secondary" />
      </CenterChildren>
      <CenterChildren
        className={clsx('col-span-6', {
          'md:col-span-2': formIsVisible,
          'md:hidden': !formIsVisible,
        })}
      >
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
