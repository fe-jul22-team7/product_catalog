import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import PageNotFound from './components/PageNotFound';

import { AccessoriesPage } from './pages/AccessoriesPage';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { FavoritePage } from './pages/FavoritePage';
import { CartPage } from './pages/CartPage';
import { Footer } from './components/Footer/Footer';
import { FavoriteProvider } from './FavoriteContext';

export const App = () => {
  
  
  return (
    <>
      <div data-cy="app" className='page'>
        <FavoriteProvider>
          <Header />
          <main className="section">
            <div className="container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="home" element={<Navigate to="/" replace />} />

                <Route path="/phones">
                  <Route index element={<PhonesPage />} />
                </Route>

                <Route path="/tablets">
                  <Route index element={<TabletsPage />} />
                </Route>

                <Route path="/accessories">
                  <Route index element={<AccessoriesPage />} />
                </Route>

                <Route path="/favourite">
                  <Route index element={<FavoritePage />} />
                </Route>

                <Route path="/cart">
                  <Route index element={<CartPage />} />
                </Route>

                <Route path="*" index element={<PageNotFound />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </FavoriteProvider>
      </div>
    </>
  );
};
