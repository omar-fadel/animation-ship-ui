import Icons, { IconName } from '@atoms/Icons';
import Typography from '@atoms/Typography';
import Button from '@molecules/Button';
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
      <Typography className="promo-title" variant="h2">
        {title}
      </Typography>
      <Button
        disableHoverScale
        className="promo-button"
        color="grey"
        text={promotionText}
        onClick={handleClickPromotion}
      />
    </div>
  );
};

export default Promotion;
