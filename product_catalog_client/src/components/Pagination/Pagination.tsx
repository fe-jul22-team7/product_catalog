import React from 'react';
import './PaginationStyle.scss';


export const Pagination: React.FC = () => {
  const PageNumbers = [1,2,3,4];

  return (
    <>
      <div className='pagination pagination__list'>
        <button className='pagination__link '>{ '<' }</button>
        { PageNumbers.map((page, index) => {
          return <button 
            className='pagination__link ' 
            key={index}>{page}</button>;
        })}
        <button className='pagination__link '>{ '>' }</button>
      </div>
    </>
  );
};