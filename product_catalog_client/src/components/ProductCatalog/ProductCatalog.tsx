import './ProductCatalog.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { Phone } from '../../types/Phone';
import { Pagination } from '../Pagination';
import { useState } from 'react';

type PhonesType = {
  phones: Phone[]
};

export const ProductCatalog: React.FC<PhonesType> = ({ phones }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(8);

  const lastPhoneIndex = currentPage * phonesPerPage;
  const firstPhoneIndex = lastPhoneIndex - phonesPerPage;
  const currentPhone = phones.slice(firstPhoneIndex, lastPhoneIndex);

  const handleChange = (page: number) => {
    setPhonesPerPage(page);
  };

  return (
    <>
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
                <select className="phones__select"
                  value={phonesPerPage} 
                  onChange={event => handleChange(+event.target.value)}
                >
                  <option className="phones__selectText"value="8">8</option>
                  <option className="phones__selectText" value="16">16</option>
                  <option className="phones__selectText" value="32">32</option>
                </select>
              </div>
            </div>
            <div className="phones__cards">
              {currentPhone.map(telephone => 
                <ProductCard key={telephone.id} phone={telephone} />)
              }
            </div>
          </div>
        </div>
      </section>

      <Pagination 
        phonesPerPage={phonesPerPage}
        totalPhones={phones.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};
