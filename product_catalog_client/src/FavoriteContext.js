import { createContext, useState } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToFavorite = ( 
    id, name, price, fullPrice, capacity, screen, ram, image ) => {
    
    setItems((previd) => [...previd, 
      {id, name, price, fullPrice, capacity, screen, ram, image}]);
  };
  
  // eslint-disable-next-line no-console
  console.log(items);

  return (

    // eslint-disable-next-line react/jsx-filename-extension
    <FavoriteContext.Provider value={{ items, addToFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}


export default FavoriteContext;