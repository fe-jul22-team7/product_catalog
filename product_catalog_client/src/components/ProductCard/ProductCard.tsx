import React, { useState } from 'react';
import './ProductCard.scss';
import {useContext} from 'react';
import FavoriteContext from '../../FavoriteContext';
import { Phone } from '../../types/Phone';
import { BASE_URL } from '../../utils/fetchClient';

type PhoneType = {
  phone: Phone
};

export const ProductCard: React.FC<PhoneType> = ({ phone }) => {
  const {addToFavorite} = useContext(FavoriteContext);
  const [buttonClass, setButtonClass] = useState('card__link');
  const [isMenuCliked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    if (!isMenuCliked) {
      setButtonClass('card__link--active');
      addToFavorite(
        id, name, price, fullPrice, capacity, screen, ram, image);
    } 

    setIsMenuClicked(true);
  };

  const {id, name, price, fullPrice, capacity, screen, ram, image} = phone;

  
  return (
    <div className="card">
      <div className="card__content">
        <img 
          src={`${BASE_URL}/${image}`}
          className="card__image"
          alt="iphone"
        />
        <div className="card__name">
          {name} (iMT9G2FS/A)
        </div>
        <div className="card__price">
          <div className="card__price-new">${price}</div>
          <div className="card__price-old">${fullPrice}</div>
        </div>
        <div className="card__characteristics">
          <div className="card__description">
            <div className="card__description-title">Screen</div>
            <div className="card__description-value">{screen}</div>
          </div>
          <div className="card__description">
            <div className="card__description-title">Capacity</div>
            <div className="card__description-value">{capacity}</div>
          </div>
          <div className="card__description">
            <div className="card__description-title">RAM</div>
            <div className="card__description-value">{ram}</div>
          </div>
        </div>
        <div className="card__buttons">
          <div className="card__cart">
            Add to cart
          </div>
          <div 
            onClick={() => updateMenu()}
            className={buttonClass}
          >
          </div>
        </div>
      </div>
    </div>
  );
};