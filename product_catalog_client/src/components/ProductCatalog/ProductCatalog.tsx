import React from 'react';
import './ProductCatalog.scss';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductCatalog: React.FC = () => {
  return (
    <section className="phones">
      <div className="phones__container">
        <div className="phones__content">
          <h1 className="phones__title">Mobile phones</h1>
          <div className="phones__cards">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};
