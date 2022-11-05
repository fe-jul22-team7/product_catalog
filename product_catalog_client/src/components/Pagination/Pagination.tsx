import './PaginationStyle.scss';

type Props = {
  phonesPerPage: number;
  totalPhones: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number;
};

export const Pagination: React.FC<Props> = ({
  phonesPerPage,
  totalPhones,
  setCurrentPage,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhones / phonesPerPage); i++) {
    pageNumbers.push(i);
  }
  
  const pagginate = (pageNumber:number):void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentPage(prev => prev - 1);
  };
 
  return (
    <>
      <div className='pagination pagination__list'>
        <button 
          type='button'
          className='pagination__link '
          onClick={prevPage}
        >
          { '<' }
        </button>
        { pageNumbers.map((page, index) => {
          return <button 
            type='button'
            className={currentPage === page 
              ? 'active-button': 'pagination__link'} 
            key={index}
            onClick={()=> pagginate(page)}>
            {page}
            
          </button>;
        })}
        <button 
          type='button'
          className='pagination__link '
          onClick={nextPage}
        >{ '>' }</button>
      </div>
    </>
  );
};