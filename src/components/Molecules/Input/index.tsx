import Typography from '@atoms/Typography';
import Color from '@customTypes/Color';
import { WithClassName } from '@customTypes/WithClassName';
import clsx from 'clsx';

export interface inputProps extends React.HTMLProps<HTMLInputElement> {
  color?: Color;
  label: string;
  textColor?: Color;
  labelClassName?: string;
}

const Input: React.FC<inputProps & WithClassName> = ({
  color = 'secondary',
  label,
  textColor = 'black',
  labelClassName,
  className,
  ...props
}) => {
  return (
    <div className={clsx('relative', className)}>
      <Typography
        className={clsx(
          'absolute -top-[0.65rem] start-[0.7rem] z-10 rounded-full bg-white px-1',
          labelClassName
        )}
        variant="label"
        color={textColor}
      >
        {label}
      </Typography>
      <input
        className={clsx(
          `h-[3rem] w-full rounded-lg border-[0.20rem] px-2 text-body1 outline-none`,
          {
            [`border-secondary-main`]: color === 'secondary',
            [`border-primary-main`]: color === 'primary',
            [`border-black`]: color === 'black',
            [`border-white`]: color === 'white',
            [`border-grey-main`]: color === 'grey',
          }
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
