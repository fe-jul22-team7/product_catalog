/* eslint-disable react/jsx-filename-extension */
import { createContext, useState } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToFavorite = ( 
    id, name, price, fullPrice, capacity, screen, ram, image ) => {
    
    setItems((previd) => [...previd, 
      {id, name, price, fullPrice, capacity, screen, ram, image}]);
  };
  
  return (

    <FavoriteContext.Provider value={{ items, addToFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}


export default FavoriteContext;