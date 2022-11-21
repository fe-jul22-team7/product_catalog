import { ProductCatalog } from '../components/ProductCatalog';
import { useEffect, useState } from 'react';
import { getPhones } from '../api/phones';
import { Phone } from '../types/Phone';


export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then(phones => {
        setPhones(phones);
      });

  }, []);

  return (
    <ProductCatalog phones={phones}/>
  );
};
