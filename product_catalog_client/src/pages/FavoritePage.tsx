import React from 'react';
import { useContext} from 'react';
import FavoriteContext from '../FavoriteContext';

export const FavoritePage = () => {
  const { items } = useContext(FavoriteContext);

  return (
    <div>
      <h1>Favorite</h1>
      {items.map((item: string) => {
        return(
          <><h2>phone</h2><div>{item[0]}</div></>
        );
      })}
    </div>
  );

};  
