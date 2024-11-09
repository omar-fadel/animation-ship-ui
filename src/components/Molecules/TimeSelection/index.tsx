import Color from '@customTypes/Color';
import DateLocals from '@customTypes/DateLocales';
import Button from '@molecules/Button';
import SpaceBetween from '@templates/SpaceBetween';
import englishToArabicNumerals from '@utils/englishToArabicNumerals';
import clsx from 'clsx';
import React from 'react';

export interface TimeSelectionProps {
  times: string[];
  selectedTime: string;
  onChangeSelectedTime: (time: string) => void;
  color: Color;
  locale?: DateLocals;
}

const TimeSelection: React.FC<TimeSelectionProps> = ({
  color,
  onChangeSelectedTime,
  selectedTime,
  times,
  locale = 'en-us',
}) => {
  return (
    <SpaceBetween className="gap-[1rem]">
      {times.map((time) => (
        <Button
          key={time}
          color={color}
          onClick={() => onChangeSelectedTime(time)}
          text={locale === 'ar-sa' ? englishToArabicNumerals(time) : time}
          className={clsx(
            'py-6',
            {
              'border-secondary-main': color === 'white',
              'border-white': color !== 'white',
            },
            {
              'border-4': selectedTime === time,
              'border-2': selectedTime !== time,
            }
          )}
          textProps={{
            variant: 'body1',
            color: selectedTime === time ? 'secondary' : 'secondary',
            bold: true,
          }}
        />
      ))}
    </SpaceBetween>
  );
};

export default TimeSelection;
