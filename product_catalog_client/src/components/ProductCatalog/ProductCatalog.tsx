import React from 'react';
import './ProductCatalog.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { Phone } from '../../types/Phone';

type PhonesType = {
  phones: Phone[]
};

export const ProductCatalog: React.FC<PhonesType> = ({ phones }) => {
  return (
    <section className="phones">
      <div className="phones__container">
        <div className="phones__content">
          <h1 className="phones__title">Mobile phones</h1>
          <div className="phones__cards">
            {phones.map(telephone => 
              <ProductCard key={telephone.id} phone={telephone} />)
            }
          </div>
        </div>
      </div>
    </section>
  );
};
