import Typography, { TypographyProps } from '@atoms/Typography';
import Color from '@customTypes/Color';
import Button from '@molecules/Button';
import Input, { inputProps } from '@molecules/Input';
import CenterChildren from '@templates/CenterChildren';
import clsx from 'clsx';
import React, { useMemo } from 'react';

export interface ReservationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  yearOfBirth: string;
}

export interface ReservationInfoProps extends React.HTMLProps<HTMLFormElement> {
  inputsProps?: inputProps;
  onReservation: (reservationData: ReservationData) => void;
  formTitle: string;
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  yearOfBirthLabel: string;
  submitText: string;
  submitButtonColor?: Color;
  titleProps?: TypographyProps;
}

const ReservationInfo: React.FC<ReservationInfoProps> = ({
  inputsProps = {},
  formTitle,
  className,
  emailLabel,
  firstNameLabel,
  lastNameLabel,
  phoneLabel,
  yearOfBirthLabel,
  submitText,
  onReservation,
  titleProps,
  submitButtonColor = 'secondary',
  ...props
}) => {
  const [reservationData, setReservationData] = React.useState<ReservationData>(
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      yearOfBirth: '',
    }
  );

  const isDisabled = useMemo(() => {
    return Object.values(reservationData).some((value) => value === '');
  }, [reservationData]);

  const handleFieldChange: (
    field: keyof ReservationData
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void =
    (field) => (event) => {
      setReservationData({
        ...reservationData,
        [field]: event.currentTarget.value,
      });
    };

  return (
    <form
      {...props}
      className={clsx(
        'flex w-full flex-col justify-center gap-[2rem]',
        className
      )}
      onSubmit={(event) => {
        event.preventDefault();
        onReservation(reservationData);
      }}
    >
      <Typography
        variant="h3"
        bold
        {...titleProps}
        className={clsx('text-center', titleProps?.className)}
      >
        {formTitle}
      </Typography>
      <div className="flex w-full gap-[2rem]">
        <Input
          {...inputsProps}
          className="flex-1"
          value={reservationData.firstName}
          label={firstNameLabel}
          onChange={handleFieldChange('firstName')}
        />
        <Input
          {...inputsProps}
          className="flex-1"
          value={reservationData.lastName}
          label={lastNameLabel}
          onChange={handleFieldChange('lastName')}
        />
      </div>
      <Input
        {...inputsProps}
        value={reservationData.phone}
        label={phoneLabel}
        onChange={handleFieldChange('phone')}
      />
      <Input
        {...inputsProps}
        value={reservationData.email}
        label={emailLabel}
        onChange={handleFieldChange('email')}
      />
      <Input
        {...inputsProps}
        value={reservationData.yearOfBirth}
        label={yearOfBirthLabel}
        onChange={handleFieldChange('yearOfBirth')}
      />
      <CenterChildren>
        <Button
          text={submitText}
          onClick={() => {
            onReservation(reservationData);
          }}
          className="w-[50%]"
          disabled={isDisabled}
          color={submitButtonColor}
        />
      </CenterChildren>
    </form>
  );
};

export default ReservationInfo;
