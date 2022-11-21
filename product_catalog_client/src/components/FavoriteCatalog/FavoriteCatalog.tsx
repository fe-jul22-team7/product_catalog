import React from 'react';
import { useContext } from 'react';
import FavoriteContext from '../../FavoriteContext';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';
import './FavoriteCatalog.scss';


export const FavoriteCatalog = () => {
  const { items } = useContext(FavoriteContext);

  return (
    <div className="favorite">
      <div className="favorite__container">

        <h1 className="favorite__title">Favourites</h1>
        <span className="favorite__count">
          {items.length} items
        </span>

        <div className="favorite__list">
          {items.map((telephone: Phone) =>
            <ProductCard key={telephone.id} phone={telephone} />)
          }
        </div>
      </div>
    </div>
  );

};  