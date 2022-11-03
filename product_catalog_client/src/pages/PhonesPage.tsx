
import { ProductCatalog } from '../components/ProductCatalog';
import { useEffect, useState } from 'react';
import { getPhones } from '../api/phones';
import { Phone } from '../types/Phone';


export const PhonesPage = () => {
  const [, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then(phones => {
        setPhones(phones);
      });

  }, []);


  return (
    <ProductCatalog />
  );
};
