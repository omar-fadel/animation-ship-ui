import Typography from '@atoms/Typography';
import Color from '@customTypes/Color';
import CenterChildren from '@templates/CenterChildren';
import clsx from 'clsx';
import { ReactNode, useCallback } from 'react';

export interface SubscriptionCardProps {
  title: string;
  points: string[];
  image: ReactNode;
  promo?: string;
  color?: Color;
  buttonText: string;
  onSubscribe: (id: string) => void;
  id: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  points,
  image,
  color = 'primary',
  buttonText,
  onSubscribe,
  id,
}) => {
  const handleSubscribe = useCallback(() => {
    onSubscribe(id);
  }, [id, onSubscribe]);
  return (
    <div className="grid h-full grid-cols-3 grid-rows-1">
      <div className="z-10 col-start-1 col-end-2 row-start-1 flex flex-col justify-end ltr:-ml-[3rem] rtl:-mr-[3rem]">
        {image}
      </div>
      <div
        className={clsx(
          'z-0 col-start-1 col-end-4 row-start-1 flex h-full flex-col justify-end'
        )}
      >
        <div
          className={clsx('flex flex-col rounded-lg p-[2rem]', {
            'bg-primary-main': color === 'primary',
            'bg-secondary-main': color === 'secondary',
            'bg-white': color === 'white',
            'bg-black': color === 'black',
            'bg-grey-main': color === 'grey',
          })}
        >
          <div className="grid grid-cols-3">
            <div className="col-start-2 col-end-4 flex flex-col gap-[1rem] px-[1rem]">
              <Typography bold color={color} inverseColor variant="h3">
                {title}
              </Typography>
              <ul className="list-disc text-white">
                {points.map((point) => (
                  <li key={point}>
                    <Typography color={color} inverseColor variant="body2">
                      {point}
                    </Typography>
                  </li>
                ))}
              </ul>
              <CenterChildren className="p-[1rem]">
                <button
                  className="w-72 rounded-md bg-white p-4 text-h5 text-black hover:bg-black hover:text-white"
                  onClick={handleSubscribe}
                >
                  {buttonText}
                </button>
              </CenterChildren>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
