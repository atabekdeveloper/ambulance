import clsx from 'clsx';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelectors } from 'src/hooks';

import { Navbar } from './Navbar/Navbar';

import s from './layout.module.scss';

const UserLayout: React.FC = () => {
  const { token } = useSelectors();
  return (
    <div className={clsx(s.layout)}>
      <Navbar />
      <main>{token ? <Outlet /> : <Navigate to="/login" />}</main>
    </div>
  );
};

export { UserLayout };
