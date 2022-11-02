import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import './App.scss';
import { Header } from './components/header/Header';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';

export const App = () => {
  return (
    <>
      <div data-cy="app">

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

              <Route
                path="*"
                element={<h1 className="title">Page not found</h1>}
              />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};
