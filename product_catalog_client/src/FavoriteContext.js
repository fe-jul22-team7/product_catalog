import { createContext, useState } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToFavorite = ( id ) => {
    setItems((prevState) => [...prevState, {id}]);
  };

  return (

    // eslint-disable-next-line react/jsx-filename-extension
    <FavoriteContext.Provider value={{items, addToFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}


export default FavoriteContext;