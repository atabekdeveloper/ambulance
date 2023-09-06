import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserLayout } from 'src/components/layouts';
import { userRoutes } from 'src/routes';

import './assets/styles/App.scss';

const App: React.FC = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<UserLayout />}>
        {userRoutes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  </div>
);

export { App };
