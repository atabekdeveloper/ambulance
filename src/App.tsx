/* eslint-disable object-curly-newline */
import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'src/components/layouts/Layout';
import { AuthLogin } from 'src/components/screens';
import { routes } from 'src/routes';

import { useSelectors } from './hooks';

import './assets/styles/App.scss';

const App: React.FC = () => {
  const { token } = useSelectors();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (token && pathname === '/login') navigate('/');
  }, [navigate, pathname, token]);
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export { App };
