import { useState } from 'react';
import { HomePageComponent } from '../components/HomePage';
import { Loader } from '../components/Loader';


enum TextError {
  None,
  Load,
  NoPeople,
}

export const HomePage = () => {
  const [isAdding] = useState(false);
  const [textError] = useState(TextError.None);

  return (
    <>
      <div className="block">
        <div className="box table-container">
          {isAdding && <Loader />}
          {textError === TextError.Load
          && (
            <p
              data-cy="peopleLoadingError"
              className="has-text-danger"
            >
              Something went wrong
            </p>

          )}

          {(isAdding && textError === TextError.NoPeople)
          && (
            <p data-cy="noPeopleMessage">
              There are no people on the server
            </p>
          )}
        </div>
      </div>

      <HomePageComponent />
    </>
  );
};
