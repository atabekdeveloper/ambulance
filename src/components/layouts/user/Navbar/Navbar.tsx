/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import clsx from 'clsx';
import React from 'react';
import Img from 'react-cool-img';
import { useLocation, useNavigate } from 'react-router-dom';

import { routes } from '../routes';

import s from './navbar.module.scss';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onSelectRoute = (key: string) => navigate(key);
  return (
    <nav className={s.navbar}>
      <ul className={s.items}>
        {routes.map((route) => (
          <li
            key={route.key}
            className={clsx(s.item, pathname === route.key && s.active)}
            onClick={() => onSelectRoute(route.key)}
          >
            <Img src={pathname === route.key ? route.activeIcon : route.icon} alt="Icon" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
