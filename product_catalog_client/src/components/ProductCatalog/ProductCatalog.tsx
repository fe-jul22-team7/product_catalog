import './ProductCatalog.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { Phone } from '../../types/Phone';
import { Pagination } from '../Pagination';
import { useState } from 'react';
import { FilterType } from '../../enums/FilterTypes';
import { sortPhones } from '../Filter/SortPhones';

type PhonesType = {
  phones: Phone[]
};


export const ProductCatalog: React.FC<PhonesType> = ({ phones }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(8);
  const [filterType, setFilterType] = useState<FilterType>(FilterType.NEWEST);

  const from = currentPage * phonesPerPage;
  const to = from - phonesPerPage;
  const currentPhone = sortPhones(phones, filterType);

  const handleChange = (page: number) => {
    setPhonesPerPage(page);
  };

  const handleFilter = (value: string) => {
    switch (value) {
      case FilterType.ASC: {
        setFilterType(FilterType.ASC);
        break;
      }
  
      case FilterType.OLDEST: {
        setFilterType(FilterType.OLDEST);
        break;
      }
  
      default:
      case FilterType.NEWEST:
        setFilterType(FilterType.NEWEST);
    }
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
                <select className="phones__select"
                  value={filterType}
                  onChange={event => handleFilter(event.target.value)}
                >
                  <option 
                    className="phones__selectText" 
                    value={FilterType.NEWEST}
                  > Newest
                  </option>
                  <option 
                    className="phones__selectText" 
                    value={FilterType.OLDEST}
                  > Oldest
                  </option>
                  <option className="phones__selectText" 
                    value={FilterType.ASC}
                  >By price
                  </option>
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
              {currentPhone.slice(to, from).map(telephone => 
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
