import Icons, { IconName } from '@atoms/Icons';
import Typography from '@atoms/Typography';
import { useCallback } from 'react';
import './promotion.css';

export interface PromotionProps {
  backgroundImageUrl: string;
  title: string;
  promotionText: string;
  promotionIcon: IconName;
  onPromotion: (id: string) => void;
  id: string;
}

const Promotion: React.FC<PromotionProps> = ({
  backgroundImageUrl,
  promotionIcon,
  promotionText,
  onPromotion,
  id,
  title,
}) => {
  const handleClickPromotion = useCallback(() => {
    onPromotion(id);
  }, [id, onPromotion]);
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id="promotion"
      className="transition-all duration-300 ease-in-out"
    >
      <Icons
        className="promo-icon"
        iconName={promotionIcon}
        width="2rem"
        height="2rem"
      />
      <div className="promo-title w-fit px-4">
        <Typography align="center" variant="h2">
          {title}
        </Typography>
      </div>
      <button
        className="promo-button rounded-md bg-white p-4 text-h5 text-black hover:bg-black hover:text-white"
        onClick={handleClickPromotion}
      >
        {promotionText}
      </button>
    </div>
  );
};

export default Promotion;
