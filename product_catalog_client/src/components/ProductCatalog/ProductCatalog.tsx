import React from 'react';
import './ProductCatalog.scss';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductCatalog: React.FC = () => {
  return (
    <section className="phones">
      <div className="phones__container">
        <div className="phones__content">
          <h1 className="phones__title">Mobile phones</h1>
          <div className="phones__selected">
            <div>
              <p className="phones__selectName">Sort by</p>
              <select className="phones__select">
                <option className="phones__selectText">Newest</option>
                <option className="phones__selectText">Oldest</option>
                <option className="phones__selectText">By price</option>
              </select>
            </div>

            <div>
              <p className="phones__selectName">Items on page</p>
              <select className="phones__select">
                <option className="phones__selectText">8</option>
                <option className="phones__selectText">16</option>
                <option className="phones__selectText">32</option>
              </select>
            </div>
          </div>
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
